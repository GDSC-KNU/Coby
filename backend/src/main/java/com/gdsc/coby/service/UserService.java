package com.gdsc.coby.service;

import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.gdsc.coby.domain.User;
import com.gdsc.coby.dto.UserDto;
import com.gdsc.coby.dto.request.UserRequestDto;
import com.gdsc.coby.repository.UserRepository;
import com.gdsc.coby.security.SecurityUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.Optional;



@Service
@Slf4j
@RequiredArgsConstructor
@Transactional
public class UserService {
    private final AmazonS3Client amazonS3Client;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    @Transactional(readOnly = true)
    public List<UserDto> getUsers() {
        return userRepository.findAll().stream()
                .map(UserDto::from)
                .toList();
    }

    @Transactional(readOnly = true)
    public UserDto getUser(String userId) {
        return userRepository.findByUserId(userId)
                .map(UserDto::from)
                .orElseThrow(() -> new UsernameNotFoundException("유저 아이디 " + userId+ "로 조회되는 정보가 없습니다."));
    }

    @Transactional(readOnly = true)
    public UserDto getUserBySecurity() {
        return userRepository.findByUserId(SecurityUtil.getCurrentUserId())
                .map(UserDto::from)
                .orElseThrow(() -> new UsernameNotFoundException("로그인 유저 정보가 없습니다."));
    }


    public UserDto updateUserInfo(MultipartFile profileImage,String name) {
        User user = userRepository.findByUserId(SecurityUtil.getCurrentUserId())
                .orElseThrow(() -> new UsernameNotFoundException("로그인 유저 정보가 없습니다."));
        if((name==null && profileImage==null))
            throw new IllegalArgumentException("수정할 정보가 없습니다.");
        if(name!=null) {

            if (!name.equals(user.getName()))
                user.setName(name);
        }
        if(profileImage!=null) {
            String uploadImageUrl = upload(user.getUserId(), profileImage);

            if (uploadImageUrl != null && !uploadImageUrl.equals(user.getProfileUrl()))
                user.setProfileUrl(uploadImageUrl);
        }

        return UserDto.from(user);
    }

    public UserDto updateUserPassword(String exPassword, String newPassword) {
        User user = userRepository.findByUserId(SecurityUtil.getCurrentUserId())
                .orElseThrow(() -> new UsernameNotFoundException("로그인 유저 정보가 없습니다."));

        if(!passwordEncoder.matches(exPassword, user.getPassword())) {
            throw new IllegalArgumentException("비밀번호가 맞지 않습니다");
        }
        user.setPassword(passwordEncoder.encode(newPassword));

        return UserDto.from(user);
    }

    public boolean deleteUser() {
        User user = userRepository.findByUserId(SecurityUtil.getCurrentUserId())
                .orElseThrow(() -> new UsernameNotFoundException("로그인 유저 정보가 없습니다."));
        userRepository.delete(user);

        return true;
    }

    public void updateUserExp(List<String> users) {
        users.forEach(userId -> userRepository.findByUserId(userId)
                .orElseThrow(() -> new UsernameNotFoundException("유저 정보가 존재하지 않습니다."))
                .setExp_point(100L));
    }

    private String upload(String userId, MultipartFile multipartFile) {
        File uploadFile = convert(multipartFile)
                .orElseThrow(() -> new IllegalArgumentException("MultipartFile -> File로 전환이 실패했습니다."));

        // UserProfile/userId/파일이름
        String fileName = "UserProfile/"+ userId + "/" + uploadFile.getName();
        String uploadImageUrl = putS3(uploadFile, fileName);
        removeNewFile(uploadFile);

        return uploadImageUrl;
    }

    private String putS3(File uploadFile, String fileName) {
        amazonS3Client.putObject(new PutObjectRequest(bucket, fileName, uploadFile).withCannedAcl(
                CannedAccessControlList.PublicRead));
        return amazonS3Client.getUrl(bucket, fileName).toString();
    }

    private void removeNewFile(File targetFile) {
        if (targetFile.delete()) {
            log.info("파일이 삭제되었습니다.");
        } else {
            log.info("파일이 삭제되지 못했습니다.");
        }
    }

    private Optional<File> convert(MultipartFile file) {

        File convertFile = new File(file.getOriginalFilename());
        try {
            if(convertFile.createNewFile()) {
                try (FileOutputStream fos = new FileOutputStream(convertFile)) {
                    fos.write(file.getBytes());
                }
                return Optional.of(convertFile);
            }
        } catch (IOException e) {
            throw new IllegalArgumentException("MultipartFile -> File로 작성 실패했습니다.");
        }

        return Optional.empty();
    }
}
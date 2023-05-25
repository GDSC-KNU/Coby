package com.gdsc.coby.service;

import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.gdsc.coby.domain.Group;
import com.gdsc.coby.domain.User;
import com.gdsc.coby.dto.GroupDto;
import com.gdsc.coby.repository.GroupRepository;
import com.gdsc.coby.repository.UserRepository;
import com.gdsc.coby.security.SecurityUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import org.webjars.NotFoundException;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
@Transactional
public class GroupService {
    private final AmazonS3Client amazonS3Client;
    private final GroupRepository groupRepository;
    private final UserRepository userRepository;

    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    // 그룹 목록 조회
    @Transactional(readOnly = true)
    public List<GroupDto> getGroups(){
        return groupRepository.findAll().stream()
                .map(GroupDto::from)
                .toList();
    }

    // 그룹 정보 조회
    @Transactional(readOnly = true)
    public GroupDto getGroupInfo(Long groupId){
        return groupRepository.findById(groupId)
                .map(GroupDto::from)
                .orElseThrow(() -> new NotFoundException("그룹찾기 실패 : 해당 그룹을 찾을 수 없습니다."));

    }

    @Transactional(readOnly = true)
    public GroupDto getMyGroupInfo(){
        User user = userRepository.findByUserId(SecurityUtil.getCurrentUserId())
                .orElseThrow(()-> new UsernameNotFoundException("로그인 유저 정보가 없습니다."));
        return groupRepository.findById(user.getGroup().getId())
                .map(GroupDto::from)
                .orElseThrow(() -> new NotFoundException("그룹찾기 실패 : 해당 그룹을 찾을 수 없습니다."));
    }

    //그룹 생성
    @Transactional
    public GroupDto creatGroup(MultipartFile profileImage,String name,String description){
        Group group = groupRepository.save(Group.of(name,description));

        if(group==null || group.getId()==null) throw new IllegalArgumentException("그룹생성 실패");
        else join(group.getId());

        if(profileImage!=null) {
            String uploadImageUrl = upload(group.getName(), profileImage);

            if (uploadImageUrl != null && !uploadImageUrl.equals(group.getProfileUrl()))
                group.setProfileUrl(uploadImageUrl);
        }
        return GroupDto.from(group);
    }

    @Transactional
    public boolean join(Long groupId) {
        User user = userRepository.findByUserId(SecurityUtil.getCurrentUserId())
                .orElseThrow(() -> new UsernameNotFoundException("로그인 유저 정보가 없습니다."));

        Group group = groupRepository.findById(groupId)
                .orElseThrow(() -> new NotFoundException("그룹찾기 실패 : 해당 그룹을 찾을 수 없습니다."));
        if(user.getGroup()!=null){
            throw new RuntimeException("이미 가입된 그룹이 존재합니다.");
        }
        group.setMembers(user);
        user.setGroup(group);
        return true;
    }

    @Transactional
    public boolean leave(Long groupId) {
        User user = userRepository.findByUserId(SecurityUtil.getCurrentUserId())
                .orElseThrow(() -> new UsernameNotFoundException("로그인 유저 정보가 없습니다."));

        Group group = groupRepository.findById(groupId)
                .orElseThrow(() -> new NotFoundException("그룹찾기 실패 : 해당 그룹을 찾을 수 없습니다."));
        System.out.println("생성자: " +group.getCreatedBy());
        if(group.getCreatedBy().equals(user.getUserId())) {
            group.getMembers()
                    .forEach(members -> {
                        User member = userRepository.findByUserId(members.getUserId())
                                .orElseThrow(() -> new NotFoundException("그룹삭제 실패 : 멤버를 찾을 수 없습니다."));
                        member.setGroup(null);
                    });
            deleteGroup(group.getId());
        }
        else {
            user.setGroup(null);
            group.updateMembers(user);
        }
        return true;
    }

    @Transactional
    public GroupDto updateGroupInfo(Long groupId,MultipartFile profileImage, String name, String description){
        Group group = groupRepository.findById(groupId)
                .orElseThrow(()-> new NotFoundException("그룹찾기 실패 : 해당 그룹을 찾을 수 없습니다."));

        if(!group.getCreatedBy().equals(SecurityUtil.getCurrentUserId())){
            throw new RuntimeException("그룹 수정 권한이 없습니다.");
        }

        if(name!=null && !group.getName().equals(name)) group.setName(name);
        if(description!=null && !group.getDescription().equals(description)) group.setDescription(description);
        if(profileImage!=null) {
            String uploadImageUrl = upload(group.getName(), profileImage);

            if (uploadImageUrl != null && !uploadImageUrl.equals(group.getProfileUrl()))
                group.setProfileUrl(uploadImageUrl);
        }

        return GroupDto.from(group);
    }

    public Boolean deleteGroup(Long groupId) {
        Group group = groupRepository.findById(groupId)
                .orElseThrow(() -> new NotFoundException("그룹찾기 실패 : 해당 그룹을 찾을 수 없습니다."));
        groupRepository.delete(group);
        return true;
    }

    private String upload(String groupName, MultipartFile multipartFile) {
        File uploadFile = convert(multipartFile)
                .orElseThrow(() -> new IllegalArgumentException("MultipartFile -> File로 전환이 실패했습니다."));

        // UserProfile/groupName/파일이름
        String fileName = "GroupProfile/"+ groupName.toString() + "/" + uploadFile.getName();
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
package com.gdsc.coby.service;

import com.gdsc.coby.domain.User;
import com.gdsc.coby.dto.UserDto;
import com.gdsc.coby.repository.UserRepository;
import com.gdsc.coby.security.SecurityUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

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

    public UserDto updateUserInfo(String name) {
        User user = userRepository.findByUserId(SecurityUtil.getCurrentUserId())
                .orElseThrow(() -> new UsernameNotFoundException("로그인 유저 정보가 없습니다."));

        if(name == null)
            throw new IllegalArgumentException("수정할 정보가 없습니다.");
        if(name != null && !name.equals(user.getName()))
            user.setName(name);

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
}

package com.gdsc.coby.service;

import com.gdsc.coby.domain.User;
import com.gdsc.coby.dto.UserDto;
import com.gdsc.coby.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class UserService {
    private final UserRepository userRepository;

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
                .orElseThrow(() -> new EntityNotFoundException(userId+ " - 유저를 찾을 수 없습니다."));
    }

    public void updateUserName(String email, String name) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new EntityNotFoundException("유저를 찾을 수 없습니다."));

        //user.setName(name);
        // TODO: 인증 기능 추가 시 로그인 정보 확인 !
        //  현재 닉네임과 같은지도 확인
    }

    public void updateUserPassword(String exPassword, String newPassword) {
        // TODO: 인증 기능 추가 시 구현하기
    }

    public void deleteUser() {

    }
}

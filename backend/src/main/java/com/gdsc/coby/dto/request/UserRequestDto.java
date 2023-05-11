package com.gdsc.coby.dto.request;

import com.gdsc.coby.dto.UserDto;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.multipart.MultipartFile;

public record UserRequestDto(
        String userId,
        String name,
        String password,
        MultipartFile profileImage
) {

    public static UserRequestDto of(String userId, String name, String password, MultipartFile profileImage) {
        return new UserRequestDto(userId, name, password ,profileImage);
    }

    public UserDto toDto() {
        return UserDto.of(
                userId,
                null,
                name,
                password,
                null,
                0L
        );
    }
}


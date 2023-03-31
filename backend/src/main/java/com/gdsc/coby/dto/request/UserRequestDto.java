package com.gdsc.coby.dto.request;

import com.gdsc.coby.dto.UserDto;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;

public record UserRequestDto(
        String userId,
        String name,
        String password
) {

    public static UserRequestDto of(String userId, String name, String password) {
        return new UserRequestDto(userId, name, password);
    }

    public UserDto toDto() {
        return UserDto.of(
               userId,
                null,
                name,
                password,
                0L
        );
    }
}


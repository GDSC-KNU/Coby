package com.gdsc.coby.dto.request;

import com.gdsc.coby.domain.User;
import com.gdsc.coby.dto.UserDto;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;

public record UserRequestDto(
        String userId,
        String name,
        String email,
        String password
) {

    public static UserRequestDto of(String userId, String name, String email, String password) {
        return new UserRequestDto(userId, name, email, password);
    }

    public User toEntity(PasswordEncoder passwordEncoder) {
        return User.of(
               userId,
                null,
                name,
                email,
                passwordEncoder.encode(password),
                0L
        );
    }

    public UsernamePasswordAuthenticationToken toAuthentication() {
        return new UsernamePasswordAuthenticationToken(userId, password);
    }
}


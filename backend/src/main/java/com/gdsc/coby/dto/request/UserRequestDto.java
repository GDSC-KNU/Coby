package com.gdsc.coby.dto.request;

import com.gdsc.coby.domain.User;
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

    public User toEntity(PasswordEncoder passwordEncoder) {
        return User.of(
               userId,
                null,
                name,
                passwordEncoder.encode(password),
                0L
        );
    }

    public UsernamePasswordAuthenticationToken toAuthentication() {
        return new UsernamePasswordAuthenticationToken(userId, password);
    }
}


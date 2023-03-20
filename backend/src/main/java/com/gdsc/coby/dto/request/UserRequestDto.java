package com.gdsc.coby.dto.request;

import com.gdsc.coby.dto.UserDto;

public record UserRequestDto(
        String userId,
        String name,
        String email,
        String password
) {

    public static UserRequestDto of(String userId, String name, String email, String password) {
        return new UserRequestDto(userId, name, email, password);
    }

    public UserDto toDto(UserDto userDto) {
        return UserDto.of(
                userId,
                null,
                name,
                email,
                password,
                0L
        );
    }
}


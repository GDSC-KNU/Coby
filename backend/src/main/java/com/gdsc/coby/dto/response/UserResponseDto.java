package com.gdsc.coby.dto.response;

import com.gdsc.coby.dto.UserDto;

public record UserResponseDto(
        String userId,
        String groupName,
        String name,
        String profileUrl,
        Long exp_point
) {
    public static UserResponseDto of(String userId, String groupName, String name, String profileUrl,Long exp_point) {
        return new UserResponseDto(userId, groupName, name, profileUrl, exp_point);
    }

    public static UserResponseDto from(UserDto dto){
        return new UserResponseDto(
                dto.userId(),
                dto.groupName(),
                dto.name(),
                dto.profileUrl(),
                dto.exp_point()
        );
    }
}
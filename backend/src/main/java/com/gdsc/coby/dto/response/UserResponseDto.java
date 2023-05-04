package com.gdsc.coby.dto.response;

import com.gdsc.coby.dto.GroupDto;
import com.gdsc.coby.dto.UserDto;

public record UserResponseDto(
        String userId,
        GroupDto group,
        String name,
        String profileUrl,
        Long exp_point
) {
    public static UserResponseDto of(String userId, GroupDto group, String name, String profileUrl,Long exp_point) {
        return new UserResponseDto(userId, group, name, profileUrl, exp_point);
    }

    public static UserResponseDto from(UserDto dto){
        return new UserResponseDto(
                dto.userId(),
                dto.group(),
                dto.name(),
                dto.profileUrl(),
                dto.exp_point()
        );
    }
}

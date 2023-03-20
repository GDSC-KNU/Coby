package com.gdsc.coby.dto.response;

import com.gdsc.coby.dto.GroupDto;
import com.gdsc.coby.dto.UserDto;

public record UserResponseDto(
        String userId,
        GroupDto group,
        String name,
        String email,
        Long exp_point
) {
    public static UserResponseDto of(String userId, GroupDto group, String name, String email, Long exp_point) {
        return new UserResponseDto(userId, group, name, email, exp_point);
    }

    public static UserResponseDto from(UserDto dto){
        return new UserResponseDto(
                dto.userId(),
                dto.group(),
                dto.name(),
                dto.email(),
                dto.exp_point()
        );
    }
}

package com.gdsc.coby.dto;

import com.gdsc.coby.domain.Group;
import com.gdsc.coby.domain.User;

public record UserDto(
        String userId,
        GroupDto group,
        String name,
        String email,
        String password,
        Long exp_point
) {
    public static UserDto of(String userId, GroupDto group, String name, String email, String password, Long exp_point){
        return new UserDto(userId, group, name, email, password, exp_point);
    }

    public static UserDto from(User entity){
        return new UserDto(
                entity.getUserId(),
                GroupDto.from(entity.getGroup()),
                entity.getName(),
                entity.getEmail(),
                entity.getPassword(),
                entity.getExp_point()
        );
    }

    public User toEntity(Group group){
        return User.of(
                userId,
                group,
                name,
                email,
                password,
                exp_point
        );
    }

}
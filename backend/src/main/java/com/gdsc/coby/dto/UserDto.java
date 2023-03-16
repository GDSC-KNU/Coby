package com.gdsc.coby.dto;

import com.gdsc.coby.domain.Group;
import com.gdsc.coby.domain.User;

public record UserDto(
        String id,
        GroupDto group,
        String name,
        String password,
        Long exp_point
) {
    public UserDto of(String  id,GroupDto group,String name,String password,Long exp_point){
        return new UserDto(id,group,name,password,exp_point);
    }

    public UserDto of(String  id,GroupDto group,String name,Long exp_point){
        return new UserDto(id,group,name,null,exp_point);
    }

    public static UserDto from(User entity){
        return new UserDto(
                entity.getEmail(),
                GroupDto.from(entity.getGroup()),
                entity.getName(),
                entity.getPassword(),
                entity.getExp_point()
        );
    }

    public User toEntity(Group group){
        return User.of(
                id,
                group,
                name,
                password,
                exp_point
        );
    }

}

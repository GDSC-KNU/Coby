package com.gdsc.coby.dto;

import com.gdsc.coby.domain.Group;
import com.gdsc.coby.domain.User;
import com.gdsc.coby.domain.constant.TagType;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

public record GroupDto(
        Long id,
        String name,
        String description,
        String profileUrl,
        LocalDateTime createdAt,
        String createdBy,
        Set<UserDto> members
) {

    public static GroupDto of (String name, String description,String profileUrl,Set<UserDto> members){
        return new GroupDto(null,name,description,profileUrl,null,null, members);
    }

    public static GroupDto from (Group entity){
        return new GroupDto(
                entity.getId(),
                entity.getName(),
                entity.getDescription(),
                entity.getProfileUrl(),
                entity.getCreatedAt(),
                entity.getCreatedBy(),
                entity.getMembers().stream().map(UserDto::from)
                        .collect(Collectors.toSet())
        );
    }

    public Group toEntity(){
        return Group.of(
                name,
                description
        );
    }
}
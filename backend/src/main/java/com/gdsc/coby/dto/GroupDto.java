package com.gdsc.coby.dto;

import com.gdsc.coby.domain.Group;

import java.time.LocalDateTime;

public record GroupDto(
        Long id,
        String name,
        String description,
        LocalDateTime created_at,
        String created_by
) {
    public GroupDto of (Long id,String name,String description,LocalDateTime created_at,String created_by){
        return new GroupDto(id,name,description,created_at,created_by);
    }

    public static GroupDto from (Group entity){
        return new GroupDto(
                entity.getId(),
                entity.getName(),
                entity.getDescription(),
                entity.getCreatedAt(),
                entity.getCretedBy()
        );
    }

    public Group toEntity(){
        return Group.of(
                name,
                description
        );
    }
}

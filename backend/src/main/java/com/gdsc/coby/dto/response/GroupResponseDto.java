package com.gdsc.coby.dto.response;


import com.gdsc.coby.dto.GroupDto;
import org.springframework.security.core.userdetails.User;

import java.util.List;

public record GroupResponseDto(
        Long id,
        String name,
        String description,
        List<User> members ,
        List<String> tags
) {

    public static GroupResponseDto of(Long id, String name, String description, List<User> members,List<String> tags){
        return new GroupResponseDto(id,name,description,members,tags);
    }

    public static GroupResponseDto from(GroupDto dto){
        return new GroupResponseDto(
                dto.id(),
                dto.name(),
                dto.description(),
                null,
                null
        );
    }
}

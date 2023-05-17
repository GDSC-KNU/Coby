package com.gdsc.coby.dto.response;


import com.gdsc.coby.dto.GroupDto;
import java.util.List;

public record GroupResponseDto(
        Long id,
        String name,
        String description,
        List<UserResponseDto> members
) {

    public static GroupResponseDto of(Long id, String name, String description, List<UserResponseDto> members){
        return new GroupResponseDto(id,name,description,members);
    }

    public static GroupResponseDto from(GroupDto dto){
        return new GroupResponseDto(
                dto.id(),
                dto.name(),
                dto.description(),
                dto.members().stream().map(UserResponseDto::from)
                        .toList()
        );
    }
}
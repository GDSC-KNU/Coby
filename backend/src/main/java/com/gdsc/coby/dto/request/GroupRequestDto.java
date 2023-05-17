package com.gdsc.coby.dto.request;

import com.gdsc.coby.dto.GroupDto;

public record GroupRequestDto(
        String name,
        String description
) {

    public static GroupRequestDto of(String name, String description){
        return new GroupRequestDto(name, description);
    }

    public GroupDto toDto(){
        return GroupDto.of(
                name,
                description,
                null
        );
    }

}
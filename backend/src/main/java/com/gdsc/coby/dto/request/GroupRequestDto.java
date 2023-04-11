package com.gdsc.coby.dto.request;

import com.gdsc.coby.domain.Group;
import com.gdsc.coby.dto.GroupDto;
import org.springframework.lang.Nullable;

import java.util.List;

public record GroupRequestDto(
        String name,
        String description,
        List<String> tags
) {

    public static GroupRequestDto of(String name, String description,List<String> tags){
        return new GroupRequestDto(name, description,tags);
    }

    public GroupDto toDto(){
        return GroupDto.of(
                name,
                description
        );
    }

}

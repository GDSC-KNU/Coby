package com.gdsc.coby.dto.request;

import com.gdsc.coby.domain.Group;
import com.gdsc.coby.dto.GroupDto;
import com.gdsc.coby.dto.TagDto;
import org.springframework.lang.Nullable;

import java.util.List;

public record GroupRequestDto(
        String name,
        String description,
        String purpose,
        String language,
        String tool,
        String detail
) {

    public static GroupRequestDto of(String name, String description,String purpose,String language, String tool,String detail){
        return new GroupRequestDto(name, description,purpose,language,tool,detail);
    }

    public GroupDto toDto(){
        return GroupDto.of(
                name,
                description,
                purpose,
                language,
                tool,
                detail
        );
    }

}

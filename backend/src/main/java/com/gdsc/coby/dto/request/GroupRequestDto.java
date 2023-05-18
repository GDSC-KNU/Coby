package com.gdsc.coby.dto.request;

import com.gdsc.coby.dto.GroupDto;
import org.springframework.web.multipart.MultipartFile;

public record GroupRequestDto(
        String name,
        String description,
        MultipartFile profileImage
) {

    public static GroupRequestDto of(String name, String description,MultipartFile profileImage){
        return new GroupRequestDto(name, description,profileImage);
    }

    public GroupDto toDto(){
        return GroupDto.of(
                name,
                description,
                null,
                null
        );
    }

}
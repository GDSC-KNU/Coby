package com.gdsc.coby.dto.response;


import com.gdsc.coby.domain.User;
import com.gdsc.coby.domain.constant.TagType;
import com.gdsc.coby.dto.GroupDto;
import com.gdsc.coby.dto.TagDto;

import java.util.List;
import java.util.stream.Collectors;

public record GroupResponseDto(
        Long id,
        String name,
        String description,
        List<User> members,
        String purpose,
        String language,
        String tool,
        String detail
) {

    public static GroupResponseDto of(Long id, String name, String description, List<User> members,String purpose,String language, String tool,String detail){
        return new GroupResponseDto(id,name,description,members,purpose,language,tool,detail);
    }

    public static GroupResponseDto from(GroupDto dto){
        return new GroupResponseDto(
                dto.id(),
                dto.name(),
                dto.description(),
                List.copyOf(dto.members()),
                dto.tags().stream().filter(tag -> tag.tagType().equals(TagType.PURPOSE))
                        .map(TagDto::name).collect(Collectors.joining(",")),
                dto.tags().stream().filter(tag -> tag.tagType().equals(TagType.LANGUAGE))
                        .map(TagDto::name).collect(Collectors.joining(",")),
                dto.tags().stream().filter(tag -> tag.tagType().equals(TagType.TOOL))
                        .map(TagDto::name).collect(Collectors.joining(",")),
                dto.tags().stream().filter(tag -> tag.tagType().equals(TagType.DETAIL))
                        .map(TagDto::name).collect(Collectors.joining(","))
        );
    }
}

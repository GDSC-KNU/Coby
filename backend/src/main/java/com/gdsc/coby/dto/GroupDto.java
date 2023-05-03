package com.gdsc.coby.dto;

import com.gdsc.coby.domain.Group;
import com.gdsc.coby.domain.User;
import com.gdsc.coby.domain.constant.TagType;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

public record GroupDto(
        Long id,
        String name,
        String description,
        LocalDateTime createdAt,
        String createdBy,
        Set<User> members,
        List<TagDto> tags
) {
    public static GroupDto of (String name, String description, String purpose, String language, String tool, String detail){
        List<TagDto> tagList = new ArrayList<>();
        for(String p : purpose.split(","))
            tagList.add(TagDto.of(p, TagType.PURPOSE));
        for(String l : language.split(","))
            tagList.add(TagDto.of(l,TagType.LANGUAGE));
        for(String t : tool.split(","))
            tagList.add(TagDto.of(t,TagType.TOOL));
        for(String d : detail.split(","))
            tagList.add(TagDto.of(d,TagType.DETAIL));
        return new GroupDto(null,name,description,null,null,null,tagList);
    }

    public static GroupDto from (Group entity,List<TagDto> tag){
        return new GroupDto(
                entity.getId(),
                entity.getName(),
                entity.getDescription(),
                entity.getCreatedAt(),
                entity.getCreatedBy(),
                entity.getMembers(),
                tag
        );
    }

    public Group toEntity(){
        return Group.of(
                name,
                description
        );
    }
}

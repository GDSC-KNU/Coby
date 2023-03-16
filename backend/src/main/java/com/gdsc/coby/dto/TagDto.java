package com.gdsc.coby.dto;

import com.gdsc.coby.domain.Tag;
import com.gdsc.coby.domain.constant.TagType;

public record TagDto(
        Long id,
        String name,
        String color,
        TagType tagType)
{
    public TagDto of(Long id, String name, String color, TagType tagType){
        return new TagDto(id,name,color,tagType);
    }

    public TagDto of(Long id, String name,TagType tagType){
        return new TagDto(id,name,null,tagType);
    }

    public static TagDto from(Tag entity){
        return new TagDto(
                entity.getId(),
                entity.getName(),
                entity.getColor(),
                entity.getTagType()
        );
    }

    public Tag toEntity(){
        return Tag.of(
                name,
                color,
                tagType
        );
    }
}

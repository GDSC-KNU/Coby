package com.gdsc.coby.dto;

import com.gdsc.coby.domain.Tag;
import com.gdsc.coby.domain.constant.TagType;

public record TagDto(
        Long id,
        String name,
        TagType tagType
) {
    public static TagDto of(Long id, String name, TagType tagType){
        return new TagDto(id, name, tagType);
    }

    public static TagDto of(String name, TagType tagType){
        return new TagDto(null, name, tagType);
    }

    public static TagDto from(Tag entity){
        return new TagDto(
                entity.getId(),
                entity.getName(),
                entity.getTagType()
        );
    }

    public Tag toEntity(){
        return Tag.of(
                name,
                tagType
        );
    }
}

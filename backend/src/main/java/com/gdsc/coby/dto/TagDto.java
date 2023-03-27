package com.gdsc.coby.dto;

import com.gdsc.coby.domain.Tag;
import com.gdsc.coby.domain.constant.TagType;

public record TagDto(
        String name,
        TagType tagType
) {
    public static TagDto of(String name, TagType tagType){
        return new TagDto(name, tagType);
    }

    public static TagDto from(Tag entity){
        return new TagDto(
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

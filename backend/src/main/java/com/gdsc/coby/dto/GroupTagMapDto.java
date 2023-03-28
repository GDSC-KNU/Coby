package com.gdsc.coby.dto;

import com.gdsc.coby.domain.Group;
import com.gdsc.coby.domain.GroupTagMap;
import com.gdsc.coby.domain.Tag;

public record GroupTagMapDto(
        Long id,
        GroupDto group,
        TagDto tag
) {
    public static GroupTagMapDto of(Long id, GroupDto group,TagDto tag){
        return new GroupTagMapDto(id, group, tag);
    }

    public static GroupTagMapDto of(GroupDto group, TagDto tag) {
        return new GroupTagMapDto(null, group, tag);
    }

    public static GroupTagMapDto from(GroupTagMap entity){
        return new GroupTagMapDto(
                entity.getId(),
                GroupDto.from(entity.getGroup()),
                TagDto.from(entity.getTag())
        );
    }

    public GroupTagMap toEntity(Group group, Tag tag){
        return GroupTagMap.of(
                group,tag
        );
    }
}

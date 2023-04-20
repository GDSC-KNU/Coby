package com.gdsc.coby.dto;

import com.gdsc.coby.domain.Room;
import com.gdsc.coby.domain.constant.TagType;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Stream;

public record RoomDto(
        Long id,
        String name,
        String url,
        String password,
        Integer personnel,
        List<TagDto> tags,
        LocalDateTime createdAt,
        String createdBy)
{

    public static RoomDto of (String name, String url, String password, String language, String tool){
        return new RoomDto(null, name, url, password, 6,
                Stream.of(TagDto.of(language, TagType.LANGUAGE), TagDto.of(tool, TagType.TOOL)).toList(),
                null, null);
    }

    public static RoomDto from(Room entity, List<TagDto> tag){
        return new RoomDto(
                entity.getId(),
                entity.getName(),
                entity.getUrl(),
                entity.getPassword(),
                entity.getPersonnel(),
                tag,
                entity.getCreatedAt(),
                entity.getCreatedBy()
        );
    }

    public Room toEntity(){
        return Room.of(
                name,
                url,
                password,
                personnel
        );
    }
}

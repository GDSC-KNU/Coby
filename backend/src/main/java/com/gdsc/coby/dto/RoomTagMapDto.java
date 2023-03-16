package com.gdsc.coby.dto;

import com.gdsc.coby.domain.Room;
import com.gdsc.coby.domain.RoomTagMap;
import com.gdsc.coby.domain.Tag;

public record RoomTagMapDto(
        Long id,
        RoomDto room,
        TagDto tag
) {
    public static RoomTagMapDto of(Long id, RoomDto room,TagDto tag){
        return new RoomTagMapDto(id,room,tag);
    }

    public static RoomTagMapDto from(RoomTagMap entity){
        return new RoomTagMapDto(
                entity.getId(),
                RoomDto.from(entity.getRoom()),
                TagDto.from(entity.getTag())
        );
    }

    public RoomTagMap toEntity(Room room,Tag tag){
        return RoomTagMap.of(
                room,tag
        );
    }
}

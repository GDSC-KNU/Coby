package com.gdsc.coby.dto;

import com.gdsc.coby.domain.RoomTagMap;

public record RoomTagMapDto(
        RoomDto room,
        TagDto tag
) {
    public static RoomTagMapDto of(RoomDto room,TagDto tag){
        return new RoomTagMapDto(room, tag);
    }

    public RoomTagMap toEntity(){
        return RoomTagMap.of(
                room.toEntity(),
                tag.toEntity()
        );
    }
}

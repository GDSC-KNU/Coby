package com.gdsc.coby.dto;

import com.gdsc.coby.domain.Room;
import com.gdsc.coby.domain.RoomTagMap;
import com.gdsc.coby.domain.Tag;

public record RoomTagMapDto(
        RoomDto room,
        TagDto tag
) {
    public static RoomTagMapDto of(RoomDto room,TagDto tag){
        return new RoomTagMapDto(room,tag);
    }

    public static RoomTagMapDto from(RoomTagMap entity){
        return new RoomTagMapDto(
                RoomDto.from(entity.getRoom()),
                TagDto.from(entity.getTag())
        );
    }

    public RoomTagMap toEntity(){
        return RoomTagMap.of(
                room.toEntity(),
                tag.toEntity()
        );
    }
}

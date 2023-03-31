package com.gdsc.coby.dto;

import com.gdsc.coby.domain.Room;

import java.time.LocalDateTime;
import java.util.List;

public record RoomDto(
        Long id,
        String name,
        String url,
        String password,
        Integer personnel,
        List<String> tags,
        LocalDateTime createdAt,
        String createdBy)
{
    public static RoomDto of(Long id, String name, String url, String password, Integer personnel, List<String> tags, LocalDateTime createdAt, String createdBy){
        return new RoomDto(id, name, url, password, personnel, tags, createdAt, createdBy);
    }

    public static RoomDto of (String name, String url, String password, Integer limit, List<String> tags){
        return new RoomDto(null, name, url, password, limit,tags, null, null);
    }

    public static RoomDto from(Room entity){
        return new RoomDto(
                entity.getId(),
                entity.getName(),
                entity.getUrl(),
                entity.getPassword(),
                entity.getPersonnel(),
                null,
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

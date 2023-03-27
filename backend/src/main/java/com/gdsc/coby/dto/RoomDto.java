package com.gdsc.coby.dto;

import com.gdsc.coby.domain.Room;

import java.time.LocalDateTime;

public record RoomDto(
        Long id,
        String name,
        String url,
        String password,
        Integer personnel,
        LocalDateTime createdAt,
        String createdBy)
{
    public RoomDto of(Long id, String name, String url, String password, Integer personnel, LocalDateTime createdAt, String createdBy){
        return new RoomDto(id, name, url, password, personnel, createdAt, createdBy);
    }

    public RoomDto of (Long id, String name, String url, String password, Integer limit){
        return new RoomDto(id, name, url, password, limit,null, null);
    }

    public static RoomDto from(Room entity){
        return new RoomDto(
                entity.getId(),
                entity.getName(),
                entity.getUrl(),
                entity.getPassword(),
                entity.getPersonnel(),
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

package com.gdsc.coby.dto;

import com.gdsc.coby.domain.Room;

public record RoomDto(
        Long id,
        String name,
        String url,
        String password,
        Integer limit,
        String created_at,
        String created_by)
{
    public RoomDto of(Long id, String name, String url, String password, Integer limit, String created_at, String created_by){
        return new RoomDto(id,name,url,password,limit,created_at,created_by);
    }

    public RoomDto of (Long id, String name, String url, String password, Integer limit){
        return new RoomDto(Long id, String name, String url, String password, Integer limit,null,null);
    }

    public static RoomDto from(Room entity){
        return new RoomDto(
                entity.getId(),
                entity.getName(),
                entity.getUrl(),
                entity.getPassword(),
                entity.getLimit(),
                entity.getCreatedAt(),
                entity.getCretedBy()
        );
    }

    public Room toEntity(){
        return Room.of(
                name,
                url,
                password,
                limit
        );
    }
}

package com.gdsc.coby.dto.request;

import com.gdsc.coby.domain.Room;

import java.util.List;

public record RoomRequestDto(
        String name,
        String url,
        List<String> tags,
        String password,
        Integer personnel
) {
    public static RoomRequestDto of(String name, String url, List<String> tags, String password, Integer personnel) {
        return new RoomRequestDto(name, url, tags, password, personnel);
    }

    public Room toEntity() {
        return Room.of(
                name,
                url,
                password,
                personnel
        );
    }
}

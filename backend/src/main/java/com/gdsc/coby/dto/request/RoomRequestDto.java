package com.gdsc.coby.dto.request;

import com.gdsc.coby.domain.Room;
import com.gdsc.coby.dto.RoomDto;

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

    public RoomDto toDto() {
        return RoomDto.of(
                name,
                url,
                password,
                personnel,
                tags
        );
    }
}

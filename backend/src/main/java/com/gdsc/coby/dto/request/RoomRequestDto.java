package com.gdsc.coby.dto.request;

import com.gdsc.coby.dto.RoomDto;

public record RoomRequestDto(
        String title,
        String url,
        String language,
        String tool,
        String password
) {
    public static RoomRequestDto of(String title, String url, String language, String tool, String password) {
        return new RoomRequestDto(title, url, language, tool, password);
    }

    public RoomDto toDto() {
        return RoomDto.of(
                title,
                url,
                password,
                language,
                tool
        );
    }
}

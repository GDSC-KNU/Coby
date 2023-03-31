package com.gdsc.coby.dto.request;

import com.gdsc.coby.dto.RoomDto;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public record RoomRequestDto(
        String name,
        String url,
        List<String> language,
        List<String> tool,
        String password,
        Integer personnel
) {
    public static RoomRequestDto of(String name, String url, List<String> language, List<String> tool, String password, Integer personnel) {
        return new RoomRequestDto(name, url, language, tool, password, personnel);
    }

    public RoomDto toDto() {
        return RoomDto.of(
                name,
                url,
                password,
                personnel,
                Stream.of(language, tool)
                        .flatMap(Collection::stream)
                        .collect(Collectors.toList())
        );
    }
}

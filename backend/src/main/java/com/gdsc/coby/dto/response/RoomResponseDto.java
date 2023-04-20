package com.gdsc.coby.dto.response;

import com.gdsc.coby.domain.constant.TagType;
import com.gdsc.coby.dto.RoomDto;
import com.gdsc.coby.dto.TagDto;

import java.util.stream.Collectors;

public record RoomResponseDto(
        Long id,
        String name,
        String language,
        String tool,
        String password,
        String createdBy
) {

    public static RoomResponseDto of(Long id, String name, String language, String tool, String password, String createdBy) {
        return new RoomResponseDto(id, name, language, tool, password, createdBy);
    }

    public static RoomResponseDto from(RoomDto dto) {
        return new RoomResponseDto(
                dto.id(),
                dto.name(),
                dto.tags().stream().filter(tag -> tag.tagType().equals(TagType.LANGUAGE))
                        .map(TagDto::name).collect(Collectors.joining(",")),
                dto.tags().stream().filter(tag -> tag.tagType().equals(TagType.TOOL))
                        .map(TagDto::name).collect(Collectors.joining(",")),
                dto.password(),
                dto.createdBy()
        );
    }
}

package com.gdsc.coby.dto.response;

import com.gdsc.coby.dto.RoomDto;

public record RoomResponseDto(
        Long id,
        String name,
        Boolean password,
        Integer limit,
        String createdBy
) {

    public static RoomResponseDto of(Long id, String name, Boolean password, Integer limit, String createdBy) {
        return new RoomResponseDto(id, name, password, limit, createdBy);
    }

    public static RoomResponseDto from(RoomDto dto) {
        return new RoomResponseDto(
                dto.id(),
                dto.name(),
                !dto.password().isEmpty(),
                dto.limit(),
                dto.createdBy()
        );
    }
}

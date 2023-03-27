package com.gdsc.coby.dto.response;

import com.gdsc.coby.dto.RoomDto;

public record RoomResponseDto(
        Long id,
        String name,
        Boolean password,
        Integer personnel,
        String createdBy
) {

    public static RoomResponseDto of(Long id, String name, Boolean password, Integer personnel, String createdBy) {
        return new RoomResponseDto(id, name, password, personnel, createdBy);
    }

    public static RoomResponseDto from(RoomDto dto) {
        return new RoomResponseDto(
                dto.id(),
                dto.name(),
                !dto.password().isEmpty(),
                dto.personnel(),
                dto.createdBy()
        );
    }
}

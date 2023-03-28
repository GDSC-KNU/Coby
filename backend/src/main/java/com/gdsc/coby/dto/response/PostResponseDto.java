package com.gdsc.coby.dto.response;

import com.gdsc.coby.dto.PostDto;

import java.time.LocalDateTime;

public record PostResponseDto(
        Long id,
        String title,
        String content,
        LocalDateTime createdAt,
        String createdBy
) {

    public static PostResponseDto of(Long id, String title, String content, LocalDateTime createdAt, String createdBy) {
        return new PostResponseDto(id, title, content, createdAt, createdBy);
    }

    public static PostResponseDto from(PostDto dto) {
        return new PostResponseDto(
                dto.id(),
                dto.title(),
                dto.content(),
                dto.createdAt(),
                dto.createdBy()
        );
    }
}

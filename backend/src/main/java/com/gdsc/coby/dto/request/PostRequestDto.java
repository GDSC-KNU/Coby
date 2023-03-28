package com.gdsc.coby.dto.request;

import com.gdsc.coby.dto.PostDto;

public record PostRequestDto(
        String title,
        String content
) {

    public PostDto toDto() {
        return PostDto.of(
                null,
                title,
                content
        );
    }

}

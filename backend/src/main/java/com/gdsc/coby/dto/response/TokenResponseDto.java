package com.gdsc.coby.dto.response;

import com.gdsc.coby.dto.TokenDto;

public record TokenResponseDto(
        String accessToken
) {
    public static TokenResponseDto from(TokenDto dto) {
        return new TokenResponseDto(dto.getAccessToken());
    }
}

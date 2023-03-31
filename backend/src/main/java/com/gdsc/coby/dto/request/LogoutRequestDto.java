package com.gdsc.coby.dto.request;

import com.gdsc.coby.dto.TokenDto;

public record LogoutRequestDto(
        String accessToken,
        String refreshToken
) {

    public TokenDto toDto() {
        return TokenDto.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .build();
    }
}

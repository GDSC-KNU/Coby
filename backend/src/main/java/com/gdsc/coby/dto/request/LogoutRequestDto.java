package com.gdsc.coby.dto.request;

public record LogoutRequestDto(
        String accessToken,
        String refreshToken
) { }

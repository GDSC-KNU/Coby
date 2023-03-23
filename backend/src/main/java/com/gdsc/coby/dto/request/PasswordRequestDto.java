package com.gdsc.coby.dto.request;

public record PasswordRequestDto(
        String exPassword,
        String newPassword
) { }

package com.gdsc.coby.dto.request;

import java.util.List;

public record UserListRequestDto(
        List<String> users
) {
}

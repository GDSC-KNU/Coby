package com.gdsc.coby.domain.constant;

import lombok.Getter;

public enum TagType {
    PURPOSE("목적"),
    LANGUAGE("언어"),
    TOOL("도구"),
    DETAIL("상세");

    @Getter
    private final String description;

    TagType(String description) {
        this.description = description;
    }
}

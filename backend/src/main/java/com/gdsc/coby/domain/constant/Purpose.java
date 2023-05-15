package com.gdsc.coby.domain.constant;

import lombok.Getter;

public enum Purpose {
    PAIR("페어프로그래밍/몹프로그래밍"),
    REVIEW("코드리뷰");

    @Getter
    private final String info;

    Purpose(String info) {
        this.info = info;
    }
}

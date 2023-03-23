package com.gdsc.coby.security;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class SecurityUtil {

    private SecurityUtil() { }

    public static String getCurrentUserId() {
        final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if(authentication == null || authentication.getName() == null) {
            throw new UsernameNotFoundException("Security Context에 인증 정보가 없습니다.");
        }

        return authentication.getName();
    }

}

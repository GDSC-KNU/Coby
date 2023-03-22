package com.gdsc.coby.controller;

import com.gdsc.coby.dto.TokenDto;
import com.gdsc.coby.dto.request.UserRequestDto;
import com.gdsc.coby.dto.response.UserResponseDto;
import com.gdsc.coby.service.AuthService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.persistence.EntityExistsException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "인증 컨트롤러", description = "인증 관련 기능 제공")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class AuthController {
    private final AuthService authService;

    @ExceptionHandler(value = EntityExistsException.class)
    public ResponseEntity<String> exceptionHandler(Exception e) {
        return ResponseEntity.ok(e.getMessage());
    }

    @PostMapping("/signup")
    @Operation(description = "유저 정보를 DB에 저장합니다. (회원가입)")
    public ResponseEntity<UserResponseDto> signup(UserRequestDto requestDto) {
        return ResponseEntity.ok(authService.signup(requestDto));
    }

    @PostMapping("/login")
    @Operation(description = "로그인 기능입니다.")
    public ResponseEntity<TokenDto> login(UserRequestDto requestDto) {
        return ResponseEntity.ok(authService.login(requestDto));
    }
}

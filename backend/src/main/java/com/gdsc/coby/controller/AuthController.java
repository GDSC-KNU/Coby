package com.gdsc.coby.controller;

import com.gdsc.coby.dto.request.UserRequestDto;
import com.gdsc.coby.dto.response.TokenResponseDto;
import com.gdsc.coby.dto.response.UserResponseDto;
import com.gdsc.coby.service.AuthService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.persistence.EntityExistsException;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

@Tag(name = "인증 컨트롤러", description = "인증 관련 기능 제공")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class AuthController {
    private final AuthService authService;

    @ExceptionHandler(value = {
            EntityExistsException.class,
            UsernameNotFoundException.class,
            RuntimeException.class,
            BadCredentialsException.class
    })
    public ResponseEntity<?> exceptionHandler(Exception e) {
        if(e instanceof BadCredentialsException)
            return new ResponseEntity<>("비밀번호를 확인해주세요.", HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/signup")
    @Operation(description = "유저 정보를 DB에 저장합니다. (회원가입)")
    public ResponseEntity<UserResponseDto> signup(@RequestBody UserRequestDto requestDto) {
        return ResponseEntity.ok(UserResponseDto.from(authService.signup(requestDto.toDto())));
    }

    @PostMapping("/login")
    @Operation(description = "로그인 기능입니다.")
    public ResponseEntity<?> login(@RequestBody UserRequestDto requestDto) {
        return ResponseEntity.ok(TokenResponseDto.from(authService.login(requestDto.toDto())));
    }

    @PostMapping("/logout")
    @Operation(description = "로그아웃 기능입니다.")
    public ResponseEntity<?> logout(HttpServletRequest request) {
        authService.logout(request);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }
}

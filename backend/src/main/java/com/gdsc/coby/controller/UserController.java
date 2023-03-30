package com.gdsc.coby.controller;

import com.gdsc.coby.dto.request.PasswordRequestDto;
import com.gdsc.coby.dto.request.UserRequestDto;
import com.gdsc.coby.dto.response.UserResponseDto;
import com.gdsc.coby.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "유저 컨트롤러", description = "유저 관련 기능 제공")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    @ExceptionHandler(value = {UsernameNotFoundException.class, IllegalArgumentException.class})
    public ResponseEntity<String> exceptionHandler(Exception e) {
        return ResponseEntity.ok(e.getMessage());
    }

    @GetMapping
    @Operation(description = "유저 목록을 조회합니다.")
    public ResponseEntity<List<UserResponseDto>> users() {
        return ResponseEntity.ok(userService.getUsers().stream()
                .map(UserResponseDto::from)
                .toList());
    }

    @GetMapping("/{userId}")
    @Operation(description = "유저 정보를 조회합니다.")
    public ResponseEntity<UserResponseDto> user(@PathVariable String userId) {
        return ResponseEntity.ok(UserResponseDto.from(userService.getUser(userId)));
    }

    @GetMapping("/myinfo")
    @Operation(description = "로그인된 유저의 정보를 조회합니다.")
    public ResponseEntity<UserResponseDto> myInfo() {
        return ResponseEntity.ok(UserResponseDto.from(userService.getUserBySecurity()));
    }

    @PostMapping("/myinfo")
    @Operation(description = "로그인된 유저의 정보를 수정합니다.")
    public ResponseEntity<UserResponseDto> updateMyInfo(@RequestBody UserRequestDto requestDto) {
        return ResponseEntity.ok(UserResponseDto.from(userService.updateUserInfo(requestDto.name())));
    }

    @PostMapping("/password")
    @Operation(description = "로그인된 유저의 비밀번호를 변경합니다.")
    public ResponseEntity<UserResponseDto> updatePassword(@RequestBody PasswordRequestDto requestDto) {
        return ResponseEntity.ok(UserResponseDto.from(userService.updateUserPassword(
                requestDto.exPassword(), requestDto.newPassword()
        )));
    }

    @DeleteMapping("/myinfo")
    @Operation(description = "로그인된 유저의 정보를 삭제합니다. (회원 탈퇴)")
    public ResponseEntity<Boolean> withdrawal() {
        return ResponseEntity.ok(userService.deleteUser());
    }

}

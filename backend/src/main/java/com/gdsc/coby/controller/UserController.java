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

@Tag(name = "유저 컨트롤러", description = "asd")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    @GetMapping
    @Operation(summary = "유저 목록", description = "유저 목록을 가져옵니다.")
    public ResponseEntity<List<UserResponseDto>> users() {
        return ResponseEntity.ok(userService.getUsers().stream()
                .map(UserResponseDto::from)
                .toList());
    }

    @GetMapping("/{userId}")
    public ResponseEntity<UserResponseDto> user(@PathVariable String userId) {
        return ResponseEntity.ok(UserResponseDto.from(userService.getUser(userId)));
    }

    @GetMapping("/myinfo")
    public ResponseEntity<UserResponseDto> myInfo() {
        return ResponseEntity.ok(UserResponseDto.from(userService.getUserBySecurity()));
    }

    @PostMapping("/myinfo")
    public ResponseEntity<UserResponseDto> updateMyInfo(UserRequestDto requestDto) {
        return ResponseEntity.ok(UserResponseDto.from(userService.updateUserInfo(requestDto.name(), requestDto.email())));
    }

    @PostMapping("/password")
    public ResponseEntity<UserResponseDto> updatePassword(PasswordRequestDto requestDto) {
        return ResponseEntity.ok(UserResponseDto.from(userService.updateUserPassword(
                requestDto.exPassword(), requestDto.newPassword()
        )));
    }

    @DeleteMapping("/myinfo")
    public ResponseEntity<Boolean> withdrawal() {
        return ResponseEntity.ok(userService.deleteUser());
    }

}

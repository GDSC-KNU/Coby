package com.gdsc.coby.controller;

import com.gdsc.coby.dto.request.RoomRequestDto;
import com.gdsc.coby.dto.response.RoomResponseDto;
import com.gdsc.coby.service.RoomService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;
import org.webjars.NotFoundException;

import java.util.List;

@Tag(name = "룸 컨트롤러", description = "코드 룸 관련 기능 제공")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/coderooms")
public class RoomController {

    private final RoomService roomService;

    @ExceptionHandler(value = {UsernameNotFoundException.class, NotFoundException.class, RuntimeException.class})
    public ResponseEntity<String> exceptionHandler(Exception e) {
        return ResponseEntity.ok(e.getMessage());
    }

    @GetMapping("/review")
    @Operation(description = "코드 리뷰 룸 목록을 조회합니다.")
    public ResponseEntity<List<RoomResponseDto>> reviewRooms(){
        return ResponseEntity.ok(roomService.getReviewRooms().stream()
                .map(RoomResponseDto::from)
                .toList());
    }

    @GetMapping("/pair")
    @Operation(description = "페어 프로그래밍 룸 목록을 조회합니다.")
    public ResponseEntity<List<RoomResponseDto>> pairRooms(){
        return ResponseEntity.ok(roomService.getPairRooms().stream()
                .map(RoomResponseDto::from)
                .toList());
    }

    @GetMapping("/{roomId}")
    @Operation(description = "코드 룸 정보를 조회합니다.")
    public ResponseEntity<RoomResponseDto> room(@PathVariable Long roomId){
        return ResponseEntity.ok(RoomResponseDto.from(roomService.getRoom(roomId)));
    }

    @PostMapping("/review")
    @Operation(description = "코드 리뷰 룸을 생성합니다.")
    public ResponseEntity<RoomResponseDto> createReviewRoom(@RequestBody RoomRequestDto requestDto){
        return ResponseEntity.ok(RoomResponseDto.from(roomService.createReviewRoom(requestDto.toDto())));
    }

    @PostMapping("/pair")
    @Operation(description = "페어 프로그래밍 룸을 생성합니다.")
    public ResponseEntity<RoomResponseDto> createPairRoom(@RequestBody RoomRequestDto requestDto){
        return ResponseEntity.ok(RoomResponseDto.from(roomService.createPairRoom(requestDto.toDto())));
    }

    @PostMapping("/{roomId}")
    @Operation(description = "코드 룸의 상세정보를 수정합니다.")
    public ResponseEntity<RoomResponseDto> updateRoom(@PathVariable Long roomId, RoomRequestDto requestDto){
        return ResponseEntity.ok(RoomResponseDto.from(roomService.updateRoomInfo(roomId, requestDto)));

    }

    @DeleteMapping("/{roomId}")
    @Operation(description = "코드룸을 나갑니다. (방 삭제)")
    public ResponseEntity<Boolean> exitRoom(@PathVariable Long roomId){
        return ResponseEntity.ok(roomService.deleteRoom(roomId));
    }
}

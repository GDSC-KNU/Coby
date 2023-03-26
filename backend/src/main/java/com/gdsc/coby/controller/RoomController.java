package com.gdsc.coby.controller;

import com.gdsc.coby.dto.RoomDto;
import com.gdsc.coby.repository.RoomRepository;
import com.gdsc.coby.service.RoomService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "룸 컨트롤러", description = "코드 룸 관련 기능 제공")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/coderooms")
public class RoomController {
    private final RoomService roomService;

    @GetMapping
    @Operation(description = "코드 룸 목록을 조회합니다.")
    public ResponseEntity<List<RoomDto>> rooms(){
        return ResponseEntity.ok(roomService.getRooms());
    }

    @GetMapping("/{roomId}")
    @Operation(description = "코드 룸 정보를 조회합니다.")
    public ResponseEntity<RoomDto> room(@PathVariable Long roomId){
        return ResponseEntity.ok(roomService.getRoom(roomId));
    }

    @PostMapping()
    @Operation(description = "코드 룸을 생성합니다.")
    public ResponseEntity<Long> createRoom(RoomDto room){
        return ResponseEntity.ok(roomService.createRoom(room));
    }

    @PostMapping()
    @Operation(description = "코드 룸의 상세정보를 수정합니다.")
    public ResponseEntity<RoomDto> updateRoom(RoomDto room){
        return ResponseEntity.ok(roomService.updateRoomInfo(room));

    }

    @DeleteMapping()
    @Operation(description = "코드룸을 나갑니다. (방 삭제)")
    public ResponseEntity<Boolean> exitRoom(Long roomId){
        return ResponseEntity.ok(roomService.deleteRoom(roomId));
    }
}

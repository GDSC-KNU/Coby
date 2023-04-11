package com.gdsc.coby.controller;

import com.gdsc.coby.dto.request.GroupRequestDto;
import com.gdsc.coby.dto.response.GroupResponseDto;
import com.gdsc.coby.service.GroupService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;
import org.webjars.NotFoundException;

import java.util.List;

@Tag(name="그룹 컨트롤러" , description = "그룹 관련 기능 제공")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/groups")
public class GroupController {
    private final GroupService groupService;

    @ExceptionHandler(value = {UsernameNotFoundException.class, NotFoundException.class, RuntimeException.class})
    public ResponseEntity<String> exceptionHandler(Exception e) { return ResponseEntity.ok(e.getMessage());}

    @GetMapping
    @Operation(description = "그룹 목록 조회합니다.")
    public ResponseEntity<List<GroupResponseDto>> groups(){
        return ResponseEntity.ok(groupService.getGroups().stream()
                .map(GroupResponseDto::from)
                .toList());
    }

    @GetMapping("/{groupId}")
    @Operation(description = "그룹 정보를 조회합니다.")
    public ResponseEntity<GroupResponseDto> group(@PathVariable Long groupId){
        return ResponseEntity.ok(GroupResponseDto.from(groupService.getGroupInfo(groupId)));
    }

    @PostMapping
    @Operation(description = "그룹을 생성합니다.")
    public ResponseEntity<GroupResponseDto> createGroup(GroupRequestDto requestDto){
        return ResponseEntity.ok(GroupResponseDto.from(groupService.creatGroup(requestDto)));
    }
    @PostMapping("/{groupId}")
    @Operation(description = "그룹 상세정보를 수정합니다.")
    public ResponseEntity<GroupResponseDto> updateGroup(@PathVariable Long groupId, GroupRequestDto requestDto){
        return ResponseEntity.ok(GroupResponseDto.from(groupService.updateGroupInfo(groupId,requestDto)));
    }

    @DeleteMapping("/{groupId}")
    @Operation(description = "그룹을 삭제합니다.")
    public ResponseEntity<Boolean> deleteGroup(@PathVariable Long groupId){
        return ResponseEntity.ok(groupService.deleteGroup(groupId));
    }
}

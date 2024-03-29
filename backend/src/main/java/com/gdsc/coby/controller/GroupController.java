package com.gdsc.coby.controller;

import com.gdsc.coby.dto.response.GroupResponseDto;
import com.gdsc.coby.service.GroupService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.webjars.NotFoundException;

import java.util.List;

@Tag(name="그룹 컨트롤러" , description = "그룹 관련 기능 제공")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/groups")
public class GroupController {
    private final GroupService groupService;

    @ExceptionHandler(value = {
            UsernameNotFoundException.class,
            NotFoundException.class,
            RuntimeException.class
    })
    public ResponseEntity<?> exceptionHandler(Exception e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
    }

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

    @GetMapping("/my")
    @Operation(description = "마이 그룹 정보를 조회합니다.")
    public ResponseEntity<GroupResponseDto> myGroup(){
        return ResponseEntity.ok(GroupResponseDto.from(groupService.getMyGroupInfo()));
    }

    @PostMapping
    @Operation(description = "그룹을 생성합니다.")
    public ResponseEntity<GroupResponseDto> createGroup(@RequestParam(required = false,value = "profileImage") MultipartFile profileImage,@RequestParam(required = false,value = "name") String name, @RequestParam(required = false,value = "description") String description){
        return ResponseEntity.ok(GroupResponseDto.from(groupService.creatGroup(profileImage,name,description)));
    }

    @PostMapping("/join/{groupId}")
    @Operation(description = "로그인한 사용자가 그룹에 가입합니다.")
    public ResponseEntity<?> joinGroup(@PathVariable Long groupId) {
        return ResponseEntity.ok(groupService.join(groupId));
    }


    @PostMapping("/{groupId}")
    @Operation(description = "그룹 상세정보를 수정합니다.")
    public ResponseEntity<GroupResponseDto> updateGroup(@PathVariable Long groupId, @RequestParam(required = false,value = "profileImage") MultipartFile profileImage,@RequestParam(required = false,value = "name") String name, @RequestParam(required = false,value = "description") String description){
        return ResponseEntity.ok(GroupResponseDto.from(groupService.updateGroupInfo(groupId,profileImage,name,description)));
    }

    @PostMapping("/leave/{groupId}")
    @Operation(description = "로그인한 사용자가 그룹을 탈퇴합니다.")
    public ResponseEntity<?> leaveGroup(@PathVariable Long groupId) {
        System.out.println(groupId);
        return ResponseEntity.ok(groupService.leave(groupId));
    }


    @DeleteMapping("/{groupId}")
    @Operation(description = "그룹을 삭제합니다.")
    public ResponseEntity<Boolean> deleteGroup(@PathVariable Long groupId){
        return ResponseEntity.ok(groupService.deleteGroup(groupId));
    }
}
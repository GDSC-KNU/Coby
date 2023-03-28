package com.gdsc.coby.controller;

import com.gdsc.coby.dto.request.PostRequestDto;
import com.gdsc.coby.dto.response.PostResponseDto;
import com.gdsc.coby.service.PostService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "게시글 컨트롤러", description = "게시글 관련 기능 제공")
@RequiredArgsConstructor
@RequestMapping("/api/groups")
@RestController
public class PostController {

    private final PostService postService;

    @ExceptionHandler(value = {EntityNotFoundException.class, IllegalArgumentException.class})
    public ResponseEntity<String> exceptionHandler(Exception e) {
        return ResponseEntity.ok(e.getMessage());
    }

    @GetMapping("/{groupId}/posts")
    @Operation(description = "게시글 목록을 조회합니다.")
    public ResponseEntity<List<PostResponseDto>> getPosts(@PathVariable Long groupId) {
        return ResponseEntity.ok(postService.getPosts(groupId).stream()
                .map(PostResponseDto::from)
                .toList());
    }

    @GetMapping("/{groupId}/posts/{postId}")
    @Operation(description = "게시글 정보를 조회합니다.")
    public ResponseEntity<PostResponseDto> getPost(@PathVariable Long postId) {
        return ResponseEntity.ok(PostResponseDto.from(postService.getPost(postId)));
    }

    @PostMapping("/{groupId}/posts")
    @Operation(description = "게시글을 생성합니다.")
    public ResponseEntity<PostResponseDto> createPost(@PathVariable Long groupId, PostRequestDto requestDto) {
        return ResponseEntity.ok(PostResponseDto.from(postService.createPost(groupId, requestDto.toDto())));
    }

    @PutMapping("/{groupId}/posts/{postId}")
    @Operation(description = "게시글을 수정합니다.")
    public ResponseEntity<PostResponseDto> updatePost(@PathVariable Long postId, PostRequestDto requestDto) {
        return ResponseEntity.ok(PostResponseDto.from(postService.updatePost(postId, requestDto.toDto())));
    }

    @DeleteMapping("/{groupId}/posts/{postId}")
    @Operation(description = "게시글을 삭제합니다.")
    public ResponseEntity<Boolean> deletePost(@PathVariable Long postId) {
        return ResponseEntity.ok(postService.deletePost(postId));
    }
}

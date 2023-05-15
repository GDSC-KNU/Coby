package com.gdsc.coby.controller;

import com.gdsc.coby.dto.request.PostRequestDto;
import com.gdsc.coby.dto.response.PostResponseDto;
import com.gdsc.coby.service.PostService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AuthorizationServiceException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Tag(name = "게시글 컨트롤러", description = "게시글 관련 기능 제공")
@RequiredArgsConstructor
@RequestMapping("/api/groups/{groupId}/posts")
@RestController
public class PostController {

    private final PostService postService;

    @ExceptionHandler(value = {
            EntityNotFoundException.class,
            IllegalArgumentException.class,
            AuthorizationServiceException.class,
            UsernameNotFoundException.class
    })
    public ResponseEntity<?> exceptionHandler(Exception e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
    }

    @GetMapping
    @Operation(description = "게시글 목록을 조회합니다.")
    public ResponseEntity<List<PostResponseDto>> getPosts(@PathVariable Long groupId) {
        return ResponseEntity.ok(postService.getPosts(groupId).stream()
                .map(PostResponseDto::from)
                .toList());
    }

    @GetMapping("/{postId}")
    @Operation(description = "게시글 정보를 조회합니다.")
    public ResponseEntity<PostResponseDto> getPost(@PathVariable Long postId) {
        return ResponseEntity.ok(PostResponseDto.from(postService.getPost(postId)));
    }

    @PostMapping
    @Operation(description = "게시글을 생성합니다.")
    public ResponseEntity<PostResponseDto> createPost(@PathVariable Long groupId, @RequestBody PostRequestDto requestDto) {
        return ResponseEntity.ok(PostResponseDto.from(postService.createPost(groupId, requestDto.toDto())));
    }

    @PutMapping("/{postId}")
    @Operation(description = "게시글을 수정합니다.")
    public ResponseEntity<PostResponseDto> updatePost(@PathVariable Long postId, @RequestBody PostRequestDto requestDto) {
        return ResponseEntity.ok(PostResponseDto.from(postService.updatePost(postId, requestDto.toDto())));
    }

    @DeleteMapping("/{postId}")
    @Operation(description = "게시글을 삭제합니다.")
    public ResponseEntity<Boolean> deletePost(@PathVariable Long postId) {
        return ResponseEntity.ok(postService.deletePost(postId));
    }
}

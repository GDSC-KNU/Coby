package com.gdsc.coby.controller;

import com.gdsc.coby.dto.request.PostRequestDto;
import com.gdsc.coby.dto.response.PostResponseDto;
import com.gdsc.coby.service.PostService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RequestMapping("/api/groups")
@Controller
public class PostController {

    private final PostService postService;

    @ExceptionHandler(value = {EntityNotFoundException.class, IllegalArgumentException.class})
    public ResponseEntity<String> exceptionHandler(Exception e) {
        return ResponseEntity.ok(e.getMessage());
    }

    @GetMapping("/{groupId}/posts")
    public ResponseEntity<List<PostResponseDto>> getPosts(@PathVariable Long groupId) {
        return ResponseEntity.ok(postService.getPosts(groupId).stream()
                .map(PostResponseDto::from)
                .toList());
    }

    @GetMapping("/{groupId}/posts/{postId}")
    public ResponseEntity<PostResponseDto> getPost(@PathVariable Long postId) {
        return ResponseEntity.ok(PostResponseDto.from(postService.getPost(postId)));
    }

    @PostMapping("/{groupId}/posts")
    public ResponseEntity<PostResponseDto> createPost(@PathVariable Long groupId, PostRequestDto requestDto) {
        return ResponseEntity.ok(PostResponseDto.from(postService.createPost(groupId, requestDto.toDto())));
    }

    @PutMapping("/{groupId}/posts/{postId}")
    public ResponseEntity<PostResponseDto> updatePost(@PathVariable Long postId, PostRequestDto requestDto) {
        return ResponseEntity.ok(PostResponseDto.from(postService.updatePost(postId, requestDto.toDto())));
    }

    @DeleteMapping("/{groupId}/posts/{postId}")
    public ResponseEntity<Boolean> deletePost(@PathVariable Long postId) {
        return ResponseEntity.ok(postService.deletePost(postId));
    }
}

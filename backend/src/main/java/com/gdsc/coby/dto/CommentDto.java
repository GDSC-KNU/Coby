package com.gdsc.coby.dto;

import com.gdsc.coby.domain.Comment;
import com.gdsc.coby.domain.Post;

import java.time.LocalDateTime;

public record CommentDto(
        Long id,
        PostDto post,
        String content,
        LocalDateTime createdAt,
        String createdBy
) {

    public CommentDto of(Long id, PostDto post, String content, LocalDateTime createdAt, String createdBy){
        return new CommentDto(id ,post, content, createdAt, createdBy);
    }

    public static CommentDto from(Comment entity){
        return new CommentDto(
                entity.getId(),
                PostDto.from(entity.getPost()),
                entity.getContent(),
                entity.getCreatedAt(),
                entity.getCreatedBy()
        );
    }

    public Comment toEntity(Post post){
        return Comment.of(
                post,
                content
        );
    }
}

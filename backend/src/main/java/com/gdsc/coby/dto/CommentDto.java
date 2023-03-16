package com.gdsc.coby.dto;

import com.gdsc.coby.domain.Comment;
import com.gdsc.coby.domain.Post;

import java.time.LocalDateTime;

public record CommentDto(
        Long id,
        PostDto post,
        String content,
        LocalDateTime create_at,
        String create_by
) {

    public CommentDto of(Long id, PostDto post,String content,LocalDateTime create_at,String create_by){
        return new CommentDto(id,post,content,create_at,create_by);
    }

    public static CommentDto from(Comment entity){
        return new CommentDto(
                entity.getId(),
                PostDto.from(entity.getPost()),
                entity.getCreatedAt(),
                entity.getCretedBy()
        );
    }

    public Comment toEntity(Post post){
        return Comment.of(
                post,
                content
        );
    }
}

package com.gdsc.coby.dto;

import com.gdsc.coby.domain.Group;
import com.gdsc.coby.domain.Post;

import java.time.LocalDateTime;

public record PostDto(
        Long id,
        String title,
        String content,
        LocalDateTime createdAt,
        String createdBy
) {

    public static PostDto of(Long id, String title, String content, LocalDateTime createdAt,String createdBy){
        return new PostDto(id, title, content, createdAt, createdBy);
    }

    public static PostDto of(String title, String content){
        return new PostDto(null, title, content, null, null);
    }

    public static PostDto from(Post entity) {
        return new PostDto(
                entity.getId(),
                entity.getTitle(),
                entity.getContent(),
                entity.getCreatedAt(),
                entity.getCreatedBy()
        );
    }

    public Post toEntity(Group group) {
        return Post.of(
                group,
                title,
                content
        );
    }
}

package com.gdsc.coby.dto;

import com.gdsc.coby.domain.Group;
import com.gdsc.coby.domain.Post;

import java.time.LocalDateTime;

public record PostDto(
        Long id,
        GroupDto group,
        String title,
        String content,
        LocalDateTime createdAt,
        String createdBy
) {
    public PostDto of(Long id, GroupDto group, String title, String content, LocalDateTime createdAt,String createdBy){
        return new PostDto(id, group, title, content, createdAt, createdBy);
    }

    public static PostDto from(Post entity) {
        return new PostDto(
                entity.getId(),
                GroupDto.from(entity.getGroup()),
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

package com.gdsc.coby.dto;

import com.gdsc.coby.domain.Group;
import com.gdsc.coby.domain.Post;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
public record PostDto(
        Long id,
        GroupDto group,
        String title,
        String content,
        LocalDateTime created_at,
        String created_by
) {
    public PostDto of(Long id,GroupDto group,String title,String content,LocalDateTime created_at,String created_by){
        return new PostDto(id,group,title,content,created_at,created_by);
    }

    public static PostDto from(Post entity) {
        return new PostDto(
                entity.getId(),
                GroupDto.from(entity.getGroup()),
                entity.getTitle(),
                entity.getContent(),
                entity.getCreatedAt(),
                entity.getCretedBy()
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

package com.gdsc.coby.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Objects;

@Entity
@Getter
@Setter
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="id")
    private Post post;

    @Column(nullable = false)
    private String content;

    protected Comment() {}

    private Comment(Post post, String content) {
        this.post = post;
        this.content = content;
    }

    public static Comment of(Post post, String content) {
        return new Comment(post, content);
    }
}

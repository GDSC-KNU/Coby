package com.gdsc.coby.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.*;

@Entity
@Getter
@Setter
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    private Group group;

    @Column(nullable = false)
    private String title;
    @Column(nullable = false, length = 10000)
    private String content;

    @ToString.Exclude
    //@OrderBy("createdAt DESC")
    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private final Set<Comment> postComments = new LinkedHashSet<>();

    protected Post() {}

    private Post(Group group, String title, String content) {
        this.group = group;
        this.title = title;
        this.content = content;
    }

    public static Post of(Group group, String title, String content) {
        return new Post(group, title, content);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Post that)) return false;
        return id != null && id.equals(that.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}

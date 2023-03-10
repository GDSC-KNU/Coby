package com.gdsc.coby.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="id")
    private Group group_id;

    @Column(nullable = false)
    private String title;
    @Column(nullable = false)
    private String content;

    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    private List<Comment> commentList = new ArrayList<>();


}

package com.gdsc.coby.domain;

import com.gdsc.coby.domain.constant.TagType;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Objects;

@Entity
@Getter
@Setter
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Enumerated(EnumType.STRING)
    private TagType tagType;

    protected Tag() {}

    private Tag(String name, TagType tagType) {
        this.name = name;
        this.tagType = tagType;
    }

    public static Tag of(String name, TagType tagType) {
        return new Tag(name, tagType);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Tag that)) return false;
        return id != null && id.equals(that.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}

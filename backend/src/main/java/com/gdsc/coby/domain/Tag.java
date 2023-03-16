package com.gdsc.coby.domain;

import com.gdsc.coby.domain.constant.TagType;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Objects;

@Entity
@Getter
@Setter
public class Tag extends AuditingFields{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;
    private String color;

    @Enumerated(EnumType.STRING)
    private TagType tagType;

    protected Tag() {}

    private Tag(String name, String color, TagType tagType) {
        this.name = name;
        this.color = color;
        this.tagType = tagType;
    }

    public static Tag of(String name, String color, TagType tagType) {
        return new Tag(name, color, tagType);
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

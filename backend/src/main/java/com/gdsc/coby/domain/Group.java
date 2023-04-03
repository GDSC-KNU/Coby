package com.gdsc.coby.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.Fetch;

import java.util.*;

@Entity
@Getter
@Setter
@Table(name = "group_list")
public class Group extends AuditingFields{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private String description;

    @ToString.Exclude
    @OrderBy("exp_point ASC")
    @OneToMany(mappedBy = "group")
    private Set<User> members = new LinkedHashSet<>();

    @OrderBy("createdAt DESC")
    @OneToMany(mappedBy = "group", fetch = FetchType.LAZY)
    private List<Post> posts = new LinkedList<>();

    protected Group() {}

    private Group(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public static Group of(String name, String description) {
        return new Group(name, description);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Group that)) return false;
        return id != null && id.equals(that.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}

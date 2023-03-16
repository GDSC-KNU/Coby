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

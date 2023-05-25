package com.gdsc.coby.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.OnDelete;

import java.util.*;

@Entity
@Getter
@Table(name = "group_list")
public class Group extends AuditingFields{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter
    private Long id;

    @Column(nullable = false)
    @Setter
    private String name;

    @Setter
    private String description;

    @Setter
    @Column
    private String profileUrl;

    @ToString.Exclude
    @OrderBy("exp_point ASC")
    @OneToMany(mappedBy = "group")
    private Set<User> members = new LinkedHashSet<>();

    @Setter
    @OrderBy("createdAt DESC")
    @OneToMany(mappedBy = "group", fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private List<Post> posts = new LinkedList<>();

    protected Group() {}

    private Group(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public void setMembers(User user) {
        members.add(user);
    }

    public void updateMembers(User user){
        members.remove(user);
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
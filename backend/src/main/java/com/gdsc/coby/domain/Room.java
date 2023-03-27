package com.gdsc.coby.domain;

import jakarta.persistence.*;

import lombok.Getter;
import lombok.Setter;

import java.util.Objects;

@Getter
@Setter
@Table(indexes = {
        @Index(columnList = "name"),
        @Index(columnList = "createdAt")
})
@Entity
public class Room extends AuditingFields{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private String url;

    private String password;
    private Integer personnel;

    protected Room() {}

    private Room(String name, String url, String password, Integer personnel) {
        this.name = name;
        this.url = url;
        this.password = password;
        this.personnel = personnel;
    }

    public static Room of(String name, String url, String password, Integer personnel) {
        return new Room(name, url, password, personnel);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Room that)) return false;
        return id != null && id.equals(that.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}

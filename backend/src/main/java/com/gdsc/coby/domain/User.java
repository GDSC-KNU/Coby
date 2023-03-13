package com.gdsc.coby.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Objects;

@Entity
@Getter
@Setter
@Table(name = "user_account")
public class User {
    @Id
    @Column(length = 50)
    private String email;

    @ManyToOne(fetch = FetchType.LAZY)
    private Group group;

    @Column(nullable = false)
    private String name;
    
    @Column(nullable = false)
    private String password;

    private Long exp_point;

    protected User() {}

    private User(String email, Group group, String name, String password, Long exp_point) {
        this.email = email;
        this.group = group;
        this.name = name;
        this.password = password;
        this.exp_point = exp_point;
    }

    public static User of(String email, Group group, String name, String password, Long exp_point) {
        return new User(email, group, name, password, exp_point);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof User that)) return false;
        return email != null && email.equals(that.getEmail());
    }

    @Override
    public int hashCode() {
        return Objects.hash(email);
    }
}

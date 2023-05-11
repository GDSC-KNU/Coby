package com.gdsc.coby.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Entity
@Getter
@Table(name = "user_account")
public class User implements UserDetails {
    @Id
    @Column(length = 50)
    private String userId;

    @Setter
    @ManyToOne(fetch = FetchType.LAZY)
    private Group group;

    @Setter
    @Column(nullable = false)
    private String name;

    @Setter
    @Column(nullable = false)
    private String password;

    @Column
    private String profileUrl;

    private Long exp_point;

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

    protected User() {}

    private User(String userId, Group group, String name, String password, String profileUrl, Long exp_point) {
        this.userId = userId;
        this.group = group;
        this.name = name;
        this.password = password;
        this.profileUrl = profileUrl;
        this.exp_point = exp_point;
    }

    public static User of(String userId, Group group, String name, String password, String profileUrl,Long exp_point) {
        return new User(userId, group, name, password, profileUrl, exp_point);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.roles.stream()
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return userId;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public void setExp_point(Long exp) {
        exp_point += exp;
    }
}

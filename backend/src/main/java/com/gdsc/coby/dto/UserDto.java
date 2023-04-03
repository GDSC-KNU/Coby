package com.gdsc.coby.dto;

import com.gdsc.coby.domain.Group;
import com.gdsc.coby.domain.User;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;

public record UserDto(
        String userId,
        GroupDto group,
        String name,
        String password,
        Long exp_point
) {
    public static UserDto of(String userId, GroupDto group, String name, String password, Long exp_point){
        return new UserDto(userId, group, name, password, exp_point);
    }

    public static UserDto from(User entity){
        Group group = entity.getGroup();

        return new UserDto(
                entity.getUserId(),
                group != null ? GroupDto.from(group) : null,
                entity.getName(),
                entity.getPassword(),
                entity.getExp_point()
        );
    }

    public User toEntity(Group group, PasswordEncoder passwordEncoder){
        return User.of(
                userId,
                group,
                name,
                passwordEncoder.encode(password),
                exp_point
        );
    }

    public User toEntity(PasswordEncoder passwordEncoder){
        return User.of(
                userId,
                null,
                name,
                passwordEncoder.encode(password),
                exp_point
        );
    }

    public UsernamePasswordAuthenticationToken toAuthentication() {
        return new UsernamePasswordAuthenticationToken(userId, password);
    }
}

package com.gdsc.coby.service;

import com.gdsc.coby.domain.User;
import com.gdsc.coby.dto.TokenDto;
import com.gdsc.coby.dto.UserDto;
import com.gdsc.coby.repository.UserRepository;
import com.gdsc.coby.security.JwtProvider;
import jakarta.persistence.EntityExistsException;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.concurrent.TimeUnit;

@Service
@RequiredArgsConstructor
@Transactional
public class AuthService {
    private final AuthenticationManagerBuilder managerBuilder;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtProvider jwtProvider;
    private final RedisTemplate<String, Object> redisTemplate;

    public UserDto signup(UserDto dto) {
        if(userRepository.existsByUserId(dto.userId())) {
            throw new EntityExistsException("이미 존재하는 아이디입니다.");
        }
        User user = dto.toEntity(passwordEncoder);
        user.getRoles().add("ROLE_USER");
        return UserDto.from(userRepository.save(user));
    }

    public TokenDto login(UserDto dto) {
        if(!userRepository.existsByUserId(dto.userId())) {
            throw new UsernameNotFoundException("존재하지 않는 아이디입니다.");
        }
        UsernamePasswordAuthenticationToken authenticationToken = dto.toAuthentication();

        Authentication authentication = managerBuilder.getObject().authenticate(authenticationToken);

        TokenDto tokenDto = jwtProvider.generateTokenDto(authentication);

        redisTemplate.opsForValue()
                .set("RT:" + authentication.getName(), tokenDto.getRefreshToken(), tokenDto.getRefreshTokenExpirationTime(), TimeUnit.MILLISECONDS);
        return tokenDto;
    }

    public void logout(HttpServletRequest request) {
        String jwt = request.getHeader("Authorization");
        if (StringUtils.hasText(jwt) && jwt.startsWith("Bearer ")) {
            String accessToken = jwt.substring(7);

            Authentication authentication = jwtProvider.getAuthentication(accessToken);

            if(redisTemplate.opsForValue().get("RT:" + authentication.getName()) != null) {
                redisTemplate.delete("RT:" + authentication.getName());
            }

            Long expiration = jwtProvider.getExpiration(accessToken);
            redisTemplate.opsForValue()
                    .set(accessToken, "logout", expiration, TimeUnit.MILLISECONDS);
        }
        else
            throw new RuntimeException("인증 정보가 Header에 포함되어 있지 않습니다.");
    }
}

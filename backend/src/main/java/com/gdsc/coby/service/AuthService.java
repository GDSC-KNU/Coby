package com.gdsc.coby.service;

import com.gdsc.coby.domain.User;
import com.gdsc.coby.dto.TokenDto;
import com.gdsc.coby.dto.UserDto;
import com.gdsc.coby.dto.request.LogoutRequestDto;
import com.gdsc.coby.dto.request.UserRequestDto;
import com.gdsc.coby.dto.response.UserResponseDto;
import com.gdsc.coby.repository.UserRepository;
import com.gdsc.coby.security.JwtProvider;
import jakarta.persistence.EntityExistsException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

    public UserResponseDto signup(UserRequestDto requestDto) {
        if(userRepository.existsByUserId(requestDto.userId())) {
            throw new EntityExistsException("이미 가입되어있는 유저입니다.");
        }
        User user = requestDto.toEntity(passwordEncoder);
        user.getRoles().add("ROLE_USER");
        return UserResponseDto.from(UserDto.from(userRepository.save(user)));
    }

    public TokenDto login(UserRequestDto requestDto) {
        if(!userRepository.existsByUserId(requestDto.userId())) {
            throw new UsernameNotFoundException("존재하지 않는 아이디입니다.");
        }
        UsernamePasswordAuthenticationToken authenticationToken = requestDto.toAuthentication();

        Authentication authentication = managerBuilder.getObject().authenticate(authenticationToken);

        TokenDto tokenDto = jwtProvider.generateTokenDto(authentication);

        redisTemplate.opsForValue()
                .set("RT:" + authentication.getName(), tokenDto.getRefreshToken(), tokenDto.getRefreshTokenExpirationTime(), TimeUnit.MILLISECONDS);
        return tokenDto;
    }

    public boolean logout(LogoutRequestDto requestDto) {
        if(!jwtProvider.validateToken(requestDto.accessToken())) {
            throw new RuntimeException("잘못된 요청입니다.");
        }
        Authentication authentication = jwtProvider.getAuthentication(requestDto.accessToken());

        if(redisTemplate.opsForValue().get("RT:" + authentication.getName()) != null) {
            redisTemplate.delete("RT:" + authentication.getName());
        }

        Long expiration = jwtProvider.getExpiration(requestDto.accessToken());
        redisTemplate.opsForValue()
                .set(requestDto.accessToken(), "logout", expiration, TimeUnit.MILLISECONDS);
        return true;
    }
}

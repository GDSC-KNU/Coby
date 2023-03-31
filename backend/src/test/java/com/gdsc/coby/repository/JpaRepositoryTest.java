package com.gdsc.coby.repository;

import com.gdsc.coby.domain.*;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;
import org.springframework.data.domain.AuditorAware;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import java.util.Optional;

import static org.assertj.core.api.Assertions.*;

@DisplayName("JPA 연결 테스트")
@DataJpaTest
@Import(JpaRepositoryTest.TestJpaConfig.class)
@Disabled
class JpaRepositoryTest {
    private final UserRepository userRepository;

    public JpaRepositoryTest(@Autowired UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @DisplayName("유저가 DB에 저장이 되는지 확인한다.")
    @Test
    void givenUserData_whenInserting_thenWorksFine() {
        //given
        User user = User.of("test", null, "testname", "test@email.com","1234~!#", 0L);
        long previousCount = userRepository.count();
        //when
        User savedUser = userRepository.save(user);
        //then
        assertThat(user.getName()).isEqualTo(savedUser.getName());
//        assertThat(user.getEmail()).isNotNull();
        assertThat(userRepository.count()).isEqualTo(previousCount + 1);
    }

    @DisplayName("저장된 유저가 제대로 조회되는지 확인한다.")
    @Test
    void givenUserData_whenSelecting_thenWorksFine() {
        //given
        User savedUser1 = userRepository.save(User.of("test1",null, "testName1", "test1@email.com","1234~!@", 123L));
        User savedUser2 = userRepository.save(User.of("test2", null, "testName2", "test2@email.com", "1234~!@", 0L));
        //when
        User selectedUser1 = userRepository.findByEmail(savedUser1.getEmail()).orElseThrow();
        User selectedUser2 = userRepository.findByEmail(savedUser2.getEmail()).orElseThrow();
        //then
        assertThat(userRepository.count()).isEqualTo(2);
        assertThat(selectedUser1.getName()).isEqualTo("testName1");
        assertThat(selectedUser1.getExp_point()).isEqualTo(123L);
        assertThat(selectedUser2.getName()).isEqualTo("testName2");
        assertThat(selectedUser2.getExp_point()).isEqualTo(0L);
        assertThat(savedUser1).isEqualTo(selectedUser1);
        assertThat(savedUser2).isEqualTo(selectedUser2);
    }

    @DisplayName("저장된 유저의 정보가 수정이 잘 되는지 확인한다.")
    @Test
    void givenUserData_whenUpdating_thenWorksFine() {
        //given
        String name = "testname";
        User savedUser = userRepository.save(User.of("test", null, "testname", "test@email.com","1234~!#", 0L));
        String updatedName = "coby";
        savedUser.setName(updatedName);
        //when
        User updatedUser = userRepository.saveAndFlush(savedUser);
        //then
        assertThat(updatedUser.getName()).isNotEqualTo(name);
        assertThat(updatedUser).hasFieldOrPropertyWithValue("name", updatedName);
    }

    @DisplayName("저장된 유저가 제대로 삭제되는지 확인한다.")
    @Test
    void givenUserData_whenDeleting_thenWorksFine() {
        //given
        User savedUser = userRepository.save(User.of("test", null, "testname", "test@email.com","1234~!#", 0L));
        long previousUserCount = userRepository.count();
        //when
        userRepository.delete(savedUser);
        //then
        assertThat(userRepository.count()).isEqualTo(previousUserCount - 1);
        assertThat(userRepository.findByEmail(savedUser.getEmail())).isEmpty();
    }

    @DisplayName("생성자, 생성일자가 제대로 저장되는지 확인한다.")
    @Test
    void givenUserData_whenInsertingAuditingFields_thenWorksFine() {
        //given
        User user = User.of("test", null, "testname", "test@email.com","1234~!#", 0L);
        //when
        User savedUser = userRepository.save(user);
        //then
        assertThat(savedUser.getCreatedAt()).isNotNull();
        assertThat(savedUser.getCreatedBy()).isEqualTo("coby");
    }

    @EnableJpaAuditing
    @TestConfiguration
    public static class TestJpaConfig {
        @Bean
        public AuditorAware<String> auditorAware() {
            return () -> Optional.of("coby");
        }
    }
}

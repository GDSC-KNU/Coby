package com.gdsc.coby.repository;

import com.gdsc.coby.domain.Group;
import com.gdsc.coby.domain.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PostRepository extends JpaRepository<Post,Long> {
    Optional<Post> findById(Long postId);
    List<Post> findAllByGroup_Id(Long groupId);
    void deleteByIdAndCreatedBy(Long postId, String userId);
}

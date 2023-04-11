package com.gdsc.coby.repository;

import com.gdsc.coby.domain.GroupTagMap;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface GroupTagMapRepository extends JpaRepository<GroupTagMap,Long> {
    Optional<GroupTagMap> deleteAllByGroupId(Long GroupId);
}

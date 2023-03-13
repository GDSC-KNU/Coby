package com.gdsc.coby.repository;

import com.gdsc.coby.domain.RoomTagMap;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomTagMapRepository extends JpaRepository<RoomTagMap,Long> {
}

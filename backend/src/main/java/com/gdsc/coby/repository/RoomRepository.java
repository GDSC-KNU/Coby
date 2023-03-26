package com.gdsc.coby.repository;

import com.gdsc.coby.domain.Room;
import com.gdsc.coby.dto.RoomDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RoomRepository extends JpaRepository<Room,Long> {
    List<RoomDto> findByNameContaining(String searchKeyword);
    Optional<Room> findByRoomId(Long roomId);

}

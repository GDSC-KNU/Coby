package com.gdsc.coby.repository;

import com.gdsc.coby.domain.RoomTagMap;
import com.gdsc.coby.repository.querydsl.RoomTagMapRepositoryCustom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RoomTagMapRepository extends
        JpaRepository<RoomTagMap,Long>,
        RoomTagMapRepositoryCustom
{
    List<RoomTagMap> findAllByRoom_Id(Long roomId);
}

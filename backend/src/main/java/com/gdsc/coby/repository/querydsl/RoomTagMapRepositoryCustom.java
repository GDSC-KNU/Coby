package com.gdsc.coby.repository.querydsl;

import com.gdsc.coby.domain.Room;
import com.gdsc.coby.domain.Tag;

import java.util.List;

public interface RoomTagMapRepositoryCustom {
    List<Tag> findTagsByRoom_Id(Long roomId);
    List<Room> findReviewRooms();
    List<Room> findPairRooms();
    List<Room> findRoomsContainingTags(String purpose, List<String> tool, List<String> language);
}

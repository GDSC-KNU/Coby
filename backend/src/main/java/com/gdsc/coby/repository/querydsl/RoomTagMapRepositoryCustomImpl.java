package com.gdsc.coby.repository.querydsl;

import com.gdsc.coby.domain.*;
import com.querydsl.jpa.impl.JPAQueryFactory;
import jakarta.persistence.EntityManager;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import java.util.List;

public class RoomTagMapRepositoryCustomImpl
        extends QuerydslRepositorySupport
        implements RoomTagMapRepositoryCustom {

    private final JPAQueryFactory jpaQueryFactory;

    QRoom room = QRoom.room;
    QRoomTagMap roomTagMap = QRoomTagMap.roomTagMap;
    QTag tag = QTag.tag;

    public RoomTagMapRepositoryCustomImpl(EntityManager entityManager) {
        super(RoomTagMap.class);
        this.jpaQueryFactory = new JPAQueryFactory(entityManager);
    }

    @Override
    public List<Room> findRoomsByTagName(String tagName) {
        return null;
    }

    @Override
    public List<Tag> findTagsByRoom_Id(Long roomId) {
        return jpaQueryFactory
                .select(tag)
                .from(roomTagMap)
                .leftJoin(room).on(roomTagMap.room.id.eq(room.id))
                .leftJoin(tag).on(roomTagMap.tag.id.eq(tag.id))
                .where(room.id.eq(roomId))
                .fetch()
                .stream().toList();
    }

    @Override
    public List<Room> findReviewRooms() {
        return jpaQueryFactory
                .select(room)
                .from(roomTagMap)
                .leftJoin(room).on(roomTagMap.room.id.eq(room.id))
                .leftJoin(tag).on(roomTagMap.tag.id.eq(tag.id))
                .where(tag.name.eq("코드리뷰"))
                .fetch()
                .stream().toList();
    }

    @Override
    public List<Room> findPairRooms() {
        return jpaQueryFactory
                .select(room)
                .from(roomTagMap)
                .leftJoin(room).on(roomTagMap.room.id.eq(room.id))
                .leftJoin(tag).on(roomTagMap.tag.id.eq(tag.id))
                .where(tag.name.eq("페어프로그래밍/몹프로그래밍"))
                .fetch()
                .stream().toList();
    }
}

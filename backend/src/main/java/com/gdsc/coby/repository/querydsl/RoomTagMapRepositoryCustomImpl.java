package com.gdsc.coby.repository.querydsl;

import com.gdsc.coby.domain.*;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.dsl.Expressions;
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
    public List<Tag> findTagsByRoom_Id(Long roomId) {
        return jpaQueryFactory
                .select(tag)
                .from(roomTagMap)
                .leftJoin(room).on(roomTagMap.room.id.eq(room.id))
                .leftJoin(tag).on(roomTagMap.tag.id.eq(tag.id))
                .where(room.id.eq(roomId))
                .fetch();
    }

    @Override
    public List<Room> findReviewRooms() {
        return jpaQueryFactory
                .select(room)
                .from(roomTagMap)
                .leftJoin(room).on(roomTagMap.room.id.eq(room.id))
                .leftJoin(tag).on(roomTagMap.tag.id.eq(tag.id))
                .where(tag.name.eq("코드리뷰"))
                .fetch();
    }

    @Override
    public List<Room> findPairRooms() {
        return jpaQueryFactory
                .select(room)
                .from(roomTagMap)
                .leftJoin(room).on(roomTagMap.room.id.eq(room.id))
                .leftJoin(tag).on(roomTagMap.tag.id.eq(tag.id))
                .where(tag.name.eq("페어프로그래밍/몹프로그래밍"))
                .fetch();
    }

    @Override
    public List<Room> findRoomsContainingTags(String purpose, List<String> tool, List<String> language) {
        BooleanBuilder baseBuilder = new BooleanBuilder();
        BooleanBuilder toolBuilder = new BooleanBuilder();
        BooleanBuilder languageBuilder = new BooleanBuilder();

        if(purpose != null)
            baseBuilder.and(Expressions.stringTemplate("group_concat({0})", tag.name)
                    .contains(purpose));

        if(tool != null)
            for(String tagName : tool)
                toolBuilder.or(Expressions.stringTemplate("group_concat({0})", tag.name)
                    .contains(tagName));

        if(language != null)
            for(String tagName : language)
                languageBuilder.or(Expressions.stringTemplate("group_concat({0})", tag.name)
                    .contains(tagName));

        baseBuilder.and(toolBuilder).and(languageBuilder);

        return jpaQueryFactory
                .select(room)
                .from(roomTagMap)
                .leftJoin(room).on(roomTagMap.room.id.eq(room.id))
                .leftJoin(tag).on(roomTagMap.tag.id.eq(tag.id))
                .groupBy(room.id)
                .having(baseBuilder)
                .fetch();
    }
}

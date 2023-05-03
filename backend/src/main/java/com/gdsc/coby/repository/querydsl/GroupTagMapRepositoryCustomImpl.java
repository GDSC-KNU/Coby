package com.gdsc.coby.repository.querydsl;

import com.gdsc.coby.domain.*;
import com.querydsl.jpa.impl.JPAQueryFactory;
import jakarta.persistence.EntityManager;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import java.util.List;

public class GroupTagMapRepositoryCustomImpl extends QuerydslRepositorySupport implements GroupTagMapRepositoryCustom {
    private final JPAQueryFactory jpaQueryFactory;

    QGroup group = QGroup.group;
    QGroupTagMap groupTagMap = QGroupTagMap.groupTagMap;
    QTag tag = QTag.tag;

    public GroupTagMapRepositoryCustomImpl(EntityManager entityManager) {
        super(GroupTagMap.class);
        this.jpaQueryFactory = new JPAQueryFactory(entityManager);
    }

    @Override
    public List<Group> findGroupsByTagName(String tagName) {
        return null;
    }

    @Override
    public List<Tag> findTagsByGroup_Id(Long groupId) {
        return jpaQueryFactory
                .select(tag)
                .from(groupTagMap)
                .leftJoin(group).on(groupTagMap.group.id.eq(group.id))
                .leftJoin(tag).on(groupTagMap.tag.id.eq(tag.id))
                .where(group.id.eq(groupId))
                .fetch()
                .stream().toList();
    }

    @Override
    public List<Group> findAllGroups() {
        return jpaQueryFactory
                .select(group)
                .from(groupTagMap)
                .leftJoin(group).on(groupTagMap.group.id.eq(group.id))
                .leftJoin(tag).on(groupTagMap.tag.id.eq(tag.id))
                .fetch()
                .stream().toList();
    }
}

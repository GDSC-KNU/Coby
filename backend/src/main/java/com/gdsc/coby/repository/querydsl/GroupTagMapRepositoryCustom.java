package com.gdsc.coby.repository.querydsl;

import com.gdsc.coby.domain.Group;
import com.gdsc.coby.domain.Room;
import com.gdsc.coby.domain.Tag;

import java.util.List;

public interface GroupTagMapRepositoryCustom {
    List<Group> findGroupsByTagName(String tagName);
    List<Tag> findTagsByGroup_Id(Long groupId);
    List<Group> findAllGroups();
}

package com.gdsc.coby.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class GroupTagMap {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false)
    private Group group;

    @ManyToOne(optional = false)
    private Tag tag;

    protected GroupTagMap(){};

    private GroupTagMap(Group group, Tag tag) {
        this.group = group;
        this.tag = tag;
    }

    public static GroupTagMap of(Group group,Tag tag){
        return new GroupTagMap(group,tag);
    }
}

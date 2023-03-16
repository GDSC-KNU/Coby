package com.gdsc.coby.domain;

import com.gdsc.coby.dto.RoomTagMapDto;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class RoomTagMap {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "id")
    private Room room;

    @ManyToOne(optional = false)
    @JoinColumn(name = "id")
    private Tag tag;

    protected RoomTagMap(){};

    private RoomTagMap(Room room, Tag tag) {
        this.room = room;
        this.tag = tag;
    }

    public static RoomTagMap of(Room room,Tag tag){
        return new RoomTagMap(room,tag);
    }
}

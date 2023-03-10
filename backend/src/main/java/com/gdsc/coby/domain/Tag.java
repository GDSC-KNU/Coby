package com.gdsc.coby.domain;

import com.gdsc.coby.domain.constant.Type;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;
    private String color;

    @Enumerated(EnumType.STRING)
    private Type status;
}

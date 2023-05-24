package com.gdsc.coby.dto.response;


import com.gdsc.coby.dto.GroupDto;
import java.util.List;

public record GroupResponseDto(
        Long id,
        String name,
        String description,
        String profileUrl,
        List<UserResponseDto> members,
        Long exp_point,
        String createdBy
) {

    public static GroupResponseDto from(GroupDto dto){
        List<UserResponseDto> members = dto.members().stream().map(UserResponseDto::from).toList();

        return new GroupResponseDto(
                dto.id(),
                dto.name(),
                dto.description(),
                dto.profileUrl(),
                members,
                members.stream().map(UserResponseDto::exp_point)
                        .reduce((total, exp) -> total += exp)
                        .orElse(0L),
                dto.createdBy()
        );
    }
}
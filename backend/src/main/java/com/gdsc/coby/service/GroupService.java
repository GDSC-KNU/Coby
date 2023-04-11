package com.gdsc.coby.service;

import com.gdsc.coby.domain.Group;
import com.gdsc.coby.domain.GroupTagMap;
import com.gdsc.coby.dto.GroupDto;
import com.gdsc.coby.dto.GroupTagMapDto;
import com.gdsc.coby.dto.request.GroupRequestDto;
import com.gdsc.coby.repository.GroupRepository;
import com.gdsc.coby.repository.GroupTagMapRepository;
import com.gdsc.coby.repository.TagRepository;
import com.gdsc.coby.security.SecurityUtil;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.webjars.NotFoundException;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class GroupService {
    private final GroupRepository groupRepository;
    private final TagRepository tagRepository;
    private final GroupTagMapRepository groupTagMapRepository;

    // 그룹 목록 조회
    @Transactional(readOnly = true)
    public List<GroupDto> getGroups(){
        return groupRepository.findAll().stream()
                .map(GroupDto::from)
                .toList();
    }

    // 그룹 정보 조회
    @Transactional(readOnly = true)
    public GroupDto getGroupInfo(Long groupId){
        return groupRepository.findById(groupId)
                .map(GroupDto::from)
                .orElseThrow(() -> new NotFoundException("그룹찾기 실패 : 해당 그룹을 찾을 수 없습니다."));
    }

    @Transactional
    public GroupDto creatGroup(GroupRequestDto requestDto){
        Group group = groupRepository.save(requestDto.toDto().toEntity());
        requestDto.tags().stream()
                .map(tagRepository::findByName)
                .map(Optional::orElseThrow)
                .forEach(tag -> groupTagMapRepository.save(GroupTagMap.of(group,tag)));
        return GroupDto.from(group);
    }

    @Transactional
    public GroupDto updateGroupInfo(Long groupId, GroupRequestDto requestDto){
        Group group = groupRepository.findById(groupId)
                .orElseThrow(()-> new NotFoundException("그룹찾기 실패 : 해당 그룹을 찾을 수 없습니다."));
        if(!group.getCreatedBy().equals(SecurityUtil.getCurrentUserId())){
            throw new RuntimeException("그룹 수정 권한이 없습니다.");
        }
        String name = requestDto.name();
        String description = requestDto.description();
        List<String> tags = requestDto.tags();

        if(name!=null && !group.getName().equals(name)) group.setName(name);
        if(description!=null && !group.getDescription().equals(description)) group.setDescription(description);
        if(tags!=null){
            groupTagMapRepository.deleteAllByGroupId(groupId);
            requestDto.tags().stream()
                    .map(tagRepository::findByName)
                    .map(Optional::orElseThrow)
                    .forEach(tag -> groupTagMapRepository.save(GroupTagMap.of(group,tag)));
        }
        return GroupDto.from(group);
    }

    public Boolean deleteGroup(Long groupId) {
        Group group = groupRepository.findById(groupId)
                .orElseThrow(() -> new NotFoundException("그룹찾기 실패 : 해당 그룹을 찾을 수 없습니다."));
        groupRepository.delete(group);
        return true;
    }


}

package com.gdsc.coby.service;

import com.gdsc.coby.domain.Group;
import com.gdsc.coby.domain.GroupTagMap;
import com.gdsc.coby.domain.User;
import com.gdsc.coby.domain.constant.Purpose;
import com.gdsc.coby.domain.constant.TagType;
import com.gdsc.coby.dto.GroupDto;
import com.gdsc.coby.dto.TagDto;
import com.gdsc.coby.dto.UserDto;
import com.gdsc.coby.dto.request.GroupRequestDto;
import com.gdsc.coby.repository.GroupRepository;
import com.gdsc.coby.repository.GroupTagMapRepository;
import com.gdsc.coby.repository.TagRepository;
import com.gdsc.coby.repository.UserRepository;
import com.gdsc.coby.security.SecurityUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.webjars.NotFoundException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
@RequiredArgsConstructor
@Transactional
public class GroupService {
    private final GroupRepository groupRepository;

    private final UserRepository userRepository;

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

    @Transactional(readOnly = true)
    public GroupDto getMyGroupInfo(){
        User user = userRepository.findByUserId(SecurityUtil.getCurrentUserId())
                .orElseThrow(()-> new UsernameNotFoundException("로그인 유저 정보가 없습니다."));
        return groupRepository.findById(user.getGroup().getId())
                .map(GroupDto::from)
                .orElseThrow(() -> new NotFoundException("그룹찾기 실패 : 해당 그룹을 찾을 수 없습니다."));
//
    }

    //그룹 생성
    @Transactional
    public GroupDto creatGroup(GroupDto dto){
        Group group = groupRepository.save(dto.toEntity());
        join(group.getId());
        return GroupDto.from(group);
    }

    @Transactional
    public boolean join(Long groupId) {
        User user = userRepository.findByUserId(SecurityUtil.getCurrentUserId())
                .orElseThrow(() -> new UsernameNotFoundException("로그인 유저 정보가 없습니다."));

        Group group = groupRepository.findById(groupId)
                .orElseThrow(() -> new NotFoundException("그룹찾기 실패 : 해당 그룹을 찾을 수 없습니다."));
        if(user.getGroup()!=null){
            throw new RuntimeException("이미 가입된 그룹이 존재합니다.");
        }
        group.setMembers(user);
        user.setGroup(group);
        return true;
    }

    @Transactional
    public boolean leave(Long groupId) {
        User user = userRepository.findByUserId(SecurityUtil.getCurrentUserId())
                .orElseThrow(() -> new UsernameNotFoundException("로그인 유저 정보가 없습니다."));

        Group group = groupRepository.findById(groupId)
                .orElseThrow(() -> new NotFoundException("그룹찾기 실패 : 해당 그룹을 찾을 수 없습니다."));
        user.setGroup(null);
        group.updateMembers(user);
        return true;
    }

    @Transactional
    public GroupDto updateGroupInfo(Long groupId, GroupDto dto){
        Group group = groupRepository.findById(groupId)
                .orElseThrow(()-> new NotFoundException("그룹찾기 실패 : 해당 그룹을 찾을 수 없습니다."));

        if(!group.getCreatedBy().equals(SecurityUtil.getCurrentUserId())){
            throw new RuntimeException("그룹 수정 권한이 없습니다.");
        }

        String name = dto.name();
        String description = dto.description();

        if(name!=null && !group.getName().equals(name)) group.setName(name);
        if(description!=null && !group.getDescription().equals(description)) group.setDescription(description);

        return GroupDto.from(group);
    }

    public Boolean deleteGroup(Long groupId) {
        Group group = groupRepository.findById(groupId)
                .orElseThrow(() -> new NotFoundException("그룹찾기 실패 : 해당 그룹을 찾을 수 없습니다."));
        groupRepository.delete(group);
        return true;
    }


}
package com.gdsc.coby.service;

import com.gdsc.coby.domain.Room;
import com.gdsc.coby.domain.RoomTagMap;
import com.gdsc.coby.dto.RoomDto;
import com.gdsc.coby.dto.request.RoomRequestDto;
import com.gdsc.coby.repository.RoomRepository;
import com.gdsc.coby.repository.RoomTagMapRepository;
import com.gdsc.coby.repository.TagRepository;
import com.gdsc.coby.security.SecurityUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.webjars.NotFoundException;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class RoomService {
    private final RoomRepository roomRepository;
    private final TagRepository tagRepository;
    private final RoomTagMapRepository roomTagMapRepository;

    // 코드룸 목록 조회
    @Transactional(readOnly = true)
    public List<RoomDto> getRooms(){
        return roomRepository.findAll().stream()
                .map(RoomDto::from)
                .toList();
    }

    // 코드룸 정보 조회
    @Transactional(readOnly = true)
    public RoomDto getRoom(Long roomId){
        return roomRepository.findById(roomId)
                .map(RoomDto::from)
                .orElseThrow(() -> new NotFoundException("방찾기 실패 : 해당 코드룸을 찾을 수 없습니다."));
    }

    // 검색 기능
   //TODO: 검색 기능 구현 시 상세화
//    @Transactional(readOnly = true)
//    public List<RoomDto> searchRoom(String searchKeyword){
//        return roomRepository.findByNameContaining(searchKeyword);
//    }

    @Transactional
    public RoomDto createRoom(RoomRequestDto requestDto){
        Room room = roomRepository.save(requestDto.toEntity());
        requestDto.tags().stream()
                .map(tagRepository::findByName)
                .map(Optional::orElseThrow)
                .forEach(tag -> roomTagMapRepository.save(RoomTagMap.of(room, tag)));
        return RoomDto.from(room);
    }

    @Transactional
    public RoomDto updateRoomInfo(Long roomId, RoomRequestDto requestDto) {
        Room room = roomRepository.findById(roomId)
                .orElseThrow(() -> new NotFoundException("방찾기 실패 : 해당 코드룸을 찾을 수 없습니다."));

        if(!room.getCreatedBy().equals(SecurityUtil.getCurrentUserId())) {
            throw new RuntimeException("코드룸 수정 권한이 없습니다.");
        }

        String name = requestDto.name();
        String url = requestDto.url();
        Integer limit = requestDto.personnel();
        String password = requestDto.password();

        if(name != null && !room.getName().equals(name))
            room.setName(name);
        if(url != null && !room.getUrl().equals(url))
            room.setUrl(url);
        if(password != null && !room.getPassword().equals(password))
            room.setPassword(password);
        if(limit != null && !room.getPersonnel().equals(limit))
            room.setPersonnel(requestDto.personnel());

        return RoomDto.from(room);
    }

    public Boolean deleteRoom(Long roomId) {
        Room room = roomRepository.findById(roomId)
                .orElseThrow(() -> new NotFoundException("방찾기 실패 : 해당 코드룸을 찾을 수 없습니다."));
        roomRepository.delete(room);
        return true;
    }

}

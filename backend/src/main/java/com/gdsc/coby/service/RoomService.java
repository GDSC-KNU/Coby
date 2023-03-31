package com.gdsc.coby.service;

import com.gdsc.coby.domain.Room;
import com.gdsc.coby.domain.RoomTagMap;
import com.gdsc.coby.dto.RoomDto;
import com.gdsc.coby.dto.RoomTagMapDto;
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
    public List<RoomDto> getReviewRooms(){
        return roomTagMapRepository.findAllByTag_Id(16L).stream()
                .map(RoomTagMapDto::from)
                .map(RoomTagMapDto::room)
                .toList();
    }

    @Transactional(readOnly = true)
    public List<RoomDto> getPairRooms(){
        return roomTagMapRepository.findAllByTag_Id(17L).stream()
                .map(RoomTagMapDto::from)
                .map(RoomTagMapDto::room)
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

    public RoomDto createReviewRoom(RoomDto dto){
        Room room = roomRepository.save(dto.toEntity());
        dto.tags().add("코드리뷰");
        dto.tags().stream()
                .map(tagRepository::findByName)
                .map(Optional::orElseThrow)
                .forEach(tag -> roomTagMapRepository.save(RoomTagMap.of(room, tag)));
        return RoomDto.from(room);
    }

    public RoomDto createPairRoom(RoomDto dto){
        Room room = roomRepository.save(dto.toEntity());
        dto.tags().add("페어프로그래밍");
        dto.tags().stream()
                .map(tagRepository::findByName)
                .map(Optional::orElseThrow)
                .forEach(tag -> roomTagMapRepository.save(RoomTagMap.of(room, tag)));
        return RoomDto.from(room);
    }

    public RoomDto updateRoomInfo(Long roomId, RoomDto dto) {
        Room room = roomRepository.findById(roomId)
                .orElseThrow(() -> new NotFoundException("방찾기 실패 : 해당 코드룸을 찾을 수 없습니다."));

        if(!room.getCreatedBy().equals(SecurityUtil.getCurrentUserId())) {
            throw new RuntimeException("코드룸 수정 권한이 없습니다.");
        }

        String name = dto.name();
        String url = dto.url();
        Integer personnel = dto.personnel();
        String password = dto.password();

        if(name != null && !room.getName().equals(name))
            room.setName(name);
        if(url != null && !room.getUrl().equals(url))
            room.setUrl(url);
        if(password != null && !room.getPassword().equals(password))
            room.setPassword(password);
        if(personnel != null && !room.getPersonnel().equals(personnel))
            room.setPersonnel(personnel);

        return RoomDto.from(room);
    }

    public Boolean deleteRoom(Long roomId) {
        Room room = roomRepository.findById(roomId)
                .orElseThrow(() -> new NotFoundException("방찾기 실패 : 해당 코드룸을 찾을 수 없습니다."));
        roomRepository.delete(room);
        return true;
    }

}

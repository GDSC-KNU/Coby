package com.gdsc.coby.service;

import com.gdsc.coby.domain.Room;
import com.gdsc.coby.dto.RoomDto;
import com.gdsc.coby.dto.UserDto;
import com.gdsc.coby.repository.RoomRepository;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class RoomService {
    private final RoomRepository roomRepository;

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
        return roomRepository.findByRoomId(roomId)
                .map(RoomDto::from)
                .orElseThrow(() -> {
                    throw new IllegalArgumentException("방찾기 실패 : 해당 코드룸을 찾을 수 없습니다.");
                });
    }

    // 검색 기능
    @Transactional(readOnly = true)
    public List<RoomDto> searchRoom(String searchKeyword){
        return roomRepository.findByNameContaining(searchKeyword);
    }

    @Transactional
    public Long createRoom(@RequestBody RoomDto room){
        roomRepository.save(room.toEntity());
        return room.id();
    }

    @Transactional
    public RoomDto updateRoomInfo(RoomDto requestRoom) {
        Room room = roomRepository.findByRoomId(requestRoom.id())
                .orElseThrow(() -> {
                    throw new IllegalArgumentException("방찾기 실패 : 해당 코드룸을 찾을 수 없습니다.");
                });
        room.setLimit(requestRoom.limit());
        room.setName(requestRoom.name());
        room.setPassword(requestRoom.password());
        room.setUrl(requestRoom.url());

        return RoomDto.from(room);
    }

    public Boolean deleteRoom(Long roomId) {
        Room room = roomRepository.findByRoomId(roomId)
                .orElseThrow(() -> {
                    throw new IllegalArgumentException("방찾기 실패 : 해당 코드룸을 찾을 수 없습니다.");
                });
        roomRepository.delete(room);
        return true;
    }

}

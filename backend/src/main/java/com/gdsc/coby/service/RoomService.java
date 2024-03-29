package com.gdsc.coby.service;

import com.gdsc.coby.domain.Room;
import com.gdsc.coby.domain.RoomTagMap;
import com.gdsc.coby.domain.constant.Purpose;
import com.gdsc.coby.domain.constant.TagType;
import com.gdsc.coby.dto.RoomDto;
import com.gdsc.coby.dto.TagDto;
import com.gdsc.coby.repository.RoomRepository;
import com.gdsc.coby.repository.RoomTagMapRepository;
import com.gdsc.coby.repository.TagRepository;
import com.gdsc.coby.security.SecurityUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.webjars.NotFoundException;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class RoomService {
    private final RoomRepository roomRepository;
    private final TagRepository tagRepository;
    private final RoomTagMapRepository roomTagMapRepository;

    // 코드룸 목록 조회
    @Transactional(readOnly = true)
    public List<RoomDto> getReviewRooms(List<String> tool, List<String> language, String searchKeyword){
        if(searchKeyword != null)
            return searchRoom(searchKeyword);

        if(tool == null && language == null)
            return roomTagMapRepository.findReviewRooms().stream()
                    .map(room -> RoomDto.from(room, roomTagMapRepository.findTagsByRoom_Id(room.getId()).stream()
                            .map(TagDto::from).toList()))
                    .toList();

        else return searchRoom(Purpose.REVIEW.getInfo(), tool, language);
    }

    @Transactional(readOnly = true)
    public List<RoomDto> getPairRooms(List<String> tool, List<String> language, String searchKeyword){
        if(searchKeyword != null)
            return searchRoom(searchKeyword);

        if(tool == null && language == null)
            return roomTagMapRepository.findPairRooms().stream()
                    .map(room -> RoomDto.from(room, roomTagMapRepository.findTagsByRoom_Id(room.getId()).stream()
                                    .map(TagDto::from).toList()))
                    .toList();

        else return searchRoom(Purpose.PAIR.getInfo(), tool, language);
    }

    // 코드룸 정보 조회
    @Transactional(readOnly = true)
    public RoomDto getRoom(Long roomId){
        Room room = roomRepository.findById(roomId)
                .orElseThrow(() -> new NotFoundException("방찾기 실패 : 해당 코드룸을 찾을 수 없습니다."));
        return RoomDto.from(room, roomTagMapRepository.findTagsByRoom_Id(room.getId()).stream()
                .map(TagDto::from).toList());
    }

    @Transactional(readOnly = true)
    public List<RoomDto> searchRoom(String purpose, List<String> tool, List<String> language){
        return roomTagMapRepository.findRoomsContainingTags(purpose, tool, language).stream()
                .map(room -> RoomDto.from(room, roomTagMapRepository.findTagsByRoom_Id(room.getId()).stream()
                        .map(TagDto::from).toList()))
                .toList();
    }

    @Transactional(readOnly = true)
    public List<RoomDto> searchRoom(String searchKeyword){
        return roomRepository.findByNameContaining(searchKeyword).stream()
                .map(room -> RoomDto.from(room, roomTagMapRepository.findTagsByRoom_Id(room.getId()).stream()
                        .map(TagDto::from).toList()))
                .toList();
    }

    public RoomDto createReviewRoom(RoomDto dto){
        Room room = roomRepository.save(dto.toEntity());
        dto.tags().add(TagDto.of(Purpose.REVIEW.getInfo(), TagType.PURPOSE));
        dto.tags().stream()
                .map(TagDto::name)
                .map(tagRepository::findByName)
                .map(tag -> tag.orElseThrow(() -> new NotFoundException("태그를 찾을 수 없습니다.")))
                .forEach(tag -> roomTagMapRepository.save(RoomTagMap.of(room, tag)));
        return RoomDto.from(room, dto.tags());
    }

    public RoomDto createPairRoom(RoomDto dto){
        Room room = roomRepository.save(dto.toEntity());
        dto.tags().add(TagDto.of(Purpose.PAIR.getInfo(), TagType.PURPOSE));
        dto.tags().stream()
                .map(TagDto::name)
                .map(tagRepository::findByName)
                .map(tag -> tag.orElseThrow(() -> new NotFoundException("태그를 찾을 수 없습니다.")))
                .forEach(tag -> roomTagMapRepository.save(RoomTagMap.of(room, tag)));
        return RoomDto.from(room, dto.tags());
    }

    public RoomDto updateRoomInfo(Long roomId, RoomDto dto) {
        Room room = roomRepository.findById(roomId)
                .orElseThrow(() -> new NotFoundException("방찾기 실패 : 해당 코드룸을 찾을 수 없습니다."));

        if(!room.getCreatedBy().equals(SecurityUtil.getCurrentUserId())) {
            throw new RuntimeException("코드룸 수정 권한이 없습니다.");
        }

        String name = dto.name();
        String url = dto.url();
        String password = dto.password();


        if(name != null && !room.getName().equals(name))
            room.setName(name);
        if(url != null && !room.getUrl().equals(url))
            room.setUrl(url);
        if(password != null && !room.getPassword().equals(password))
            room.setPassword(password);

        // TODO: 태그 다 날리고 새로 저장하기

        return null;
    }

    public Boolean deleteRoom(Long roomId) {
        Room room = roomRepository.findById(roomId)
                .orElseThrow(() -> new NotFoundException("방찾기 실패 : 해당 코드룸을 찾을 수 없습니다."));

        if(!room.getCreatedBy().equals(SecurityUtil.getCurrentUserId())) {
            throw new RuntimeException("코드룸 삭제 권한이 없습니다.");
        }
        roomTagMapRepository.deleteAll(roomTagMapRepository.findAllByRoom_Id(roomId));
        roomRepository.delete(room);
        return true;
    }

}

package com.gdsc.coby.service;

import com.gdsc.coby.domain.Post;
import com.gdsc.coby.domain.User;
import com.gdsc.coby.dto.GroupDto;
import com.gdsc.coby.dto.PostDto;
import com.gdsc.coby.repository.GroupRepository;
import com.gdsc.coby.repository.PostRepository;
import com.gdsc.coby.security.SecurityUtil;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.webjars.NotFoundException;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class PostService {

    private final PostRepository postRepository;
    private final GroupRepository groupRepository;

    @Transactional(readOnly = true)
    public List<PostDto> getPosts(Long groupId) {
        return postRepository.findAllByGroup_Id(groupId).stream()
                .map(PostDto::from)
                .toList();
    }

    @Transactional(readOnly = true)
    public PostDto getPost(Long postId) {
        return postRepository.findById(postId)
                .map(PostDto::from)
                .orElseThrow(() -> new EntityNotFoundException("게시물을 찾을 수 없습니다."));
    }

    public PostDto createPost(Long groupId, PostDto dto) {
        GroupDto group = groupRepository.findById(groupId)
                .map(GroupDto::from)
                .orElseThrow(() -> new EntityNotFoundException("그룹을 찾을 수 없습니다."));
        return PostDto.from(postRepository.save(dto.toEntity(group.toEntity())));
    }

    public PostDto updatePost(Long postId, PostDto dto) {
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new EntityNotFoundException("수정하려는 게시물을 찾을 수 없습니다."));

        if(dto.title() == null && dto.content() == null)
            throw new IllegalArgumentException("수정할 정보가 없습니다.");
        if(dto.title() != null && !dto.title().equals(post.getTitle()))
            post.setTitle(dto.title());
        if(dto.content() != null && !dto.content().equals(post.getContent()))
            post.setContent(dto.content());

        return PostDto.from(post);
    }

    public Boolean deletePost(Long postId) {
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new EntityNotFoundException("삭제하려는 게시물을 찾을 수 없습니다."));
        postRepository.delete(post);
        return true;
    }
}

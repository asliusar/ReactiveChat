package com.example.chat.service;

import com.example.chat.entity.User;
import com.example.chat.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private Logger logger = LoggerFactory.getLogger(UserService.class);

    @Autowired
    private UserRepository userRepository;

    public User addUser(User user) {
        User existing = userRepository.findByName(user.getName());

        if (existing != null) {
            return existing;
        } else {
            return userRepository.save(user);
        }
    }

    public User getUser(Long id) {
        return userRepository.getOne(id);
    }
}

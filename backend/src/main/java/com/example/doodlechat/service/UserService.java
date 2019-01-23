package com.example.doodlechat.service;

import com.example.doodlechat.controller.MessageController;
import com.example.doodlechat.entity.Message;
import com.example.doodlechat.entity.User;
import com.example.doodlechat.repository.MessageRepository;
import com.example.doodlechat.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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

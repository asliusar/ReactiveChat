package com.example.doodlechat.controller;

import com.example.doodlechat.entity.User;
import com.example.doodlechat.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/user")
public class UserController {
    private Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService userService;

    @RequestMapping(value="/{id}", method=RequestMethod.GET)
    public User getUser(@PathVariable("id") Long id) {
        logger.info(String.format("Request a user with id: %s", id));

        return userService.getUser(id);
    }

    @RequestMapping(value="/", method=RequestMethod.POST, consumes = {"application/json"})
    public User addUser(@RequestBody User user) {
        logger.info(String.format("Create a new user with text: %s", user.getName()));

        return userService.addUser(user);
    }
}

package com.example.doodlechat.controller;

import com.example.doodlechat.entity.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/user")
public class UserController {
    private Logger logger = LoggerFactory.getLogger(UserController.class);

    @RequestMapping(value="/{id}", method=RequestMethod.GET)
    public User getUser(@PathVariable("id") String id) {
        logger.info(String.format("Request a user with id: %s", id));

        return new User();
    }

    @RequestMapping(value="/", method=RequestMethod.POST)
    public void addUser(@RequestBody User user) {
        logger.info(String.format("Create a new user with text: %s", user.getName()));
    }
}

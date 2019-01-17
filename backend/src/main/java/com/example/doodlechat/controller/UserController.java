package com.example.doodlechat.controller;

import com.example.doodlechat.entity.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Controller
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

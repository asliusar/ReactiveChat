package com.example.doodlechat.controller;

import com.example.doodlechat.entity.Message;
import com.example.doodlechat.service.MessageService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// TODO refactor it on WebSockets, WebSockets is better than SSE for the task
@RestController
@RequestMapping("api/message")
public class MessageController {

    private Logger logger = LoggerFactory.getLogger(MessageController.class);

    @Autowired
    private MessageService messageService;

    @RequestMapping(method= RequestMethod.GET)
    public List<Message> getAllMessages() {
        logger.info("Request all messages");

        return messageService.getMessages();
    }

    @RequestMapping(method=RequestMethod.POST)
    public void saveMessage(@RequestBody Message message) {
        logger.info(String.format("Save a new message: %s", message.getText()));

        messageService.saveMessage(message);
    }
}

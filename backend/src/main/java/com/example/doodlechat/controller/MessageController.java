package com.example.doodlechat.controller;

import com.example.doodlechat.entity.Message;
import com.example.doodlechat.service.MessageService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

import java.util.List;

@Controller
public class MessageController {

    private Logger logger = LoggerFactory.getLogger(MessageController.class);

    @Autowired
    private MessageService messageService;

    @MessageMapping("/message")
    public void addMessage(Message message) throws Exception {
        messageService.addMessage(message);
    }

    @SendTo("/messages")
    public Iterable<Message> getMessages() {
        return messageService.getMessages();
    }
}

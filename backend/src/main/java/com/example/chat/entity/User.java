package com.example.chat.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity(name = "USER")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
}

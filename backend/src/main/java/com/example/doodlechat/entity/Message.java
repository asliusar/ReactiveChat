package com.example.doodlechat.entity;

import lombok.Data;

import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.util.Date;

@Data
public class Message {
    @Id
    private Long id;

    private String text;

    private Date date;

    @ManyToOne(fetch= FetchType.LAZY)
    @JoinColumn(name="OWNER_ID")
    private User owner;
}

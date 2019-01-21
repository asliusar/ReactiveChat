package com.example.doodlechat.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
public class Message {
    @Id
    private Long id;

    private String text;

    private Date date;

    @ManyToOne(fetch= FetchType.LAZY)
    @JoinColumn(name="OWNER_ID")
    private User owner;
}

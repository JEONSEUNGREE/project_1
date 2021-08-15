package com.example.demo.entity;


import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@Table(name = "schedule")
public class Schedule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "schedule_no")
    private Long scheduleNo;

    @Column(length = 10, nullable = false)
    private String eight;

    @Column(length = 10, nullable = false)
    private String nine;

    @Column(length = 20, nullable = false)
    private String ten;

    @Column(length = 20, nullable = false)
    private String eleven;

    @Column(length = 10, nullable = false)
    private String status;
}

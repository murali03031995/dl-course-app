package com.react.CRUD.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Builder
@Table(name = "courses")
@AllArgsConstructor
@NoArgsConstructor
public class Form {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column
    @NotEmpty
    String courseId;

    @Column
    @NotEmpty
    String courseName;

    @Column
    @NotEmpty
    String trainerName;

    @Column
    @NotEmpty
    String price;
}

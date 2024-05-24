package com.react.CRUD.controller;


import com.react.CRUD.entity.Form;
import com.react.CRUD.repo.FormRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class FormController {

    @Autowired
    FormRepo formRepo;

    @GetMapping("/api")
    public String api() {
        return "Successfully connected to Backend!";
    }
    @GetMapping("/allCourses")
    public List<Form> getAllCourses() {
        return formRepo.findAll();
    }

    @GetMapping("/getCourse/{courseId}")
    public Form getCourse(@PathVariable String courseId) {
        return formRepo.findByCourseId(courseId);
    }

    @PostMapping("/createCourse")
    public ResponseEntity<?> createCourse(@RequestBody Form course){

        Form newCourse = new Form();

        newCourse.setCourseId(course.getCourseId());
        newCourse.setCourseName(course.getCourseName());
        newCourse.setTrainerName(course.getTrainerName());
        newCourse.setPrice(course.getPrice());

        formRepo.save(newCourse);
        return ResponseEntity.ok(newCourse);
    }

    @PutMapping("/updateCourse/{id}")
    public ResponseEntity<?> updateCourse(@RequestBody Form course, @PathVariable String id) {
        Form existingCourse = formRepo.findByCourseId(id);
        if (existingCourse == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Course with ID " + id + " not found");
        }

        existingCourse.setCourseId(course.getCourseId());
        existingCourse.setCourseName(course.getCourseName());
        existingCourse.setTrainerName(course.getTrainerName());
        existingCourse.setPrice(course.getPrice());

        Form updatedCourse = formRepo.save(existingCourse);

        return ResponseEntity.ok(updatedCourse);
    }

    @DeleteMapping("/deleteCourse/{id}")
    public ResponseEntity<String> deleteCourse(@PathVariable String id) {

        Form existingCourse = formRepo.findByCourseId(id);
        if (existingCourse == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Course with ID " + id + " not found");
        }
        formRepo.delete(existingCourse);

        return ResponseEntity.ok("Course with ID " + id + " has been deleted");
    }


}

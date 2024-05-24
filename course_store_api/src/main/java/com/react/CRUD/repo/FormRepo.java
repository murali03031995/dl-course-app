package com.react.CRUD.repo;

import com.react.CRUD.entity.Form;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FormRepo extends JpaRepository<Form, Long> {
    Form findByCourseId(String id);
}

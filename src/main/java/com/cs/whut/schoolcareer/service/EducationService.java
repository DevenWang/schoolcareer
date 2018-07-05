package com.cs.whut.schoolcareer.service;

import com.cs.whut.schoolcareer.model.Education;

import java.util.List;

public interface EducationService {

    void save(Education education);

    List<Education> getByUserId(String userId);

    Education getById(String id);

    List<Education> getAll();

    void remove(String id);

}

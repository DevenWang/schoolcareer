package com.cs.whut.schoolcareer.service;

import com.cs.whut.schoolcareer.model.Recruitment;

import java.util.List;

public interface RecruitmentService {

    void save(Recruitment recruitment);

    List<Recruitment> getByInstituteId(String instituteId);

    Recruitment getById(String id);

    List<Recruitment> findByCompany(String company);

    List<Recruitment> findAll();

    List<Recruitment> findByPost(String post);

    void remove(String id);

}

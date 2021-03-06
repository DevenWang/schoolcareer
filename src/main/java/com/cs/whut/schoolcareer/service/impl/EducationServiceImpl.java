package com.cs.whut.schoolcareer.service.impl;

import com.cs.whut.schoolcareer.dao.EducationDAO;
import com.cs.whut.schoolcareer.model.Education;
import com.cs.whut.schoolcareer.service.EducationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EducationServiceImpl implements EducationService {

    private EducationDAO educationDAO;

    @Autowired
    public EducationServiceImpl(EducationDAO educationDAO) {
        this.educationDAO = educationDAO;
    }

    @Override
    public void save(Education education) {
        educationDAO.save(education);
    }

    @Override
    public List<Education> getByUserId(String userId) {
        return educationDAO.findByUserId(userId);
    }

    @Override
    public Education getById(String id) {
        return educationDAO.findOne(id);
    }

    @Override
    public List<Education> getAll() {
        return (List<Education>) educationDAO.findAll();
    }

    @Override
    public void remove(String id) {
        educationDAO.delete(id);

    }

}

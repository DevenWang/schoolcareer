package com.cs.whut.schoolcareer.service.impl;

import com.cs.whut.schoolcareer.dao.RecruitmentDAO;
import com.cs.whut.schoolcareer.model.Recruitment;
import com.cs.whut.schoolcareer.service.RecruitmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecruitmentServiceImpl implements RecruitmentService {

    private RecruitmentDAO recruitmentDAO;

    @Autowired
    public RecruitmentServiceImpl(RecruitmentDAO recruitmentDAO) {
        this.recruitmentDAO = recruitmentDAO;
    }

    @Override
    public void save(Recruitment recruitment) {
        recruitmentDAO.save(recruitment);
    }

    @Override
    public List<Recruitment> getByInstituteId(String instituteId) {
        return recruitmentDAO.findByInstituteId(instituteId);
    }

    @Override
    public Recruitment getById(String id) {
        return recruitmentDAO.findOne(id);
    }

    @Override
    public List<Recruitment> findByCompany(String company) {
        return recruitmentDAO.findByCompanyLike(company);
    }

    @Override
    public List<Recruitment> findAll() {
        return (List<Recruitment>) recruitmentDAO.findAll();
    }

    @Override
    public List<Recruitment> findByPost(String post) {
        return recruitmentDAO.findByPostLike(post);
    }

    @Override
    public void remove(String id) {
        recruitmentDAO.delete(id);
    }

}

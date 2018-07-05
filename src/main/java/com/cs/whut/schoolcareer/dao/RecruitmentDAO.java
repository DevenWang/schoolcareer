package com.cs.whut.schoolcareer.dao;

import com.cs.whut.schoolcareer.model.Recruitment;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface RecruitmentDAO extends CrudRepository<Recruitment, String> {

    List<Recruitment> findByInstituteId(String instituteId);

    List<Recruitment> findByCompanyLike(String company);

    List<Recruitment> findByPostLike(String post);

    List<Recruitment> findByRecruitmentIdIsIn(List<String> recruitments);

}

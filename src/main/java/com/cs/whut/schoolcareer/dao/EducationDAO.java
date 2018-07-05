package com.cs.whut.schoolcareer.dao;

import com.cs.whut.schoolcareer.model.Education;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface EducationDAO extends CrudRepository<Education, String> {

    List<Education> findByUserId(String userId);

}

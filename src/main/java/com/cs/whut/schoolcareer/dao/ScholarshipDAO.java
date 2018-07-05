package com.cs.whut.schoolcareer.dao;

import com.cs.whut.schoolcareer.model.Scholarship;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ScholarshipDAO extends CrudRepository<Scholarship, String> {

    List<Scholarship> findByUserId(String userId);

    List<Scholarship> findBySourceLike(String source);

    List<Scholarship> findByLevelLike(String level);

}

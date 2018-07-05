package com.cs.whut.schoolcareer.dao;

import com.cs.whut.schoolcareer.model.Practice;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PracticeDAO extends CrudRepository<Practice, String> {

    List<Practice> findByUserId(String userId);

}

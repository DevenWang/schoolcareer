package com.cs.whut.schoolcareer.dao;

import com.cs.whut.schoolcareer.model.Work;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface WorkDAO extends CrudRepository<Work, String> {

    List<Work> findByUserId(String userId);

}

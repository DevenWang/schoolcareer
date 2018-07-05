package com.cs.whut.schoolcareer.dao;

import com.cs.whut.schoolcareer.model.Apply;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ApplyDAO extends CrudRepository<Apply, String> {

    List<Apply> findByUserId(String userId);

    List<Apply> findByWorkId(String workId);

}

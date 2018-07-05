package com.cs.whut.schoolcareer.dao;

import com.cs.whut.schoolcareer.model.Matches;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface MatchesDAO extends CrudRepository<Matches, String> {

    List<Matches> findByNameLike(String name);

    List<Matches> findByLevelLike(String level);

    List<Matches> findByUserId(String userId);

}

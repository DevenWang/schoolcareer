package com.cs.whut.schoolcareer.dao;

import com.cs.whut.schoolcareer.model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserDAO extends CrudRepository<User, String> {
    List<User> findByType(String type);
}

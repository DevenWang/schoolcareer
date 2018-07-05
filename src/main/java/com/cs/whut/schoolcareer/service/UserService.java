package com.cs.whut.schoolcareer.service;

import com.cs.whut.schoolcareer.model.User;

import java.util.List;

public interface UserService {

    User getUserById(String userId);

    void saveUser(User user);

    List<User> findAllByType(String type);

    void deleteUser(String userId);

}

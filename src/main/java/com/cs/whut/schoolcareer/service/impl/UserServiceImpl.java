package com.cs.whut.schoolcareer.service.impl;

import com.cs.whut.schoolcareer.dao.UserDAO;
import com.cs.whut.schoolcareer.model.User;
import com.cs.whut.schoolcareer.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    private UserDAO userDAO;

    @Autowired
    public UserServiceImpl(UserDAO userDAO) {
        this.userDAO = userDAO;
    }

    @Override
    public User getUserById(String userId) {
        return userDAO.findOne(userId);
    }

    @Override
    public void saveUser(User user) {
        userDAO.save(user);
    }

    @Override
    public List<User> findAllByType(String type) {
        return userDAO.findByType(type);
    }

    @Override
    public void deleteUser(String userId) {
        userDAO.delete(userId);
    }


}

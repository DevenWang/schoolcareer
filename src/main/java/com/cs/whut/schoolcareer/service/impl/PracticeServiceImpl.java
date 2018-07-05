package com.cs.whut.schoolcareer.service.impl;

import com.cs.whut.schoolcareer.dao.PracticeDAO;
import com.cs.whut.schoolcareer.model.Practice;
import com.cs.whut.schoolcareer.service.PracticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PracticeServiceImpl implements PracticeService {

    private PracticeDAO practiceDAO;

    @Autowired
    public PracticeServiceImpl(PracticeDAO practiceDAO) {
        this.practiceDAO = practiceDAO;
    }

    @Override
    public void save(Practice practice) {
        practiceDAO.save(practice);
    }

    @Override
    public List<Practice> findByUserId(String userId) {
        return practiceDAO.findByUserId(userId);
    }

    @Override
    public Practice findById(String id) {
        return practiceDAO.findOne(id);
    }

    @Override
    public List<Practice> findAll() {
        return (List<Practice>) practiceDAO.findAll();
    }

    @Override
    public void remove(String id) {
        practiceDAO.delete(id);
    }

}

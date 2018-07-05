package com.cs.whut.schoolcareer.service;

import com.cs.whut.schoolcareer.model.Work;

import java.util.List;

public interface WorkService {

    void save(Work work);

    Work findById(String id);

    List<Work> findByUserId(String userId);

    List<Work> findAll();

    void remove(String id);

}

package com.cs.whut.schoolcareer.service.impl;

import com.cs.whut.schoolcareer.dao.BaseInfoDAO;
import com.cs.whut.schoolcareer.model.BaseInfo;
import com.cs.whut.schoolcareer.service.BaseInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BaseInfoServiceImpl implements BaseInfoService {

    private BaseInfoDAO baseInfoDAO;

    @Autowired
    public BaseInfoServiceImpl(BaseInfoDAO baseInfoDAO) {
        this.baseInfoDAO = baseInfoDAO;
    }

    @Override
    public void save(BaseInfo baseInfo) {
        baseInfoDAO.save(baseInfo);
    }

    @Override
    public BaseInfo getbyId(String id) {
        return baseInfoDAO.findOne(id);
    }

    @Override
    public List<BaseInfo> getAll() {
        return (List<BaseInfo>) baseInfoDAO.findAll();
    }

    @Override
    public void remove(String id) {
        baseInfoDAO.delete(id);
    }
}

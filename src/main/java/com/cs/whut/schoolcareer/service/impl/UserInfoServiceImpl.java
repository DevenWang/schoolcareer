package com.cs.whut.schoolcareer.service.impl;

import com.cs.whut.schoolcareer.dao.InstituteDAO;
import com.cs.whut.schoolcareer.dao.UserInfoDAO;
import com.cs.whut.schoolcareer.model.Institute;
import com.cs.whut.schoolcareer.model.UserInfo;
import com.cs.whut.schoolcareer.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserInfoServiceImpl implements UserInfoService {

    @Autowired
    private UserInfoDAO userInfoDAO;

    @Autowired
    private InstituteDAO instituteDAO;

    @Override
    public void saveUserInfo(UserInfo userInfo) {
        userInfoDAO.save(userInfo);
    }

    @Override
    public List<UserInfo> findByInstitute(String instituteId) {
        return userInfoDAO.findByInstituteId(instituteId);
    }

    @Override
    public List<UserInfo> findByWorkStat(int workStat) {
        return userInfoDAO.findByWorkStat(workStat);
    }

    @Override
    public List<Institute> findAllInstitute() {
        return (List<Institute>) instituteDAO.findAll();
    }

    @Override
    public UserInfo findByUserId(String userId) {
        List<UserInfo> userInfos = userInfoDAO.findByUserId(userId);
        return userInfos.size() <= 0 ? null : userInfos.get(0);
    }

    @Override
    public void deleteUserInfo(String userInfoId) {
        userInfoDAO.delete(userInfoId);
    }

    @Override
    public List<UserInfo> findByStatAndIns(String ins, int stat) {
        return userInfoDAO.findByInstituteIdAndAndWorkStat(ins, stat);
    }
}



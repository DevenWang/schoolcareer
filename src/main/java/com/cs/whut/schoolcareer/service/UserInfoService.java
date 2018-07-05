package com.cs.whut.schoolcareer.service;

import com.cs.whut.schoolcareer.model.Institute;
import com.cs.whut.schoolcareer.model.UserInfo;

import java.util.List;

public interface UserInfoService {

    void saveUserInfo(UserInfo userInfo);

    List<UserInfo> findByInstitute(String instituteId);

    List<UserInfo> findByWorkStat(int workStat);

    List<Institute> findAllInstitute();

    UserInfo findByUserId(String userId);

    void deleteUserInfo(String userInfoId);

    List<UserInfo> findByStatAndIns(String ins, int stat);
}

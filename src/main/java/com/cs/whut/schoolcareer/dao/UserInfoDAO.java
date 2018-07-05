package com.cs.whut.schoolcareer.dao;

import com.cs.whut.schoolcareer.model.UserInfo;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserInfoDAO extends CrudRepository<UserInfo, String> {

    List<UserInfo> findByInstituteId(String instituteId);

    List<UserInfo> findByWorkStat(int workStat);

    List<UserInfo> findByUserId(String userId);

    List<UserInfo> findByInstituteIdAndAndWorkStat(String ins, int stat);
}

package com.cs.whut.schoolcareer.service;

import com.cs.whut.schoolcareer.model.OtherInfo;

import java.util.List;

public interface OtherInfoService {

    void save(OtherInfo otherInfo);

    OtherInfo findById(String id);

    List<OtherInfo> findByUserId(String userId);

    List<OtherInfo> findByCity(String city);

    void remove(String id);

}

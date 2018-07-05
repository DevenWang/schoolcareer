package com.cs.whut.schoolcareer.service;

import com.cs.whut.schoolcareer.model.BaseInfo;

import java.util.List;

public interface BaseInfoService {

    void save(BaseInfo baseInfo);

    BaseInfo getbyId(String id);

    List<BaseInfo> getAll();

    void remove(String id);

}

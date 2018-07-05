package com.cs.whut.schoolcareer.dao;

import com.cs.whut.schoolcareer.model.OtherInfo;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface OtherInfoDAO extends CrudRepository<OtherInfo, String> {

    List<OtherInfo> findByUserId(String userId);

    List<OtherInfo> findByCity(String city);

}

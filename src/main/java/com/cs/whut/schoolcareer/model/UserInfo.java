package com.cs.whut.schoolcareer.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class UserInfo {

    @Id
    @Column(length = 20)
    private String userInfoId;

    @Column(length = 20)
    private String userId;

    @Column(length = 20)
    private String name;

    @Column(length = 20)
    private String stClass;

    @Column(length = 20)
    private String instituteId;

    @Column(length = 20)
    private String phone;

    private int workStat;

    private String company;

    public UserInfo(String userInfoId, String userId, String name, String stClass, String instituteId, String phone, int workStat) {
        this.userInfoId = userInfoId;
        this.userId = userId;
        this.name = name;
        this.stClass = stClass;
        this.instituteId = instituteId;
        this.phone = phone;
        this.workStat = workStat;
    }

    public UserInfo() {
    }

    public String getUserInfoId() {
        return userInfoId;
    }

    public void setUserInfoId(String userInfoId) {
        this.userInfoId = userInfoId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStClass() {
        return stClass;
    }

    public void setStClass(String stClass) {
        this.stClass = stClass;
    }

    public String getInstituteId() {
        return instituteId;
    }

    public void setInstituteId(String instituteId) {
        this.instituteId = instituteId;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public int getWorkStat() {
        return workStat;
    }

    public void setWorkStat(int workStat) {
        this.workStat = workStat;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }
}

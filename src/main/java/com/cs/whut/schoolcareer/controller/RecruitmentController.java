package com.cs.whut.schoolcareer.controller;

import com.cs.whut.schoolcareer.model.Recruitment;
import com.cs.whut.schoolcareer.model.User;
import com.cs.whut.schoolcareer.model.UserInfo;
import com.cs.whut.schoolcareer.service.UserInfoService;
import com.cs.whut.schoolcareer.util.MyUtil;
import com.cs.whut.schoolcareer.vo.VO;
import com.cs.whut.schoolcareer.service.RecruitmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController
public class RecruitmentController {

    private RecruitmentService recruitmentService;
    private UserInfoService userInfoService;

    @Autowired
    public RecruitmentController(RecruitmentService recruitmentService, UserInfoService userInfoService) {
        this.recruitmentService = recruitmentService;
        this.userInfoService = userInfoService;
    }

    @RequestMapping(value = "/fudaoyuan/addRecruitment", method = RequestMethod.POST)
    public VO addRecruitment(@RequestParam("endTime") String endTime, @RequestParam("company") String company,
                             @RequestParam("post") String post, @RequestParam("address") String address,
                             @RequestAttribute("userId") String userId
    ) {
        if (endTime == null || company == null || post == null || address == null || userId == null) {
            return VO.INVALID_TOKEN;
        }

        Date date = null;
        UserInfo userInfo = userInfoService.findByUserId(userId);
        DateFormat format1 = new SimpleDateFormat("yyyy-MM-dd");
        try {
            date = format1.parse(endTime);
        } catch (ParseException e) {
            e.printStackTrace();
        }

        Recruitment recruitment = new Recruitment(MyUtil.getStringID(), userId, company, post, address, date);
        recruitment.setInstituteId(userInfo.getInstituteId());

        recruitmentService.save(recruitment);

        return VO.SUCCESS;

    }

    @RequestMapping(value = "/oneRecruitment", method = RequestMethod.POST)
    public VO oneRecruitment(@RequestAttribute("userId") String userId, @RequestParam("id") String id) {

        if (id == null) {
            return VO.INVALID_TOKEN;
        }
        Recruitment recruitment = recruitmentService.getById(id);

        return new VO(recruitment);
    }

    @RequestMapping(value = "/fudaoyuan/oneRecruitment", method = RequestMethod.POST)
    public VO oneRecruitmentFu(@RequestAttribute("userId") String userId, @RequestParam("id") String id) {

        if (id == null) {
            return VO.INVALID_TOKEN;
        }
        Recruitment recruitment = recruitmentService.getById(id);

        return new VO(recruitment);
    }

    @RequestMapping(value = "/allRecruitment", method = RequestMethod.POST)
    public VO allRecruitment() {

        List<Recruitment> recruitments = recruitmentService.findAll();

        return new VO(recruitments);
    }

    @RequestMapping(value = "/allOutTimeRecruitment", method = RequestMethod.POST)
    public VO allOutTimeRecruitment(@RequestAttribute("userId") String userId) {

        UserInfo userInfo = userInfoService.findByUserId(userId);
        List<Recruitment> recruitments = recruitmentService.findAll();
        List<Recruitment> recruitmentList = new ArrayList<>();
        for (Recruitment recruitment : recruitments) {
            if (recruitment.getEndTime().before(new Date()) && recruitment.getInstituteId().equals(userInfo.getInstituteId())) {
                recruitmentList.add(recruitment);
            }
        }
        return new VO(recruitmentList);
    }

    @RequestMapping(value = "/instRecruitments", method = RequestMethod.POST)
    public VO recruitments(@RequestAttribute("userId") String userId) {

        UserInfo userInfo = userInfoService.findByUserId(userId);
        List<Recruitment> recruitments = recruitmentService.getByInstituteId(userInfo.getInstituteId());

        return new VO(recruitments);
    }

    @RequestMapping(value = "/notInstRecruitments", method = RequestMethod.POST)
    public VO notInstRec(@RequestAttribute("userId") String userId) {

        UserInfo userInfo = userInfoService.findByUserId(userId);
        List<Recruitment> recruitments = recruitmentService.findAll();
        List<Recruitment> recruitmentList = new ArrayList<>();
        for (Recruitment recruitment : recruitments) {
            if (!recruitment.getInstituteId().equals(userInfo.getInstituteId())) {
                recruitmentList.add(recruitment);
            }
        }
        return new VO(recruitmentList);
    }

    @RequestMapping(value = "/company", method = RequestMethod.POST)
    public VO company(@RequestAttribute("userId") String userId, @RequestParam("company") String company) {

        if (company == null) {
            return VO.INVALID_PARAMS;
        }
        List<Recruitment> recruitments = recruitmentService.findByCompany(company);

        return new VO(recruitments);
    }

    @RequestMapping(value = "/post", method = RequestMethod.POST)
    public VO post(@RequestAttribute("userId") String userId, @RequestParam("post") String post) {

        if (post == null) {
            return VO.INVALID_PARAMS;
        }
        List<Recruitment> recruitments = recruitmentService.findByPost(post);

        return new VO(recruitments);
    }

    @RequestMapping(value = "/admin/deleteRecruitment", method = RequestMethod.POST)
    public VO deleteRecruitment(@RequestAttribute("userId") String userId, @RequestBody Map<String, Object> params) {

        String recruitmentId = params.get("recruitmentId").toString();
        if (recruitmentId == null) {
            return VO.INVALID_PARAMS;
        }
        recruitmentService.remove(recruitmentId);
        return VO.SUCCESS;
    }

    @RequestMapping(value = "/fudaoyuan/deleteRecruitment", method = RequestMethod.POST)
    public VO deleteRecruitmentByFu(@RequestAttribute("userId") String userId, @RequestBody Map<String, Object> params) {

        String recruitmentId = params.get("recruitmentId").toString();
        if (recruitmentId == null) {
            return VO.INVALID_PARAMS;
        }
        recruitmentService.remove(recruitmentId);
        return VO.SUCCESS;
    }

}

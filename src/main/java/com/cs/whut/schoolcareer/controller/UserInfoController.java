package com.cs.whut.schoolcareer.controller;

import com.cs.whut.schoolcareer.model.Institute;
import com.cs.whut.schoolcareer.model.User;
import com.cs.whut.schoolcareer.model.UserInfo;
import com.cs.whut.schoolcareer.service.UserInfoService;
import com.cs.whut.schoolcareer.service.UserService;
import com.cs.whut.schoolcareer.vo.VO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
public class UserInfoController {

    @Autowired
    private UserInfoService userInfoService;

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/addUserInfo", method = RequestMethod.POST)
    public VO addUserInfo(@RequestBody Map<String,Object> params, @RequestAttribute("userId") String userId) {

        String userInfoId = params.get("userInfoId").toString();
        String name = params.get("name").toString();

        String phone = params.get("phone").toString();
        String instituteId = params.get("instituteId").toString();


        if (userInfoId == null || name == null || phone == null || userId == null || instituteId == null) {
            return VO.INVALID_PARAMS;
        }
        User user = userService.getUserById(userId);

        if (user.getType().equals("company")) {
            UserInfo userInfo = new UserInfo(userInfoId, userId, name, "", instituteId, phone, -1);
            userInfoService.saveUserInfo(userInfo);
            return VO.SUCCESS;
        }

        String stClass = params.get("stClass").toString();
        int workStat = Integer.parseInt(params.get("workStat").toString());
        String company = params.get("company").toString();
        if (stClass == null || workStat > 5 || workStat < 0) {
            return VO.INVALID_PARAMS;
        }

        if (workStat > 1 && (company == null || company.equals(""))) {
            return VO.INVALID_PARAMS;
        }
        UserInfo userInfo = new UserInfo(userInfoId, userId, name, stClass, instituteId, phone, workStat);

        if (workStat > 1) {
            userInfo.setCompany(company);
        }

        userInfoService.saveUserInfo(userInfo);
        return VO.SUCCESS;
    }

    @RequestMapping(value = "/findByInst", method = RequestMethod.POST)
    public VO findByInst(@RequestParam("instituteId") String instituteId,
                         @RequestAttribute("userId") String userId) {

        if (userId == null || instituteId == null) {
            return VO.INVALID_PARAMS;
        }

        List<UserInfo> userInfos = userInfoService.findByInstitute(instituteId);
        return new VO(userInfos);
    }

    @RequestMapping(value = "/findByWorkStat", method = RequestMethod.POST)
    public VO findByWorkStat(@RequestParam("workStat") int workStat,
                             @RequestAttribute("userId") String userId) {

        if (userId == null) {
            return VO.INVALID_PARAMS;
        }

        List<UserInfo> userInfos = userInfoService.findByWorkStat(workStat);
        return new VO(userInfos);
    }

    @RequestMapping(value = "/institute_get", method = RequestMethod.GET)
    public VO<List<Institute>> getInstitute() {

        List<Institute> institutes = userInfoService.findAllInstitute();

        return new VO<>(institutes);
    }

    @RequestMapping(value = "/findUserInfoById", method = RequestMethod.POST)
    public VO findByUserId(@RequestAttribute("userId") String userId) {
        UserInfo userInfo = userInfoService.findByUserId(userId);
        return new VO(userInfo);
    }

    @RequestMapping(value = "/fudaoyuan/findUserInfoById", method = RequestMethod.POST)
    public VO findByUserId1(@RequestAttribute("userId") String userId) {
        UserInfo userInfo = userInfoService.findByUserId(userId);
        return new VO(userInfo);
    }

    @RequestMapping(value = "/admin/findAllFu", method = RequestMethod.POST)
    public VO findAllFu(@RequestAttribute("userId") String userId) {
        List<User> users = userService.findAllByType("company");
        List<UserInfo> userInfos = new ArrayList<>();
        // 建议采用数据库来实现，现有方式多次访问网络
        for (User user : users) {
            UserInfo userInfo = userInfoService.findByUserId(user.getUserId());
            if (userInfo != null) {
                userInfos.add(userInfo);
            }

        }
        return new VO(userInfos);
    }

    @RequestMapping(value = "/admin/findAllStu", method = RequestMethod.POST)
    public VO findAllStu(@RequestAttribute("userId") String userId) {
        List<User> users = userService.findAllByType("applicant");
        List<UserInfo> userInfos = new ArrayList<>();
        // 建议采用数据库来实现，现有方式多次访问网络
        for (User user : users) {
            UserInfo userInfo = userInfoService.findByUserId(user.getUserId());
            if (userInfo != null) {
                userInfos.add(userInfo);
            }

        }
        return new VO(userInfos);
    }

    @RequestMapping(value = "/admin/delUser", method = RequestMethod.POST)
    public VO deleteUser(@RequestBody Map<String,Object> params) {

        String userId = params.get("userId").toString();
        if (userId == null) {
            return VO.INVALID_PARAMS;
        }
        userInfoService.deleteUserInfo(userService.getUserById(userId).getUserInfoId());
        userService.deleteUser(userId);
        return VO.SUCCESS;
    }

    @RequestMapping(value = "/fudaoyuan/workStat", method = RequestMethod.POST)
    public VO fundWorkStat(@RequestAttribute("userId") String userId, @RequestBody Map<String,Object> params) {

        int stat = Integer.parseInt(params.get("stat").toString());
        UserInfo userInfo = userInfoService.findByUserId(userId);
        if (stat == 0) {
            List<UserInfo> userInfos = userInfoService.findByStatAndIns(userInfo.getInstituteId(), 0);
            List<UserInfo> userInfos1 = userInfoService.findByStatAndIns(userInfo.getInstituteId(), 1);
            userInfos.addAll(userInfos1);
            return new VO(userInfos);
        } else if (stat == 2) {
            List<UserInfo> userInfos = userInfoService.findByStatAndIns(userInfo.getInstituteId(), 2);
            return new VO(userInfos);
        } else if (stat == 3) {
            List<UserInfo> userInfos = userInfoService.findByStatAndIns(userInfo.getInstituteId(), 3);
            List<UserInfo> userInfos1 = userInfoService.findByStatAndIns(userInfo.getInstituteId(), 4);
            userInfos.addAll(userInfos1);
            return new VO(userInfos);
        } else if (stat == 5) {
            List<UserInfo> userInfos = userInfoService.findByStatAndIns(userInfo.getInstituteId(), 5);
            return new VO(userInfos);
        }

        return new VO();
    }

    @RequestMapping(value = "/userInfo", method = RequestMethod.POST)
    public VO findUserInfo(@RequestAttribute("userId") String userId) {
        UserInfo userInfos = userInfoService.findByUserId(userId);
        return new VO(userInfos);
    }

}

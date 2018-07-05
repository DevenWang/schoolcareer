package com.cs.whut.schoolcareer.controller;

import com.cs.whut.schoolcareer.dto.CompanyApplyDTO;
import com.cs.whut.schoolcareer.dto.MyApplyDTO;
import com.cs.whut.schoolcareer.model.Apply;
import com.cs.whut.schoolcareer.model.BaseInfo;
import com.cs.whut.schoolcareer.model.Recruitment;
import com.cs.whut.schoolcareer.service.ApplyService;
import com.cs.whut.schoolcareer.util.MyUtil;
import com.cs.whut.schoolcareer.vo.VO;
import com.cs.whut.schoolcareer.service.BaseInfoService;
import com.cs.whut.schoolcareer.service.RecruitmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController
public class ApplyController {

    private ApplyService applyService;
    private RecruitmentService recruitmentService;
    private BaseInfoService baseInfoService;

    @Autowired
    public ApplyController(ApplyService applyService, RecruitmentService recruitmentService, BaseInfoService baseInfoService) {
        this.applyService = applyService;
        this.recruitmentService = recruitmentService;
        this.baseInfoService = baseInfoService;
    }

    @RequestMapping(value = "/addApply", method = RequestMethod.POST)
    public VO addApply(@RequestBody Map<String,Object> params, @RequestAttribute("userId") String userId) {
        String workId = params.get("workId").toString();
        if (workId == null || userId == null) {
            return VO.INVALID_TOKEN;
        }

        Apply apply = new Apply(MyUtil.getStringID(), userId, workId, new Date());

        applyService.save(apply);

        return VO.SUCCESS;

    }

    @RequestMapping(value = "/oneApply", method = RequestMethod.POST)
    public VO oneApply(@RequestAttribute("userId") String userId, @RequestParam("id") String id) {

        if (id == null) {
            return VO.INVALID_TOKEN;
        }
        Apply apply = applyService.findById(id);

        return new VO(apply);
    }

    @RequestMapping(value = "/company/allApply", method = RequestMethod.POST)
    public VO allApply(@RequestAttribute("userId") String userId) {

        List<Apply> applies = applyService.findAll();

        return new VO(applies);
    }

    @RequestMapping(value = "/userApply", method = RequestMethod.POST)
    public VO userApply(@RequestAttribute("userId") String userId) {

        List<Apply> applies = applyService.findByUserId(userId);
        List<Recruitment> recruitmentList = new ArrayList<>();
        for (Apply apply : applies) {
            recruitmentList.add(recruitmentService.getById(apply.getWorkId()));
        }

        return new VO(recruitmentList);
    }

    @RequestMapping(value = "/companyApply", method = RequestMethod.POST)
    public VO company(@RequestAttribute("userId") String userId) {

        if (userId == null) {
            return VO.INVALID_TOKEN;
        }

        List<CompanyApplyDTO> dtos = new ArrayList<>();

        List<Recruitment> recruitments = recruitmentService.getByInstituteId(userId);
        for (Recruitment r : recruitments) {
            List<Apply> applies = applyService.findByWorkId(r.getRecruitmentId());
            for (Apply a : applies) {
                BaseInfo baseInfo = baseInfoService.getbyId(a.getUserId());
                if (baseInfo != null) {
                    CompanyApplyDTO dto = new CompanyApplyDTO(a.getUserId(), baseInfo.getName(), baseInfo.getGender(), baseInfo.getPhone(), baseInfo.getEmail(), r.getPost(), a.getTime());
                    dtos.add(dto);
                } else {
                    CompanyApplyDTO dto = new CompanyApplyDTO(a.getUserId(), "未填", "未填", "未填", "未填", r.getPost(), a.getTime());
                    dtos.add(dto);
                }
            }
        }
        return new VO(dtos);
    }

    @RequestMapping(value = "/deleteApply", method = RequestMethod.POST)
    public VO deleteApply(@RequestAttribute("userId") String userId, @RequestBody Map<String,Object> params) {
        String applyId = params.get("applyId").toString();
        if (applyId == null) {
            return VO.INVALID_TOKEN;
        }
        List<Apply> apply = applyService.findByWorkId(applyId);
        for (Apply apply1 : apply) {
            if (apply1 != null) {
                applyService.remove(apply1.getApplyId());
            }
        }
        return VO.SUCCESS;
    }

}

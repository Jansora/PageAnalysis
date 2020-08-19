package com.jansora.analysis.controller;

import com.jansora.analysis.dto.Result;
import com.jansora.analysis.entity.Template;
import com.jansora.analysis.service.TemplateService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;


/*
 * 〈一句话功能简述〉<br>
 * @file TemplateController.java
 * @description TemplateController
 *
 * @author Jansora
 * @date 2020-08-19 09:55
 * @see [相关类/方法]（可选）
 * @since [产品/模块版本] （可选）
 */


@RestController
@RequestMapping("/")
public class TemplateController extends BaseController {

    @Resource(type = TemplateService.class)
    TemplateService templateService;

    @RequestMapping("find")
    public Result find(Template template){
        return templateService.find(template);
    }
    @RequestMapping("findOne")
    public Result findOne(Template template){
        return templateService.findOne(template);
    }
    @RequestMapping("insert")
    public Result insert(Template template){
        return templateService.insert(template);
    }
    @RequestMapping("update")
    public Result update(Template template){
        return templateService.update(template);
    }
    @RequestMapping("delete")
    public Result delete(Template template){
        return templateService.delete(template);
    }
}
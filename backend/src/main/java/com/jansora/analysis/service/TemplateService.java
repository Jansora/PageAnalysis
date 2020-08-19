package com.jansora.analysis.service;

import com.jansora.analysis.dao.TemplateDao;
import com.jansora.analysis.dto.Result;
import com.jansora.analysis.entity.Template;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/*
 * 〈一句话功能简述〉<br>
 * @file TemplateService.java
 * @description TemplateService
 *
 * @author Jansora
 * @date 2020-08-19 09:45
 * @see [相关类/方法]（可选）
 * @since [产品/模块版本] （可选）
 */
@Service
public class TemplateService extends BaseService {

    @Resource(type = TemplateDao.class)
    TemplateDao templateDao;

    public int count(Template template){
        return templateDao.count(template);
    }

    public Result find(Template template){
        return SUCCESSFUL(templateDao.find(template));
    }

    public Result findOne(Template template){
        return SUCCESSFUL(templateDao.findOne(template));
    }

    public Result insert(Template template){
        templateDao.insert(template);
        return SUCCESSFUL();
    }

    public Result update(Template template){
        templateDao.update(template);
        return SUCCESSFUL();
    }

    public Result delete(Template template){
        templateDao.delete(template);
        return SUCCESSFUL();
    }
}
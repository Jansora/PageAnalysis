package com.jansora.analysis.controller;

import com.jansora.analysis.dto.Result;
import com.jansora.analysis.entity.Template;
import com.jansora.analysis.service.TemplateService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.time.format.DateTimeFormatter;


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
@RequestMapping("log")
public class LoggerController extends BaseController {

    Logger logger = LoggerFactory.getLogger(LoggerController.class);

    @RequestMapping("access")
    public Result find(){
        String host = request.getRemoteAddr();
        String url = request.getRequestURI();
        String date = java.time.LocalDateTime.now().toString();
        String method = request.getMethod();
        logger.info("access.log");
        return SUCCESSFUL();
    }

}
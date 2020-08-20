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
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.Locale;


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
    static SimpleDateFormat sourceFormat = new SimpleDateFormat("dd/MMM/yyyy:hh:mm:ss Z", Locale.US);
    static SimpleDateFormat outputFormat = new SimpleDateFormat("yyyy-mm-dd hh:mm:ss");

    @RequestMapping("access")
    public Result access(String record){
        String host = request.getRemoteAddr();
        String url = request.getRequestURI();
        String date = java.time.LocalDateTime.now().toString();
        String method = request.getMethod();
        logger.info("access.log");

        return SUCCESSFUL();
    }
    private String formatIP(String record) {
        return record.split(" ")[0];
    }


    /*
    source: "dd/MMM/yyyy:hh:mm:ss Z"
    output: "yyyy-mm-dd hh:mm:ss"
     */
    private String getDate(String record) throws ParseException {
        String source = record.split("\\[")[1].split("]")[0];
        return outputFormat.format(sourceFormat.parse(source));
    }
    // GET, PUT, POST...
    private String getMethod(String record) {
        return record.split("\"")[1].split(" ")[0];
    }
    // GET, PUT, POST...
    private String getPath(String record) {
        return record.split("\"")[1].split(" ")[1];
    }
    // HTTP/1.1
    private String getHttpProtocol(String record) {
        return record.split("\"")[1].split(" ")[2];
    }

    // 200, 404,...
    private String getHttpStatusCode(String record) {
        return record.split("\"")[2].split(" ")[1];
    }
    // GET, PUT, POST...
    private String getRefer(String record) {
        return record.split("\"")[3].split("\"")[0];
    }
    // HTTP/1.1
    private String getHeader(String record) {
        return record.split("\"")[5];
    }

}
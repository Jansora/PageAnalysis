package com.jansora.analysis.controller;

import com.jansora.analysis.utils.ResultUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
public class BaseController extends ResultUtils {


    @Resource(type = HttpServletRequest.class)
    protected HttpServletRequest request;

    @Resource(type = HttpServletResponse.class)
    protected HttpServletResponse response;


}

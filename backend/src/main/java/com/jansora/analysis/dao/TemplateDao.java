package com.jansora.analysis.dao;

import com.jansora.analysis.entity.Template;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public interface TemplateDao {

    int count(Template template);

    List<Template> find(Template template);

    Template findOne(Template template);

    void insert(Template template);

    void update(Template template);

    void delete(Template template);



}

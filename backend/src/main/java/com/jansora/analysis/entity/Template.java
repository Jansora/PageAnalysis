package com.jansora.analysis.entity;

import lombok.Data;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

/*
 * 〈一句话功能简述〉<br>
 * @file Template.java
 * @description Template
 *
 * @author Jansora
 * @date 2020-08-19 09:43
 * @see [相关类/方法]（可选）
 * @since [产品/模块版本] （可选）
 */

@Data
@ToString
@SuperBuilder
public class Template extends BaseEntity {

    private String template;
}
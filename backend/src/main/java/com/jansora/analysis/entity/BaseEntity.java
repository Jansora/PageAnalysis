package com.jansora.analysis.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

import java.util.Date;


@EqualsAndHashCode(callSuper = true)
@Data
@ToString
@SuperBuilder
public class BaseEntity extends DBEntity {

    public enum ORDER_BY {
        id, create_at, update_at,
    }

    protected Long id;

    @JsonFormat(timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
    protected Date createAt;

    @JsonFormat(timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
    protected Date updateAt;


}

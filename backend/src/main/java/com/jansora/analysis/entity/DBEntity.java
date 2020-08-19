package com.jansora.analysis.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

import java.io.Serializable;


@Data
@ToString
@SuperBuilder
public class DBEntity implements Serializable {

    public enum SORT {
        DESC, ASC,
    }

    @JsonIgnore
    protected String orderBy;
    @JsonIgnore
    protected String sort;
    @JsonIgnore
    protected Long limit;
    @JsonIgnore
    protected Long offset;
}

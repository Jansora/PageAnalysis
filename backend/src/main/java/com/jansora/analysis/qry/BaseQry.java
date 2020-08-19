package com.jansora.analysis.qry;

import lombok.Data;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

import java.io.Serializable;

@Data
@ToString
@SuperBuilder
public class BaseQry implements Serializable {

    protected Long id;

    protected String orderBy;

    protected String sort;

    protected Long limit;

    protected Long offset;
}

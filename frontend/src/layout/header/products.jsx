/*
* @file products.jsx
* @description〈一句话功能简述〉
* @author jansora
* @date 2019-12-17 11:42
*/
import React from 'react';
import {Dropdown, Icon} from "semantic-ui-react";
import {Link} from "react-router-dom";
import {StyledProductsItem, StyledProductsWrapper} from "../../styled/header";

const Products = () => {
  return (

    <Dropdown
      trigger={
        <Link to={'/'}><Icon name="home"/></Link>
      }
      icon={null}
      pointing='top left'
    >
      <Dropdown.Menu>
        <StyledProductsWrapper>

          <StyledProductsItem>
            <Link to={'/post'}><Icon name="blogger"/></Link>
            <span>博客</span>
          </StyledProductsItem>
          <StyledProductsItem>
            <Link to={'/topic'}><Icon name="folder open"/></Link>
            <span>专栏</span>
          </StyledProductsItem>
          <StyledProductsItem>
            <Link to={'/project'}><Icon name="paper plane"/></Link>
            <span>项目</span>
          </StyledProductsItem>
          <StyledProductsItem>
            <Link to={'/'}><Icon name="configure"/></Link>
            <span>联系我</span>
          </StyledProductsItem>
          <StyledProductsItem>
            <Link to={'/feedback'}><Icon name="comment"/></Link>
            <span>留言板（反馈）</span>
          </StyledProductsItem>
        </StyledProductsWrapper>
      </Dropdown.Menu>
    </Dropdown>
  )
}
export default Products;

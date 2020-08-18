/*
* @file index.jsx
* @author jansora
* @date 2020/2/20
*/


import React, {useEffect} from "react";
import {Route} from 'react-router-dom'
import localRouter from "./pages";
import styled from "styled-components";
import { CSSTransition } from 'react-transition-group'
import Scroll from "./scroll";
import IconBootstrap from "./IconBootstrap";
const Wrapper = styled.main`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;  
    background-image: url(${props => props.background});
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    >div>footer {
    position: fixed;
    text-align: center;
    
    bottom: 0;
    width: 100%;
    padding: 10px 0;
    a {
    color: white;
      }
}
`
const backgrounds = [
  "https://cdn.jansora.com/img/bootstrap/home.jpg",
  "https://cdn.jansora.com/img/bootstrap/blog.jpg",
  "https://cdn.jansora.com/img/bootstrap/topic.jpg",
  "https://cdn.jansora.com/img/bootstrap/project.jpg",
  "https://cdn.jansora.com/img/bootstrap/easycode.jpg",
  "https://oss.jansora.com/img/bootstrap/topic.jpg",

]

const ImagePreLoad = styled.img`
  display: none;
`
const Bootstrap = () => {

    return (
      <Wrapper>
        <IconBootstrap />

        <Scroll/>
        {
          backgrounds.map(img => <ImagePreLoad src={img}/>)
        }
      {
          localRouter.routes.map((r, index) =>
            <Route key={index} path={r.path} exact={r.exact}>
                {
                    ({match}) => {
                        return <CSSTransition
                          in={match != null}
                          timeout={1000}
                          classNames="vertical"
                          unmountOnExit
                        >
                            <Wrapper className="vertical" background={backgrounds[index%5]}>
                                <r.component/>
                            </Wrapper>
                        </CSSTransition>
                    }
                }
            </Route>
          )
      }
      </Wrapper>
    )
}

export default Bootstrap;

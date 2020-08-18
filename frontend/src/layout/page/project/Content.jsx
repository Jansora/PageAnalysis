/*
* @file project.jsx
* @author jansora
* @date 2020/2/11
*/


import React, {useState} from "react";
import {QueryProject} from "../../../request/project";
import SetTitle from "../../../components/hooks/SetTitle";
import GetUser from "../../../components/hooks/GetUser";
import styled from "styled-components";
import {Loader} from "semantic-ui-react";
import RightMenu from "../../../components/project/RightMenu";


const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 50px);
  margin: 0 auto;
  overflow: hidden;
  > i {
    position: fixed;
    cursor: pointer;
    right: 10px;
    top: 60px;
  }
  iframe {
    width: 100%;
    height: calc(100% - 50px);
    // margin-top: 25px;
    overflow:hidden;
  }
`
const MenuWrapper = styled.div`
  position: fixed;
  right: 10px;
  top: 50px;
  z-index: 2;
  line-height: 40px;
`


const Content = (props) => {

    const {resource} = props.match.params;

    const [loading, setLoading] = useState(true)

    const [project, setProject] = QueryProject(resource)

    const user = GetUser();

    const isOwner = user && project && user.id === project.ownerId

    SetTitle(project.title)

    const menus = <MenuWrapper >
        <RightMenu project={project} setProject={setProject} menus={['edit', 'delete']}/>
    </MenuWrapper>

    return (
        <Wrapper>
            {
                isOwner && menus
            }

            <Loader active={loading} content="加载中" />

            <iframe onLoad={() => setLoading(false)} src={project.iframe} allowFullScreen={true} frameBorder={0} scrolling="no"/>
        </Wrapper>

    )
}

export default Content;

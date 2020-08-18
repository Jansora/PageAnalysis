/*
* @file Playground.jsx
* @description〈一句话功能简述〉
* @author Jansora
* @date 2020-08-02 16:25
*/
import React from 'react';

import Banner from "../Banner";
import {Button} from "semantic-ui-react";
import {Link} from "react-router-dom";

const Playground = () => {
  return (
    <div>
      <Banner top={"30vh"} left={"20vw"}>
        <h1>代码演练场</h1>
        <p>快速提升编程技能</p>
        <footer>
          <Button basic inverted as={Link} to={"/playground"}>进入演习场</Button>
        </footer>
      </Banner>
        <footer><a target='_blank' rel='noopener noreferrer' href="http://www.beian.miit.gov.cn/state/outPortal/loginPortal.action">豫ICP备17022883号</a>	</footer>

    </div>
  )
}
export default Playground;

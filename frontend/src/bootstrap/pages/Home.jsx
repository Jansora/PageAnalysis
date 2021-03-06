/*
* @file Home.jsx
* @description〈一句话功能简述〉
* @author Jansora
* @date 2020-04-15 15:25
*/
import React from 'react';

import Banner from "../Banner";
import {Button} from "semantic-ui-react";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Banner top={"30vh"} left={"20vw"}>
        <h1>张洋源</h1>
        <p>计算机爱好者，热爱编程艺术，热爱数据科学</p>
        <footer>
          <Button basic inverted as={Link} to={"/post"} icon='home' content="查看博客"/>
        </footer>
      </Banner>

    </div>
  )
}
export default Home;

/*
* @file link.jsx
* @description〈一句话功能简述〉
* @author jansora
* @date 2019-04-08 11:36
*/
import React from 'react';
import {Dropdown, Icon} from "semantic-ui-react";

const Concat = () => {



  return (
    <Dropdown
      trigger={
        <Icon
          name='at'
          title='联系'
          style={{margin: 0}}
        />
      }
      icon={null}
      pointing='top right'
    >
      <Dropdown.Menu>

        <Dropdown.Item as="a" target="_blank" href={`https://cdn.zhangyangyuan.com/homepage/wechat.jpg`}  icon='wechat'  text='微信' />
        <Dropdown.Item as="a" target="_blank" href={`#`}  icon='call'  text='199******75' />
        <Dropdown.Item as="a" target="_blank" href={`mailto:me@zhangyangyuan.com`}  icon='mail'  text='邮箱' />
        <Dropdown.Item as="a" target="_blank" href={`https://github.com/Jansora`}  icon='github'  text='Github' />

      </Dropdown.Menu>
    </Dropdown>
  )
}
export default Concat;

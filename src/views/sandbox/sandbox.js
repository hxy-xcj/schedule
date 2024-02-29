/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-03-05 12:44:58
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-01-25 17:23:57
 * @FilePath: \project\src\views\sandbox\sandbox.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'

import { Layout } from 'antd';

import SideBar from '../../components/sandbox/SideBar'
import TopHeader from '../../components/sandbox/Topheader'
import Router from '../../components/sandbox/Router'

export default function Sandbox() {
  return (
    <Layout hasSider>
    {/*侧边栏*/}
      <SideBar/>
      <Layout
        className="site-layout"
        style={{
          marginLeft: 228,
        }}
      >
      {/*顶部导航栏*/}
        <TopHeader/>
        {/*内容*/}
        <div> 
          <Router/>
        </div>
      </Layout>
    </Layout>
  );
}
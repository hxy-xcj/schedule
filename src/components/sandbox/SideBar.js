/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-03-05 13:11:39
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-02-01 15:00:25
 * @FilePath: \project\src\components\sandbox\SideBar.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import {withRouter} from 'react-router-dom'
import {
  createFromIconfontCN
} from '@ant-design/icons';
import { Layout, Menu, ConfigProvider} from 'antd';
import './sandbar.css'
import {item1,item2,item3} from './data.js'


const { Sider } = Layout;
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_3955032_lavp6nvzku.js',
});

function SideBar(props){
  const selectKey = props.location.pathname!=='/'?props.location.pathname:'/home'
  console.log(window.sessionStorage.getItem("user_type")==='1')
  return (
    <ConfigProvider
      theme={{
      token: {
        colorBgContainer:'#ff5500',
        colorPrimary: 'white',
        colorPrimaryBg:'#ff8048',
        colorText:'white',
        borderRadius:'0px',
        padding :'24px',
        marginXXS:'0px',
      },
    }}
  >
    <Sider 
      width='228px'
      // #ff5500
      style={{
        backgroundColor:'#ff5500',
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        padding :0
      }}  
    >
      <div 
        style={{ 
          display: "flex", 
          height: "100%", 
          flexDirection: "column" 
        }}
      >
        <IconFont 
          style={{
            fontSize:'78px',
            margin:'56px 0px 36px 72px'
            }} 
          type="icon-timetable" 
          />
        <div style={{ flex: 1, overflow: "auto" }}>
          <Menu 
            mode="inline"
            style={{fontSize:'16px',width:'228px'}}
            defaultSelectedKeys={selectKey} 
            defaultOpenKeys={['/organization-manage','/center']}
            items={
              window.sessionStorage.getItem("user_type")==='1'?
                item1:window.sessionStorage.getItem("user_type")==='2'?item2:item3}
            onClick={(e)=>{
              props.history.push(e.key)
              console.log(e.key)
            }}
          />
       </div>
      </div>
    </Sider>
  </ConfigProvider>
	)
}
export default withRouter(SideBar)
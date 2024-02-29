/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-03-05 13:33:46
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-01-25 21:35:04
 * @FilePath: \project\src\components\sandbox\Topheader.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import { 
	Layout,
 	theme,
 	Popover
} from 'antd';
import { 
  createFromIconfontCN
} from '@ant-design/icons';
import {withRouter} from 'react-router-dom'
const { Header } = Layout;

function Topheader(props){
  const {token: { colorBgContainer }} = theme.useToken();
  const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/c/font_3955032_n678g0awo8f.js',
  })
  const content = (
    <div>
      <div className="popover-content-1">
        {window.sessionStorage.getItem('username')}
      </div>
      <div 
        className="popover-content-2" 
        onClick={()=>{
          window.sessionStorage.clear()
          props.history.push('/')
        }}>退出</div>
    </div>
  );

	return (
		<Header
      style={{
        padding: 0,
        height:'72px',
        background: colorBgContainer,
      }}
    >
      <Popover 
        content={content}
        overlayStyle={{width:'108px'}}
        overlayInnerStyle={{
          textAlign :'center',
          height:'60px',
          // lineHeight :'18px'
        }}
      >
        <IconFont 
          style={{
            fontSize:'55px',
            float:'right',
            margin:'8px 30px 0px 0px'
          }} 
          type="icon-touxiang" 
        />
      </Popover>
    </Header>
	)
}
export default withRouter(Topheader)
/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-03-16 19:37:28
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-02-04 16:10:33
 * @FilePath: \project\src\components\home\panel3.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import { Progress } from 'antd';
export default function Notices(){
	return(
	<div className="panel3 box">
	  <Progress 
	  	style={{marginLeft:'72px',marginTop:'40px'}}
	  	size={[176,176]}
	  	type="circle" 
	  	strokeColor="white"
	  	trailColor="#ff9f58"
	  	percent={50} 
	  />
	  <div className="panel3_title">本周上班时长</div>

	</div>
	)
}
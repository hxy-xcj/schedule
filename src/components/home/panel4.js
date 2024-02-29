/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-03-16 20:09:36
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-02-04 17:14:10
 * @FilePath: \project\src\components\home\panel4.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React,{useState,useEffect} from 'react'
// import {createFromIconfontCN,} from '@ant-design/icons';
import { Line } from '@ant-design/plots';
export default function Notices(){
	// const IconFont = createFromIconfontCN({
  	// 	scriptUrl: '//at.alicdn.com/t/c/font_3955032_x46lbr50mgs.js',
	// });
	const [data, setData] = useState([]);
  
	useEffect(() => {
	  asyncFetch();
	}, []);
  
	const asyncFetch = () => {
	  fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
		.then((response) => response.json())
		.then((json) => setData(json))
		.catch((error) => {
		  console.log('fetch data failed', error);
		});
	};
	const config = {
	  data,
	  padding: 'auto',
	  xField: 'Date',
	  yField: 'scales',
	  xAxis: {
		// type: 'timeCat',
		tickCount: 5,
	  },
	  smooth: true,
	};
  
	return(
	<div className="panel4 box">
		<Line {...config} />
	</div>
	)
}
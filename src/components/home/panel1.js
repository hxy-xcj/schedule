import React from 'react'
import { Progress } from 'antd';
import {createFromIconfontCN,} from '@ant-design/icons';
export default function Notices(){
	const IconFont = createFromIconfontCN({
  		scriptUrl: '//at.alicdn.com/t/c/font_3955032_x46lbr50mgs.js',
});
	return(
	<div className="panel1 box">
	  <h2 className="notices_header">
	  	本周
	  	<IconFont style={{float:'right',fontSize:'34px',margin:'0px 0px 0px 13px'}} type="icon-xiala" />
	  </h2>
	  <div className="panel_content">
	  	<div className="data">
	  		<div style={{float:'left'}}>16 H</div>
	  		<div style={{float:'left',marginLeft:'36px'}}>24 H</div>
	  	</div>
	  	<div >
	  		<Progress 
	  		  style={{float:'left',width:'46%'}} 
	  		  showInfo={false}
	  		  percent={100} 
	  		  strokeColor="green" 
	  		  size="small" 
	  		/>
	  		<Progress 
	  		  style={{float:'left',width:'46%'}} 
	  		  showInfo={false}
	  		  percent={50} 
	  		  strokeColor="red"
	  		  size="small" 
	  		/>
	  	</div>

	  </div>
	</div>
	)
}
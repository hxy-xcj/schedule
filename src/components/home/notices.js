import React from 'react'
import {createFromIconfontCN,} from '@ant-design/icons';
export default function Notices(){
	const IconFont = createFromIconfontCN({
  		scriptUrl: '//at.alicdn.com/t/c/font_3955032_x46lbr50mgs.js',
});
	return(
	<div className="notices box">
	  <h2 className="notices_header">
	  	公告栏
	  	<IconFont 
	  	style={{
	  		float:'right',
	  		fontSize:'34px',
	  		margin:'0px 0px 0px 13px'
	  	}} type="icon-xiala" />
	  </h2>
	  <div className="panel_content">
	  	<div className="circle"></div>
	  	<div style={{fontSize:'16px'}}>
	  	本周将于20xx年x月x日开展为期xx天的xx活动，希望员工积极参加
	  	</div>
	  </div>
	</div>
	)
}
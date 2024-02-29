import React from 'react'
import Schedule from '../../../components/Schedule/schedule.js'
import {
  Breadcrumb,
} from 'antd'
export default function ScheduleMine(){
	return <>
	<Breadcrumb
      className="bread"
      items={[
        {title: '个人中心'},
        {title: '个人排班表'},
      ]}
    />
      <Schedule />
    </>

}
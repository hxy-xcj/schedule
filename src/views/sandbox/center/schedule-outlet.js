import React from 'react'
import {
  Breadcrumb,
} from 'antd'
import Schedule from '../../../components/Schedule/schedule.js'

export default function ScheduleOutLet(){
	return <>
	<Breadcrumb
      className="bread"
      items={[
        {title: '个人中心'},
        {title: '门店排班表'},
      ]}
    />
	<Schedule/>
	</>

}
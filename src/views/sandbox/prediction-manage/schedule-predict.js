import React from 'react'
import {
  Breadcrumb,
  Popconfirm,
  Button,
  DatePicker,
  Cascader,
  message,

} from 'antd'
import Schedule from '../../../components/Schedule/schedule.js'

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  }
  ]

export default function SchedulePredict(){
	return <>
	<Breadcrumb
      className="bread"
      items={[
        {title: '智能预测管理'},
        {title: '智能排班'},
      ]}
    />
    <div style={{margin:'26px 0px 0px 20px'}}>
      <div>
        <DatePicker 
          // onChange={onChange} 
          picker="week" />
        <DatePicker 
          // onChange={onChange} 
          picker="month" />
        <Cascader
          options={options}
          // onChange={onChange}
          maxTagCount="responsive"
          style={{width: '230px'}}
        />
        <Popconfirm
          title="是否需要生成新的排班表?"
          // onConfirm={confirm}
          // onCancel={cancel}
          okText="是"
          cancelText="否"
  	    >
          <Button type="primary" style={{backgroundColor:'#ff5500'}}>生成智能排班表</Button>
        </Popconfirm>
      </div>
      <Schedule/>
    

    </div>
	</>
}
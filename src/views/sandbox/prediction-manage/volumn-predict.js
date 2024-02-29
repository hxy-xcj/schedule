import React from 'react'
import {
  Breadcrumb,
  DatePicker,
  Cascader,
  Button,
  Table,
  ConfigProvider,
} from 'antd'
import {
  createFromIconfontCN,
} from '@ant-design/icons';

const dataSource = [
{
	id:1,
	outletid:1,
	date:'2021-01-02',
	beginTime:'8:00',
	endTime:'8:30',
	predict:'0'
},
{
	id:2,
	outletid:1,
	date:'2021-01-02',
	beginTime:'8:30',
	endTime:'9:00',
	predict:'0.3'

}
]

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
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const columns = [
  {
    title: '门店ID',
    dataIndex: 'outletid',
    key: 'outletid',
  },
  {
    title: '日期',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: '开始时间',
    dataIndex: 'beginTime',
    key: 'beginTime',
  },
  {
    title: '结束时间',
    dataIndex: 'endTime',
    key: 'endTime',
  },
  {
    title: '预测顾客流量',
    dataIndex: 'predict',
    key: 'predict',
  }
  ]

export default function VolumnPredict(){
  return <>
  <Breadcrumb
    className="bread"
    items={[
      {title: '智能预测管理'},
      {title: '业务量预测'},
    ]}
  />
  
  <div style={{margin:'26px 0px 0px 390px'}}>
    <DatePicker 
      placeholder="选择要查看的数据"
      // onChange={onChange} 
      picker="week"
    />
    <Cascader 
     style={{marginLeft:'30px'}}
     options={options} 
    
    // onChange={onChange} 
    />
    <Button
      type='primary'
      style={{marginLeft:'30px',backgroundColor:'#ff5500'}}
    >确认</Button>
  </div>
  <ConfigProvider
    theme={{
      token: {
		colorFillAlter:'#ff5500',
        colorTextHeading:'white',
        borderRadiusLG:'0px'
      },
    }}
  >
  <Table
    rowKey="id"
    style={{marginTop:'28px',marginLeft:'20px',width:'1175px'}} 
    dataSource={dataSource} 
    columns={columns}
    size="small"  
    pagination={{
      showQuickJumper:true,
      style:{color:'black'}
    }}
    rowClassName={(record, index)=>{
      if(index/2==0) 
        return 'bg_odd'
      else
        return 'bg_even'
    }}
   />
   </ConfigProvider>
	
  </>
}
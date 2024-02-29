import React,{useState} from 'react'
import {
  Breadcrumb,
  Popconfirm
} from 'antd'
import AddInfo from '../../../components/info/AddInfo'
import UpdateInfo from '../../../components/info/UpdateInfo'
import InfoTable from '../../../components/info/InfoTable'



export default function Outlet(){
  const [open,setopen] = useState(false)
	const dataSource = [
  {
    id: 1,
    user:'xx',
    right: ['xx','aa'],
    region:'xxxx',
  },
  {
    id: 2,
    user:'xx',
    right: ['xx','aa'],
    region:'xxxx',
  },
];

const columns = [
  {
    title: '序号',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '用户',
    dataIndex: 'user',
    key: 'user',
  },
  {
    title: '权限',
    dataIndex: 'right',
    key: 'right',
  },
  {
    title: '操作',
    render:()=>{
      return <>
      <Popconfirm
        title="删除操作"
        description="是否要删除该用户权限?"
        // onConfirm={confirm}
        // onCancel={cancel}
        okText="删除"
        cancelText="取消"
      >
        <span className="delete">删除</span>
      </Popconfirm>
      <span 
        className="update"
        onClick={()=>{setopen(true)}}
      >修改</span>
      </>
  }
  },
];

	return <>
	<Breadcrumb
    className="bread"
    items={[
      {title: '组织管理'},
      {title: '审核列表'},
    ]}
  />
  没搞没搞没搞！！！！！！
  <div style={{margin:'26px 0px 0px 20px'}}>
    {open && <UpdateInfo close={()=>{setopen(false)}} content="用户权限"/>}
    <AddInfo  content="用户"/>
  	<InfoTable content="用户" dataSource={dataSource} columns={columns}/>
  </div>
	</>
}
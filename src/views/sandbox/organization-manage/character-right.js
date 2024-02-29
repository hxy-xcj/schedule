import React,{useState} from 'react'
import {
  Breadcrumb,
  Popconfirm
} from 'antd'
import AddInfo from '../../../components/info/AddInfo'
import UpdateInfo from '../../../components/info/UpdateInfo'
import InfoTable from '../../../components/info/InfoTable'
import {title_character} from '../../../components/info/data.js'

const dataSource = [
  {
    id: '1',
    name:'公司负责人',
  },
  {
    id: '2',
    name:'区域负责人',
  },
  {
    id: '3',
    name:'店长',
  },
  {
    id: '4',
    name:'副店长',
  },
  {
    id: '5',
    name:'店员（..）',
  },
];


export default function Outlet(){
  const [open,setopen] = useState(false)
  const [info,setinfo] = useState([])
	
const columns = [
  {
    title: '序号',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '角色名',
    dataIndex: 'name',
    key: 'name',
  },
  // {
  //   title: '权限',
  //   dataIndex: 'rights',
  //   key: 'rights',
  // },
  {
    title: '操作',
    render:(id)=>{
      return <>
      <Popconfirm
        title="删除操作"
        description="是否要删除该门店信息?"
        // onConfirm={confirm}
        // onCancel={cancel}
        okText="删除"
        cancelText="取消"
      >
        <span className="delete">删除</span>
      </Popconfirm>
      <span 
        className="update"
        onClick={()=>{
          setopen(true)
          setinfo(id)
        }}
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
      {title: '角色列表'},
    ]}
  />
  <div style={{height:'100%',backgroundColor:'#fafafa',padding:'26px 0px 0px 20px'}}>
  {open &&
    <UpdateInfo 
    info={info}
    close={()=>{setopen(false)}}
    open={open}
    content="角色"
    title={title_character}
  />
  }
    
    <AddInfo 
      content="角色"
      title={title_character}
    />
    <InfoTable 
      content="角色" 
      dataSource={dataSource} 
      columns={columns}/>
  </div>
	</>
}
import React,{useState} from 'react'
import {
  Breadcrumb,
  Popconfirm,
} from 'antd'
// import Upload from '../../../components/Upload/upload'

import AddInfo from '../../../components/info/AddInfo'
import UpdateInfo from '../../../components/info/UpdateInfo'
import InfoTable from '../../../components/info/InfoTable'
import {title_outlet} from '../../../components/info/data.js'

export default function Outlet(){
  const [open,setopen] = useState(false)
  // const [fileList, setFileList] = useState()
  const [info,setinfo] = useState([])
  // const [dataSource,setdataSource] = useState([])
	const dataSource = [
  {
    id: '1',
    region:'xx',
    name: '门店1',
    area:20,
    address: '西湖区湖底公园1号',
    region:['河北省', '石家庄市', '长安区']
  },
  {
    id: '2',
    region:'xx',
    name: '门店2',
    area:20,
    address: '西湖区湖底公园1号',
    region:['河北省', '石家庄市', '长安区']
  },
];

const columns = [
  {
    title: '序号',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '门店名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '面积',
    dataIndex: 'area',
    key: 'area',
  },
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

  // useEffect(()=>{
  //   axios({
  //     url:"store/",
  //     method:'get',
  //     headers:{
  //     "Authorization":"Bearer "+window.sessionStorage.getItem("token"),
  //     "Content-Type":"application/json"
  //   }}).then(res=>{console.log(res)})
  // },[])

	return <>
	<Breadcrumb
    className="bread"
    items={[
      {title: '组织管理'},
      {title: '门店信息管理'},
    ]}
  />
  <div style={{backgroundColor:'#fafafa',padding:'26px 0px 0px 20px'}}>
    {open &&
      <UpdateInfo 
        info={info}
        close={()=>setopen(false)}
        content="门店"
        title={title_outlet}
      />
    }
    <AddInfo 
      content="门店"
      title={title_outlet}
    />
    <InfoTable 
      content="门店" 
      dataSource={dataSource}
      columns={columns}
    />
    
  </div>
	</>
}
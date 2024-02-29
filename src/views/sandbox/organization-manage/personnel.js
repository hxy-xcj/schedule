import React,{useState} from 'react'
import {
  Breadcrumb,
  Popconfirm,
  Button,
  Tag
} from 'antd'
import {
  PlusOutlined,
} from '@ant-design/icons';
import UserInfo from '../../../components/info/UserInfo'
import InfoTable from '../../../components/info/InfoTable'
import Upload from '../../../components/Upload/upload'



export default function Outlet(){
  const [open,setopen] = useState(false)
  const [action,setaction] = useState()
  const [info,setinfo] = useState([])
  const [fileList, setFileList] = useState()

	const dataSource = [
  {
    id: 1,
    name:'a',
    position: '店长',
    region:'xxxx',
    outlet: '1',
    password:'11223344qwe',
    phone:'1234456',
    username:'hxy@qq.com'
  },
  {
    id: 2,
    name:'xx',
    position: '店员',
    region:'xxxx',
    outlet: 1,
  },
  ];

const columns = [
  {
    title: '序号',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '员工姓名',
    dataIndex: 'name',
    key: 'name',
    render:(name,id)=>{
      return (
      <span
      style={{cursor:'pointer'}}
        onClick={()=>{
          console.log(id)
          setopen(true)
          setaction("")
          setinfo(dataSource.filter(item=>item.name.includes(name)))
        }}
      >
        <Tag color="lime">{name}</Tag>
      </span>
      )
    }
  },
  {
    title: '职位',
    dataIndex: 'position',
    key: 'position',
  },
  {
    title: '工作门店',
    dataIndex: 'outlet',
    key: 'outlet',
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
          setaction("修改")
          setinfo(dataSource.filter(item=>item.name.includes(id['name'])))
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
      {title: '员工信息管理'},
    ]}
  />
  <div style={{backgroundColor:'#fafafa',padding:'26px 0px 0px 20px'}}>
    <Upload 
      name="file" 
      excel="yes"
      fileList={fileList}
      onChange={({ fileList: newFileList }) => {
        setFileList(newFileList);
      }}
    />
    <Button 
      type="primary"
      icon={<PlusOutlined />}
      style={{
        backgroundColor:'#ff5500',
        color:'white',
        height:'32px',
        width:'110px',
        fontSize:'16px',
        paddingTop:'1px',
        paddingLeft:'8px',
        textAlign:'left'
      }}
      onClick={()=>{
        setopen(true)
        console.log(open)
        setaction("添加")
      }}
    >
      添加员工
    </Button>
    {open && 
      <UserInfo 
        action={action}
        info={info} 
        close={()=>{
          setopen(false)
          setinfo()
        }} 
        content="员工"
      />
    }
  	<InfoTable 
      content="员工" 
      dataSource={dataSource} 
      columns={columns}
    />
  </div>
	</>
}
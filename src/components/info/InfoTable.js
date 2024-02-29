import React,{useState} from 'react'
import {
  Table,
  Input,
  ConfigProvider,
} from 'antd'


const { Search } = Input;

export default function InfoTable(props){
	const [dataSource,setdataSource] = useState(props.dataSource)
  return(
	<>
	  <Search
      placeholder={`搜索${props.content}`}
      onSearch={(e)=>{
        let newdata = props.dataSource.filter(item=>item.name.includes(e))
        setdataSource(newdata)
      }}
      style={{
        width:195,
        height:'36px',
        marginLeft:'38px',
        // fontSize:'16px !important'
      }}
    />
	  <ConfigProvider
      theme={{
        token: {
		      colorFillAlter:'#ff5500',
          // colorText:"white",
          colorTextHeading:'white',
          borderRadiusLG:'0px'
          // colorText:'white',
          // borderRadius:'0px',
          // padding :'24px',
          // marginXXS:'0px',
        },
      }}
  	  >
  	    <Table 
  	      id="table"
          rowKey="id"
          style={{
            marginTop:'28px',
            width:'1175px'
          }}
  	      dataSource={dataSource} 
  	      columns={props.columns} 
          size="small"  
          pagination={{
            showQuickJumper:true,
            style:{
              color:'black'
            }
          }}
  	      rowClassName={(record, index)=>{
            if(index % 2 === 0) 
              return 'bg_odd'
            else
              return 'bg_even'
          }}
  	 />
    </ConfigProvider>
    </>
	)
}
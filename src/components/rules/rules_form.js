import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { 
  Button,
  Col, 
  Form, 
  Row, 
  theme
} from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat'
import CreateForm from './CreateForm'
import ModalAdd from './ModalAdd'

dayjs.extend(customParseFormat)

export default function RulesForm(props){
  const { token } = theme.useToken();
  const [form] = Form.useForm();
  const [formdata,setformdata] = useState([])
  const validateMessages = {
    required: "${label} 是必选字段"
  }

  const onFinish = (values) => {
    console.log(values)
  };
  const getformdata = ()=>{
  //   axios({
  //     url:"scheduleRule/",
  //     method:'get',
  //     headers:{
  //     "Authorization":"Bearer "+window.sessionStorage.getItem("token"),
  //     "Content-Type":"application/json"
  //   }}).then(res=>{
  //     console.log(JSON.parse(res.data[0].data))
  // })
    if(props.data === '0'){
      axios.get("regularrules").then(res=>{
        setformdata(res.data)
      })
    } else {
      axios.get("customizationrules").then(res=>{
        setformdata(res.data)
      })
    }
  }

  const formStyle = {
    maxWidth: 'none',
    background: '#fafafa',
    borderRadius: token.borderRadiusLG,
    padding: 24
  };
  useEffect(()=>{
    getformdata()
  },[])


	return <>
    <Form 
      validateMessages={validateMessages}
      disabled={(props.data==="0"?true:false)}
      form={form} 
      labelCol={{span:10}}
      name="advanced_search" 
      style={formStyle} 
      labelAlign="left"
      onFinish={onFinish}
    >
      <CreateForm 
        form={form}
        formdata={formdata}
        data={props.data}
        filterevent={(id)=>{
          setformdata(formdata.filter(item=>item.id!==id))
        }}
      />
      {props.data === '1' && 
        <ModalAdd 
          update={(e)=>{
          // console.log(data)
          // data.push(e)
          var obj = JSON.parse(JSON.stringify(formdata))
          obj.push({id:formdata.length+1,...e})
          setformdata(obj)
          // axios.post("http://localhost:8000/regularrules",{id:formdata.length+1,...e}).then(res=>{
          //   axios.get("http://localhost:8000/regularrules").then(res=>{
          //     setformdata(res.data)
          //   })
          // })
      }}
      />
    }

      {/*两个按钮*/}
    {props.data==="1"?
      <Row gutter={24}>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Button
            type="primary" 
            htmlType="reset"
          >
            重置
          </Button>
          <Button 
            type="primary"
            htmlType="submit"
            style={{ 
              backgroundColor:'#ff5500',
              color:'white',
              margin: '0 8px' 
            }}
          >
            保存
          </Button>
        </Col>
      </Row>
      :''}
    </Form>
    </>
}
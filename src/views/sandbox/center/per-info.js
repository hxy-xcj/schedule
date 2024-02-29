import React,{useState,useEffect} from 'react'
import {
	Breadcrumb,
	Form,
	theme,
	Button,
	Col,
	Row
} from 'antd'
import {
	HomeOutlined,
	UserOutlined
} from '@ant-design/icons';
import axios from 'axios'
import CreateForm from '../../../components/rules/CreateForm'
import {title_customer} from '../../../components/center/data.js'

export default function Info(){
	const { token } = theme.useToken();
  const [form] = Form.useForm();
	const [formdata,setformdata] = useState([])
	const onFinish = (values: any) => {
      console.log('Received values of form: ', values);
    };
    const formStyle = {
      maxWidth: 'none',
      background: '#fafafa',
      borderRadius: token.borderRadiusLG,
      padding: 24,
    };
	useEffect(()=>{
    setformdata(title_customer)
    },[])
	return<>
	<Breadcrumb
    className="bread"
    items={[
      {title: '个人中心'},
      {title: '用户信息管理'},
    ]}
  />
    <div style={{height:'100vh'}}>
      <Form 
        form={form} 
        labelCol={{span:10}}
        labelAlign="left"
        name="advanced_search" 
        style={formStyle} 
        onFinish={onFinish}
      >
        <CreateForm 
          minus='n'
          formdata={formdata}
          filterevent={(id)=>{setformdata(formdata.filter(item=>item.id!=id))}}
        />
        <Row gutter={24}>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Button
            type="primary" 
            onClick={() => {form.resetFields()}}
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
            }}>
            保存
          </Button>
        </Col>
      </Row>
	  </Form>
	</div>
    </>
}
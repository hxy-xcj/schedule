import React,{useState,useEffect} from 'react'
import {
	Breadcrumb,
	Form,
	theme,
	Button,
	Col,
	Row,
  Select, 
  Input,
  message,
} from 'antd'
import axios from 'axios'
import Upload from '../../../components/Upload/upload'
import { pcaa } from 'area-data'; // v3 or higher
import 'react-area-linkage/dist/index.css'; // v2 or higher
import { AreaSelect } from 'react-area-linkage'

const options = [
{
  label:'1-9人',
  value:'1-9人'
},
{
  label:'10-99人',
  value:'10-99人'
},
{
  label:'100-499人',
  value:'100-499人'
},
{
  label:'500-999人',
  value:'500-999人'
},
{
  label:'1000人以上',
  value:'1000人以上'
}
]
const layout = {
  size:'large',
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 10,
  },
};
const normFile = (e: any) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
}

export default function Info(){
	const { token } = theme.useToken();
  const [form] = Form.useForm();
	const [formdata,setformdata] = useState([])
  const [fileList, setFileList] = useState()
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
    },[])
	return<>
	<Breadcrumb
    className="bread"
    items={[
    {title: '个人中心'},
    {title: '公司信息管理'},
    ]}
  />
    <div style={{height:'100vh'}}>
      <Form
        {...layout} 
        form={form} 
        name="advanced_search" 
        style={formStyle} 
        onFinish={onFinish}
        disabled
      >
      <h3 
        style={{
          textAlign:'center',
          color:'red'
        }}
      >
        若公司信息变更，请联系客服核实修改
      </h3>
        <Form.Item
        className="reg_form_item_style"
        name="companyName"
        label="公司名称"
        rules={[{required: true}]}
        extra="填写营业执照上的公司全称"
      >
        <Input />            
      </Form.Item>
      <Form.Item
        className="reg_form_item_style"
        name="region"
        label="公司所在地区"
        rules={[{required: true}]}
        extra="填写公司注册地址的所在地区"
      >
        <AreaSelect 
          size="small" 
          type="text" 
          data={pcaa} 
          level={2} 
        />      
      </Form.Item>
      <Form.Item
        className="reg_form_item_style"
        name="address"
        label="公司详细地址"
        rules={[{required: true}]}
        extra="填写注册地址"
      >
        <Input />
      </Form.Item>
      <Form.Item 
        name="Socredit_code" 
        label="统一社会信用代码"
        rules={[
        {
          required: true
        },
        {
          pattern: /^[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/g,
          message:'请填写正确的统一社会信用代码'
        }]}
        extra="正确填写统一社会信用代码"
      >
        <Input/>
      </Form.Item>
      <Form.Item 
        className="reg_form_item_style"
        name="scale" 
        label="人员规模"
        rules={[{required: true}]}
        extra="选择工商注册时的人员规模"
      >
        <Select options={options}/>
      </Form.Item> 
      <Form.Item 
        className="reg_form_item_style"
        name="license" 
        label="营业执照"
        rules={[{required: true}]}
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload 
          name="license" 
          fileList={fileList}
          onChange={({ fileList: newFileList }) => {
            setFileList(newFileList);
          }}/>
        </Form.Item>  
        {/*<Row gutter={24}>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Button
            type="primary" 
            htmlType="submit"
            onClick={() => {form.resetFields()}}
          >
            重置
          </Button>
          <Button style={{ backgroundColor:'#ff5500',color:'white',margin: '0 8px' }}>
            保存
          </Button>
        </Col>
      </Row>*/}
	  </Form>
	</div>
    </>
}
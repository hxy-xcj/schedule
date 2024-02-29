import React,{useState,useEffect} from 'react'
import { 
  PlusOutlined,
} from '@ant-design/icons';
import { 
  Button, 
  Form, 
  Input, 
  Select, 
  Space,
  Cascader,
  message,
  Steps,
  ConfigProvider
} from 'antd';
import Upload from '../Upload/upload'
import { pcaa } from 'area-data'; // v3 or higher
import 'react-area-linkage/dist/index.css'; // v2 or higher
import { AreaSelect, AreaCascader } from 'react-area-linkage';
import axios from 'axios'



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
    span: 14,
  },
};
const validateMessages = {
  required: '请填写该项内容',
  string: {
    range:'${label}必须${min}-${max}个字',
  },
  types: {
    email: '请填写正确邮箱',
  },
  pattern:{
    mismatch:'${label}格式错误'
  }
};

const normFile = (e) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
}





export default function Update(props){
  const [form] = Form.useForm();
  const [current, setCurrent] = useState(0);

  const [form1_data,setform1_data] = useState()
  const [fileList, setFileList] = useState()

  const [err,seterr] = useState()
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [messageApi, contextHolder] = message.useMessage()
  const error =(e)=>{
    messageApi.open({
      type: 'error',
      content: e,
    });
  // message.error(e)
  }
  const items = [
  {
    key:'个人信息',
    title:'个人信息'
  },
  {
    key:'公司信息',
    title:'公司信息'
  }]

  return (


  //           form.validateFields().then((values)=>{
  //             let {companyName,address,region,name,password,phone,email} = values
  //             axios.post("company/", {
  //               companyName,
  //               province:region[0],
  //               city:region[1],
  //               distinct:region[2],
  //               address,
  //               manager:{
  //                 name,
  //                 password,
  //                 phone,
  //                 email
  //               }
  //             })
  //             .then(res=>{
  //               // console.log(res)
  //               info()
  //               props.close()
  //             }).catch(err=>{
  //               seterr(err.response.data.manager.email)
  //               setjudge(false)
  //               console.log(err.response.data.manager.email)
  //               error(err.response.data.manager.email)
  //               })
  //           })

  <ConfigProvider
    theme={{
      "token": {
        "colorPrimary": "#ff5500"
      }
    }}
  >
  <div className="form_module">
    <div className="form_step" >
      <Steps 
        style={{width: '400px',margin:'0 auto'}}
        current={current} 
        items={items} 
      />
    </div>
    <Form 
      style={{marginTop:'10px'}}
      {...layout}
      validateTrigger="onBlur"
      // layout="inline"
      form={form}
      validateMessages={validateMessages}
    >
      <div className="register_form">
      {current===0?
      <>

       {/*个人信息*/}

        <Form.Item 
          className="reg_form_item_style"
          name="name" 
          label="姓名" 
          rules={[{required: true,type:'string',min:2,max:5}]}
          extra="填写真实姓名"
          
        >
          <Input allowClear/>
        </Form.Item>
        <Form.Item 
          className="reg_form_item_style"
          name="password" 
          label="密码" 
          rules={[
          {required: true},
          {
            pattern:/^(?![a-zA-Z]+$)(?!\d+$)(?![^\da-zA-Z\s]+$).{6,18}$/,
            message:"密码强度不够，请按照提示内容设置密码"
          }]}
          extra="由字母、数字、特殊字符中任意2种组成，最短6位"
          hasFeedback
        >
          <Input.Password
            visibilityToggle={{
              visible: passwordVisible,
              onVisibleChange: setPasswordVisible,
            }}
          />
        </Form.Item>
        <Form.Item 
          className="reg_form_item_style"
          name="confirm"
          label="确认密码" 
          rules={[
            {required: true},
            ({ getFieldValue }) => ({
              validator(rule,value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
              }
              return Promise.reject(new Error('两次输入的密码不一致'));
              },
            }),
          ]}
          dependencies={['password']}
          validateTrigger="onChange"
          extra="请再次输入密码"
          hasFeedback
        >
          <Input.Password
            visibilityToggle={{
              visible: passwordVisible,
              onVisibleChange: setPasswordVisible,
            }}
          />
        </Form.Item>
        <Form.Item
          className="reg_form_item_style"
          name="phone" 
          label="手机号码"
          rules={[
          {
            required: true,
            pattern: /^1[3456789]\d{9}$/
          }]}
          extra="请填写数字，长度为 11 位"
        >
          <Input type="tel"/>
        </Form.Item>
        <Form.Item 
          className="reg_form_item_style"
          name="username" 
          label="邮箱"
          rules={[{required: true,type:'email'}]}
          validateStatus={error}
          extra="作为登录帐号，请填写未被注册的邮箱"
        >
          <Input type="email"/>
        </Form.Item>
        <Form.Item 
          className="reg_form_item_style"
          name="IDcard" 
          label="身份证照片"
          rules={[{required: true}]}
          validateStatus={error}
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload 
            name="IDcard" 
            fileList={fileList}
            onChange={({ fileList: newFileList }) => {
              setFileList(newFileList);
            }}
          />
        </Form.Item>  
      </>:
      <>
      <Form.Item
        className="reg_form_item_style"
        name="name"
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
        name="code" 
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
        name="size" 
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
      </>
    }
    </div>
    </Form>
    {
      current===0?
      <div>
        <Button 
          style={{marginLeft:'400px'}}
          type="primary" 
          onClick={()=>{
            form.validateFields().then((values)=>{
              console.log(values)
              setCurrent(1)
              setform1_data(values)
            })
          }}
        >下一项</Button>
      </div>:
      <div>
        <Button
          type="primary"
          style={{marginLeft:'400px',marginRight:'50px'}}
          onClick={()=>{setCurrent(0)}}
        >上一项</Button>
        <Button 
          type="primary" 
          style={{width:'76px'}}
          onClick={()=>{
            form.validateFields().then((values)=>{
              console.log(form1_data)
              console.log(values)
              //axios通信
            }
            )
          }}>注册</Button>
      </div>
    }
    
  </div>
  </ConfigProvider>
  )
}
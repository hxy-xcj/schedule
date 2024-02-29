import React from 'react';
import { 
  Button, 
  Form, 
  Input, 
  Modal, 
  Avatar,
  Select
} from 'antd';
import {
  UserOutlined
} from '@ant-design/icons';
import './userinfo.css'

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

const CollectionCreateForm = ({ action,info,content,open, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      // forceRender
      width={840}
      open={open}
      title={`${action}员工信息`}
      okText="确定"
      cancelText="取消"
      onCancel={onCancel}
      footer={null}
     >
      <Form
        form={form}
        disabled={(action?false:true)}
        validateMessages={validateMessages}
        layout="inline"
        // horizontal
        name="form_in_modal"
        onFinish={(values)=>{
          form
            .validateFields()
            .then((values) => {
              console.log(values)
              form.resetFields();
              onCreate()
            })
        }}
        initialValues={info?{...info[0]}:''}
      >
     <div>
        <div>
          <div style={{marginTop:'-1px',height:'24px',width:'5px',float:"left",backgroundColor:'#ff5500'}}></div>
          <span style={{marginLeft:'20px',fontWeight:700}}>基本信息</span>
        </div>
        <div style={{float:'left',marginTop:'14px',marginLeft:'14px'}}>
          {/*改成Upload*/}
          <Form.Item 
            style={{float:'left',width:'100px',height:'170px'}}
            label=""
            name="avatar"
            rules={[{required: true}]}
          >
            <Avatar 
              size={96} 
              icon={<UserOutlined />} 
            />
          </Form.Item> 
          <Form.Item 
            className="userinfo_item"
            label="姓名"
            name="name"
            rules={[{required: true}]}
          >
            <Input 
              style={{float:'right',width:'138px'}} 
            />
          </Form.Item> 
          {/*<Form.Item 
            className="userinfo_item"
            name="sex"
            label="性别"
            rules={[{required: true}]}
          >
            <Select
              style={{float:'right',width:'138px'}}
              options={[
              {
                value: 'male',
                label: '男',
              },
              {
                value: 'female',
                label: '女',
              },
              ]}
            />      
          </Form.Item> */}
          <Form.Item 
            className="userinfo_item"
            name="store"
            label="所属门店"
            rules={[{required: true}]}
          >
            <Select
              style={{float:'right',width:'138px'}}
              // 动态获得
              options={[
              {
                value: '1',
                label: '门店1',
              },
              {
                value: '2',
                label: '门店2',
              }]}
            />
          </Form.Item> 
          <Form.Item 
            className="userinfo_item"
            name="position"
            label="员工职位"
            rules={[{required: true}]}
          >
          {/*动态获得*/}
            <Select
              style={{float:'right',width:'138px'}}
              options={[
              {
                value: '1',
                label: '店长',
              },
              {
                value: '2',
                label: '店员',
              },
              ]}
            ></Select>
          </Form.Item>
          <Form.Item 
            className="userinfo_item"
            name="password"
            label="密码"
            rules={[{required: true}]}
            initialValue="123qwe"
          >
            <Input.Password 
              disabled 
              style={{float:'right',width:'138px'}}
            />
          </Form.Item>
          <Form.Item 
            className="userinfo_item"
            name="phone"
            label="手机号码"
            rules={[{required: true}]}
          >
            <Input 
              style={{float:'right',width:'138px'}}
            />
          </Form.Item>
          <Form.Item 
            className="userinfo_item"
            name="username"
            label="邮箱"
            rules={[{required: true}]}
          >
            <Input
              style={{float:'right',width:'138px'}}
            />
          </Form.Item>
        </div>
      </div>
      {/*<div style={{marginTop:'-18px'}}>
        <div style={{height:'24px',width:'5px',float:"left",backgroundColor:'#ff5500'}}></div>
        <span style={{marginLeft:'20px',fontWeight:700}}>详细信息</span>
      </div>
      <div style={{marginTop:'14px',marginLeft:'49px'}}>
        <Form.Item 
          className="userinfo_item"
          label="籍贯"
          rules={[
          {
            required: true,
            message: 'Input something!',
          }]}
        >
          <Input
            style={{float:'right',width:'138px'}}
          />
        </Form.Item> 
        <Form.Item 
          className="userinfo_item"
          label="学历"
          rules={[
          {
            required: true,
            message: 'Input something!',
          }]}
        >
          <Input
            style={{float:'right',width:'138px'}}/>
        </Form.Item> 
      </div>*/}
      {action && 
      <div style={{margin:'-10px 0px 10px 0px'}}>
      <div style={{margin:'0px 0px 0px 300px'}}>
        <Button
          size="large"
          type="primary" 
          style={{
            backgroundColor:'#cccccc',
            color:'black'
          }}
          onClick={onCancel}
        >取消</Button>
        <Button 
          size="large"
          type="primary" 
          style={{
            margin:'10px 0px 0px 80px',
            backgroundColor:'#ff5500'
          }}
          htmlType="submit"
         >确认</Button>
      </div>
      </div>
      }
      </Form>
    </Modal>

  );
};
export default function UserInfo(props) {
  return (
  <>
    <CollectionCreateForm
      action={props.action}
      info={props.info}
      content={props.content}
      open={true}
      onCreate={() => {props.close()}}
      onCancel={() => {props.close()}}
    />
  </>
  );
};


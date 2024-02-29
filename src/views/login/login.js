/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-03-05 10:43:22
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-01-26 15:24:26
 * @FilePath: \project\src\views\login\login.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import axios from 'axios'
import { 
  UnlockOutlined,
  UserOutlined 
} from '@ant-design/icons';
import { 
  Button,
  Form,
  Input,
  Checkbox, 
  message
} from 'antd';
import './login.css'


export default function Login(props) {
  const [form] = Form.useForm()
	
	return (
    <div className="login_background">
		  <div className="login_module">
	      <Form
          form={form}
          name="normal_login"
          // className="login-form"
          initialValues={{
            username:window.localStorage.getItem("username"),
            password:window.localStorage.getItem("password"),
            remember:true
          }}
          onFinish={()=>{form.validateFields().then(
            (value)=>{
              axios.get(`user?username=${value.username}&password=${value.password}`,
                {...value}).then(res=>{
                  if(res.data.length===0) 
                    message.error('用户名密码错误')
                  else {
                    if(value.remember) {
                      window.localStorage.setItem("username",value.username)
                      window.localStorage.setItem("password",value.password)
                    } else {
                      window.localStorage.removeItem("username")
                      window.localStorage.removeItem("password")
                    }
                    window.sessionStorage.setItem("token","111")
                    window.sessionStorage.setItem("username",res.data[0].username)
                    window.sessionStorage.setItem("user_type",res.data[0].role)
                    props.history.push('./home')
                  }
                  
                })
            }
            )}}
        >
          <p className="login_title">
            用户登录
            <span className="login_title_span">USER LOGIN</span>
          </p>
          <Form.Item
            name="username"
            rules={[{required: true,message:'请输入用户名'}]}
          >
            <Input 
              className="login_input" 
              prefix={
                <UserOutlined 
                  className="site-form-item-icon" 
                  style={{marginRight:'10px',fontSize:'24px'}}
                />} 
              placeholder="请输入用户名" 
              autoComplete="off"
              allowClear
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{required: true}]}
          >
            <Input
              className="login_input"
              prefix={
                <UnlockOutlined 
                  className="site-form-item-icon"
                  style={{marginRight:'10px',fontSize:'24px'}}
                />}
              type="password"
              placeholder="请输入密码"
              autoComplete="off"
              allowClear
            />
          </Form.Item>

          <Form.Item>
            <Button 
              type="primary"
              htmlType="submit"
              className="login_button"
            >登录</Button>
          </Form.Item>
          <Form.Item
            style={{height:'10px'}}
            name="remember"
            valuePropName="checked"
          >
            <Checkbox>记住密码</Checkbox>
            
          
          </Form.Item>
          <p className="register"
            onClick={()=>{props.history.push("/register")}}
          >点击注册</p> 

          
        </Form>
      </div>
    </div>
  );
}

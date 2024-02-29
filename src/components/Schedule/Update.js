import React,{useState,useEffect} from 'react'
import { 
  PlusOutlined 
} from '@ant-design/icons';
import { 
  Button, 
  Col, 
  DatePicker, 
  TimePicker,
  Drawer, 
  Form, 
  Input, 
  Row, 
  Select, 
  Space 
} from 'antd';
const { Option } = Select;
const options = [];
for (let i = 10; i < 36; i++) {
  options.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}
export default function Update(props){
  const [form] = Form.useForm()
  useEffect(()=>{
    form.setFieldsValue({
      'outlet':'xxx'
    })
  })
  return (
  <Drawer
    forceRender
    title="修改排班表"
    width={360}
    onClose={props.close}
    open={props.open}
    bodyStyle={{
      paddingBottom: 80,
    }}
    extra={
      <Space>
        <Button onClick={props.close}>取消</Button>
        <Button 
        onClick={()=>{form.validateFields().then((values)=>{console.log(values)})}}htmlType="submit"type="primary">确定</Button>
      </Space>
    }
  >
    <Form
      form={form} 
      layout="vertical" 
      hideRequiredMark
      onFinish={(values)=>{console.log(values)}}
    >
      <Form.Item
        name="date"
        label="日期"
        rules={[{required: true}]}
      >
        <DatePicker placeholder="选择日期"style={{width:'100%'}}/>
      </Form.Item>
      <Form.Item
        name="time_peroid"
        label="时间段"
        rules={[{required: true}]}
      >
        <TimePicker.RangePicker style={{width:'100%'}}/>
      </Form.Item>
      <Form.Item
        name="outlet"
        label="门店"
        rules={[{required: true}]}
      >
        <Input disabled/>
      </Form.Item>
      <Form.Item
        name="employers"
        label="选择该时间段的员工"
        rules={[{required: true}]}
      >
        <Select
          mode="multiple"
          style={{width: '100%'}}
          placeholder="Please select"
          options={options}
        />
      </Form.Item>
    </Form>
  </Drawer>)
}
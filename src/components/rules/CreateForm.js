/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-03-08 14:14:00
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-02-04 22:00:55
 * @FilePath: \project\src\components\rules\CreateForm.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React,{useState,useEffect} from 'react'
import { 
  Col, 
  Form, 
  Row, 
  Select, 
  TimePicker,
  InputNumber,
  Popconfirm,
  Input
} from 'antd';
import { 
  MinusCircleOutlined,
} from '@ant-design/icons';
import dayjs from 'dayjs';
import axios from 'axios'
// import customParseFormat from 'dayjs/plugin/customParseFormat'
import MutiSelection from '../Cascader/multiselection'
import './rules.css'
import TimeRange from './timeRange.js'

//创造表格中的内容
export default function CreateForm(props){
  const [option,setoption] = useState([])


  // const handleChange = (value) => {
  //   console.log(value);
  // };
  var options=[]

  option.map(item=>{
    options.push({
      label: item.roleName,
      value: item.id,
    })
    return null
  })

  useEffect(()=>{
    axios.get("http://localhost:8000/roles").then(res=>{
      setoption(res.data)
    })
  },[])
	const format = "HH:mm"
	return props.formdata.map(item=>
    <div key={item.id}>
      <Row gutter={24} style={{marginBottom:'10px'}}>
        {/*标题*/}
        <Col span={4}  style={{ textAlign: 'left' }}>
      	  <div className="line"></div>
          <div className="rule_title">{item.title}</div>
        </Col>
        {/*是否可删除*/}
       {
          props.data==="1" ? 
          <Col span={2}  style={{ textAlign: 'left' ,marginTop:'1px'}}>
            <Popconfirm
              title="是否要删除"
              onConfirm={()=>{
                let id = item.id;
                props.filterevent(id);
              }}
              onCancel={()=>{console.log('cancel')}}
              okText="Yes"
              cancelText="No"
            >
              <MinusCircleOutlined />
            </Popconfirm>
          </Col>:''
        }
      </Row>
      <Row gutter={16} >
      {item.content.map((item,index)=>{
        {/*时间选择*/}
        // if(item.type==="time_range")
        //   return (
        //     <TimeRange
        //       index={index}
        //       label={item.label}
        //       begin={item.begin}
        //       end={item.end}
        //     />
        //   )

        if(item.type==="time_range")
          return (
          <Col offset={1} span={9} key={index}>  
      	    <Form.Item 
              key={index}
              name={item.label}
              label={item.label}
              rules={[{required: true}]}
              initialValue={item.begin?[dayjs(item.begin, format), dayjs(item.end, format)]:''}
            >
        	    <TimePicker.RangePicker 
          	    style={{width:'230px'}} 
          	    format={format}
          	    onChange={(e)=>{
          	      let begin = `${e[0].$H}:${e[0].$m}`
          	     	let end = `${e[1].$H}:${e[1].$m}`
                  item.begin = begin 
                  item.end = end
          	    }}
              />
            </Form.Item>
          </Col>
          )

        {/*数字*/}

        if(item.type==="num")
          return (
          <Col offset={1} span={9} key={index}>
            <Form.Item 
              name={item.label}
              label={item.label}
              rules={[{required: true}]}
              initialValue={item.value}
            >
              <InputNumber style={{width:'230px'}}/>
            </Form.Item>
          </Col>
          )

        {/*多选选择*/}

        if(item.type==="mutichoices")
          return (
          <Col offset={1} span={9} key={index}>
            <Form.Item 
              name={item.label}
              label={item.label}
              rules={[{required: true}]}
              initialValue={item.value}
            >
              <MutiSelection />
            </Form.Item>
          </Col>
          )

        {/*input*/}
        if(item.type==="input")
          return (
          <Col offset={1} span={9} key={index}>
            <Form.Item 
              name={item.label}
              label={item.label}
              rules={[{required: true}]}
            >
              <Input style={{width:'230px'}}/>
            </Form.Item>
          </Col>
          )
        {/*select选择*/}
        if(item.type==="select")
          return (
          <Col offset={1} span={9} key={index}>
            <Form.Item 
              name={item.label}
              label={item.label}
              rules={[{required: true}]}
            >
              <Select 
                style={{width:'230px'}}
                options={item.options}
              />
            </Form.Item>
          </Col>
          )
        }
      )}
    </Row>   
  </div>
  )
}

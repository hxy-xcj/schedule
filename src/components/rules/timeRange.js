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
import dayjs from 'dayjs';
const format = "HH:mm"
export default function timeRange(props){
    return(
        <Col offset={1} span={9} key={props.index}>  
      	    <Form.Item 
              key={props.index}
              name={props.label}
              label={props.label}
              rules={[{required: true}]}
              initialValue={props.begin?[dayjs(props.begin, format), dayjs(props.end, format)]:''}
            >
        	    <TimePicker.RangePicker 
          	    style={{width:'230px'}} 
          	    format={format}
          	    onChange={(e)=>{
          	        let begin = `${e[0].$H}:${e[0].$m}`
          	        let end = `${e[1].$H}:${e[1].$m}`
                    props.begin = begin 
                   props.end = end
          	    }}
              />
            </Form.Item>
          </Col>
    )
            }
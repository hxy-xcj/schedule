import React,{useState} from 'react'
import {
  Segmented,
  Radio,
  Select,
  Tag,
  Drawer,
  DatePicker,
  Button
} from 'antd'
import {
  LeftOutlined,
  RightOutlined
} from '@ant-design/icons';
import Update from './Update.js'

const data1 = [
{
	id:1,
	date:'4月3日',
	begintime:'9:00',
	endtime:'12:00',
	store:'门店a',
	num:4,
	employer:[
	{name:'员工a'},
	{name:'员工b'}
	]
},
{
	id:2,
	date:'4月3日',
	begintime:'13:00',
	endtime:'15:00',
	store:'门店a',
	num:4,
	employer:[
	{name:'员工a'},
	{name:'员工b'}
	]
},
]
const data2 = [
{
	id:1,
	date:'4月4日',
	begintime:'12:00',
	endtime:'17:00',
	store:'门店a',
	num:4,
	employer:[
	{name:'员工a'},
	{name:'员工b'}
	]
},
{
	id:2,
	date:'4月4日',
	begintime:'17:00',
	endtime:'20:00',
	store:'门店a',
	num:4,
	employer:[
	{name:'员工a'},
	{name:'员工b'}
	]
},
]


export default function Schedule() {
	// 日期
	const [currentdate,setcurrentdate]  = useState(new Date())

	// console.log(`今天是${currentdate.getMonth()+1}月${currentdate.getDate()}日`)
	//
	const date = new Date()
	const [weekstart,setweekstart] = useState(new Date(date.getTime()-(date.getDay()-1)*60*60*24*1000))
	const [weekend,setweekend] = useState(new Date(date.getTime()+(7-date.getDay())*60*60*24*1000))
	
	// console.log(`本周是${weekstart.getMonth()+1}月${weekstart.getDate()}日-${weekend.getMonth()+1}月${weekend.getDate()}日`)
	const options = [];
    for (let i = 10; i < 36; i++) {
      options.push({
        value: i.toString(36) + i,
        label: i.toString(36) + i,
      });
    }

  const [opendrawer,setopend] = useState(false)

	//

	//切换周查看和日查看
	const [type,settype] = useState("week")
	return <div style={{marginTop:'20px'}}>
	<div>
	  <Radio.Group 
	    onChange={(e)=>{
	      settype(e.target.value)
	    }}
	    defaultValue={type} 
	    buttonStyle="solid"
	  >
      <Radio.Button value="day">按日查看</Radio.Button>
      <Radio.Button value="week">按周查看</Radio.Button>
    </Radio.Group>
    <Select
      mode="multiple"
      placeholder="选择想看的职位"
      // defaultValue={['a10', 'c12']}
      // onChange={handleChange}
      style={{width: '180px'}}
      options={options}
    />
    </div>
    <div className="schedule_title">
      <Button
        shape="circle"
        type="link"
        icon={<LeftOutlined />}
        style={{
        	float:'left',
        	marginTop:'0px',
        	fontSize:'16px',
        	zIndex:'999'
        }} 
        className="clickicon" 
        onClick={()=>{
        	if(type==="day") {
        		let n = currentdate.getTime() - 60*60*24*1000
        		setcurrentdate(new Date(n))
        	} else {
        		let begin = weekstart.getTime() - 7*60*60*24*1000
        		let end = weekend.getTime() - 7*60*60*24*1000
        		setweekstart(new Date(begin))
        		setweekend(new Date(end))
        	}
        }}
      />
      {/*按日查看*/}
      {type == "day" &&
        <div className="schedule_title_icon">
        {currentdate.getMonth()+1}月{currentdate.getDate()}日</div>}
      {/*按周查看*/}
      {type == "week" &&
        <div className="schedule_title_icon">{weekstart.getMonth()+1}月{weekstart.getDate()}日-{weekend.getMonth()+1}月{weekend.getDate()}日</div>}

      <Button
        shape="circle"
        type="link"
        icon={<RightOutlined/>} 
        style={{
        	float:'right',
        	marginTop:'0px',
        	fontSize:'16px'
        }} 
        className="clickicon" 
        onClick={()=>{
        	if(type==="day") {
        		let n = currentdate.getTime() + 60*60*24*1000
        		setcurrentdate(new Date(n))
        	} else {
        		let begin = weekstart.getTime() + 7*60*60*24*1000
        		let end = weekend.getTime() + 7*60*60*24*1000
        		setweekstart(new Date(begin))
        		setweekend(new Date(end))
        	}
        }}
        />
    </div>
    <div 
      className="schedule_table"
      style={{border:'1px solid red'}}
    >

      <div className="day_container">
      	<div className="day_title">
      	  <div className="day_title_week">星期一</div>
      	  <div className="day_title_day">{weekstart.getMonth()+1}月{weekstart.getDate()}日</div>
      	</div>
      	{data1.map(item=>{
      	  if(item.begintime.length===4)
      	  	var begin = parseInt(item.begintime[0])
      	  else
      	  	var begin = parseInt(item.begintime[0]+item.begintime[1])
      	  if(item.endtime.length===4)
      	  	var end = parseInt(item.endtime[0])
      	  else
      	  	var end = parseInt(item.endtime[0]+item.endtime[1])
      	  var h = end - begin
      	  var top = begin-8
      	  {/*console.log(top)*/}
      	  return(
      	  <div 

      	    key={item.id}
      	    style={{
      	      position:'absolute',
      	      height:`${h*45}px`,
      	      width:'144px',
      	      top:`${54+top*45}px`,
      	      border:'1px solid red'
      	    }} 
      	    className="day_card"
      	    onClick={()=>{setopend(true)}}
      	  >
      	    <div className="day_card_title">{item.begintime}-{item.endtime}</div>
      	    {item.employer.map((item,index)=><Tag color="orange" key={index}>{item.name}</Tag>)}
      	  </div>)
        })}
      </div>
      
      <div className="day_container">
      	<div className="day_title">
      	  <div className="day_title_week">星期二</div>
      	  <div className="day_title_day">{weekstart.getMonth()+1}月{weekstart.getDate()}日</div>
      	</div>
      </div>
      <Update open={opendrawer} close={()=>{setopend(false)}}/>
    </div>
	</div>
}
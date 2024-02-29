import React,{useState,useEffect} from 'react'
import {Cascader} from 'antd';
import axios from 'axios'

export default function MultiSelection(props){
  const [option,setoption] = useState([])

  const onChange = (value) => {
    props.update(value)
  };
  var options=[]

  option.map(item=>{
    options.push({
      label: item.name,
      value: item.name,
    })
  })

  useEffect(()=>{
    axios({
      url:"position/",
      method:'get',
      headers:{
        "Authorization":"Bearer "+window.sessionStorage.getItem("token"),
        "Content-Type":"application/json"
      }
    }).then(res=>{
      setoption(res.data)
    })
  },[])
  return (
    <Cascader
      options={options}
      onChange={onChange}
      multiple
      maxTagCount="responsive"
      defaultValue={options}
      style={{
        width: '230px',
      }}
    />
  )
}
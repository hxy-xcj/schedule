import React,{useState,useEffect} from 'react'
import {
  Breadcrumb,
} from 'antd'
import RulesForm from '../../../components/rules/rules_form'


export default function Customization(){
  return<>
  <Breadcrumb
    items={[
      {title: '排班规则管理'},
      {title: '用户自定义规则'},
    ]}
    className="bread"
  />
    <div style={{height:'100vh'}}>
      <RulesForm data="1"></RulesForm>
    </div>
    </>
}
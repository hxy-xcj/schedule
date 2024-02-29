/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-03-07 08:53:48
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-02-04 17:10:20
 * @FilePath: \project\src\views\sandbox\rules-manage\regular.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import {Breadcrumb} from 'antd'
import RulesForm from '../../../components/rules/rules_form'

export default function Regular(){
	return<>
	<Breadcrumb
    items={[
      {title: '排班规则管理'},
      {title: '固定规则'},
    ]}
    className="bread"
  />
  <div style={{height:'100vh'}}>
	  <RulesForm data="0"/>
	</div>
  </>
}
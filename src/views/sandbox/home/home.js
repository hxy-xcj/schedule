import React from 'react'
import Notices from '../../../components/home/notices'
import Panel1 from '../../../components/home/panel1'
import Panel2 from '../../../components/home/panel2'
import Panel3 from '../../../components/home/panel3'
import Panel4 from '../../../components/home/panel4'
import '../../../components/home/home.css'
export default function Home(){

	return(
	<>
	  <div style={{marginLeft:'37px',marginTop:'50px'}}>
		<Notices></Notices>
		<Panel1></Panel1>
		<Panel2></Panel2>
	  </div>
	  <div style={{marginLeft:'37px',marginTop:'360px'}}>
	  	<Panel3></Panel3>
	  	<Panel4></Panel4>
	  </div>
	</>
	);
}
import { useState } from 'react';
import { 
  Button, 
  Form, 
  Input, 
  Modal, 
  InputNumber,
  Row,
} from 'antd';
import {
  PlusOutlined,
} from '@ant-design/icons';
import Upload from '../Upload/upload'
import { AreaSelect} from 'react-area-linkage';
import { pcaa } from 'area-data'; // v3 or higher


const validateMessages = {
  required: '请填写该项内容',
};

const CollectionCreateForm = ({ content,title,open, onCreate, onCancel }) => {
  const [form] = Form.useForm();
    

  return (
    <Modal 
      width={540}
      open={open}
      title={`添加${content}`}
      // okText="确定"
      // cancelText="取消"
      onCancel={onCancel}
      footer={null}
     >
      <Form
        validateMessages={validateMessages}
        form={form}
        layout="vertical"
        // horizontal
        name="form_in_modal"
        onFinish={(values)=>{
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              console.log(values)
              onCancel()
            })
            .catch((info) => {
              console.log('Validate Failed:', info);
            });
        }}
      >

      <Row style={{marginTop:'10px'}}>
      {title.map((item,index)=>{
      	if(item.type === 'string')
          return ( 
      	  <Form.Item
            key={index}
      	    style={{marginTop:'10px',marginLeft:'20px',fontSize:'24px'}}
            labelAlign="right"
            name={item.name}
            label={item.title}
            rules={[{required: true}]}
          >
            <Input placeholder={`请填写${item.title}`}  style={{width:'206px'}}/>
          </Form.Item>)
        if(item.type === 'region')
          return (
          <Form.Item
            key={index}
            style={{marginTop:'10px',marginLeft:'20px',fontSize:'24px'}}
            labelAlign="right"
            name={item.name}
            label={item.title}
            rules={[{required: true}]}
          >
            <AreaSelect 
              size="small" 
              type="text" 
              data={pcaa} 
              level={2}
            />     
          </Form.Item>)
        if(item.type === 'num')
          return (
          <Form.Item
            key={index}
            style={{marginTop:'10px',marginLeft:'20px',fontSize:'24px'}}
            labelAlign="right"
            name={item.name}
            label={item.title}
            rules={[{required: true}]}
          >
            <InputNumber  placeholder={`请填写${item.title}`}  style={{width:'206px'}}/>
          </Form.Item>
          )
      })}
      </Row>
      <div style={{margin:'10px 0px 30px 150px'}}>
        <Button 
          type="primary" 
          size="large"
          style={{
            backgroundColor:'#cccccc',
            color:'black'
          }}
          onClick={onCancel}
        >取消</Button>
        <Button 
          type="primary" 
          htmlType="submit" 
          size="large"
          style={{
            margin:'10px 0px 0px 30px',
            backgroundColor:'#ff5500'
          }}
        >确认</Button>
      </div> 
    </Form>
  </Modal>
  );
};
export default function AddInfo(props) {
  const [open, setOpen] = useState(false);

  const [fileList, setFileList] = useState()

  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setOpen(false);
  };
  return (
  <>
  {props.content==="门店"?
  <Upload 
    name="file" 
    excel="yes"
    fileList={fileList}
    onChange={({ fileList: newFileList }) => {
      setFileList(newFileList);
    }}
  />:''}
    <Button 
      type="primary"
      icon={<PlusOutlined />}
      style={{
        backgroundColor:'#ff5500',
        color:'white',
        height:'32px',
        width:'110px',
        fontSize:'16px',
        paddingTop:'1px',
        paddingLeft:'8px',
        textAlign:'left'
      }}
      onClick={()=>{
        setOpen(true)
        console.log(open)
      }}
    >
    {`添加${props.content}`}
    </Button>
      <CollectionCreateForm
        content={props.content}
        title={props.title}
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
      />
  </>
  );
};


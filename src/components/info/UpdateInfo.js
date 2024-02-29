import { 
  Button, 
  Form, 
  Input, 
  Modal, 
  InputNumber,
  Row
} from 'antd';
import { AreaSelect } from 'react-area-linkage';
import { pcaa } from 'area-data'; // v3 or higher
  
const validateMessages = {
  required: '请填写该项内容',
};


const CollectionCreateForm = ({ content,title,info,close }) => {
  const [form] = Form.useForm();

  return (
    <Modal 
      forceRender
      width={540}
      open={true}
      title={`修改${content}`}
      // okText="确定"
      // cancelText="取消"
      onCancel={close}
      footer={null}
     >
      <Form
        form={form}
        validateMessages={validateMessages}
        layout="vertical"
        // horizontal
        name="form_in_modal"
        initialValues={{...info}}
        onFinish={(values)=>{
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              console.log(values);
              close();
            })
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
            <Input placeholder={`请填写${item.title}`} style={{width:'206px'}}/>
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
              defaultArea={info.region}
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
            <InputNumber  
              placeholder={`请填写${item.title}`} 
              style={{width:'206px'}}
            />
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
          onClick={close}
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
export default function UpdateInfo(props) {
  return (
  <>
    <CollectionCreateForm
      content={props.content}
      title={props.title}
      info={props.info}
      close={props.close}
    />
  </>
  );
};




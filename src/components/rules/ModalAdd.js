import React,{useState} from 'react'
import { 
  Button,
  Col, 
  Form, 
  Input, 
  Row, 
  Select, 
  Modal,
  Space
} from 'antd';
import { 
  PlusOutlined,
  MinusCircleOutlined
} from '@ant-design/icons';
import dayjs from 'dayjs';


const options: Option[] = 
[
 {
  	value: 'num',
  	label: '数值'
 },
 {
 	  value: 'time_range',
  	label: '时间段'
 },
 {
    value:'mutichoices',
    label:'人员安排'
 }
]



//增加规则
const CollectionCreateForm = ({ open, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      width={440}
      open={open}
      title="创建新规则"
      footer={
        <div style={{marginTop:'-10px',paddingBottom:'10px',marginRight:'40px'}}>
          <Button 
            onClick={()=>{
              onCancel()
              form.resetFields()
            }
          }>取消</Button>
          <Button 
            type="primary" 
            style={{backgroundColor:'#ff5500'}}
            onClick={()=>{
              form.validateFields().then((values) => {
                console.log(values)
                // console.log(values.title)
                onCreate(values)
                form.resetFields()
              })
            }}
          >确定</Button>
        </div>
      }
      onCancel={onCancel}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >

      <Form.Item
        name="title"
        label="规则名称"
        rules={[
        {
          required: true,
          message: '请填写规则的名称',
        },
        ]}
      >
        <Input type="textarea" />
      </Form.Item>

      <Form.List name="content">
      {(fields, { add, remove }) => (
        <>
        {fields.map(({ key, name, ...restField }) => (
          <Space
            key={key}
            style={{
              display: 'flex',
              marginBottom: 8
            }}
          >
            <Form.Item
              {...restField}
              name={[name, 'label']}
              label="规则具体内容"
            >
              <Input type="textarea" placeholder="规则内容"/>
            </Form.Item>
            <Form.Item
              {...restField}
              label="要求"
              name={[name, 'type']}
            >
              <Select 
                options={options} 
                style={{marginLeft:'10px'}}
                placeholder="填写要求" 
              />
            </Form.Item>
            <MinusCircleOutlined 
              onClick={() => remove(name)}
              style={{marginLeft:'10px'}} 
            />
          </Space>
        ))}
        <Form.Item>
          <Button 
            type="dashed" 
            onClick={() => add()} 
            block 
            icon={<PlusOutlined />}
          >
            添加规则具体内容及要求
          </Button>
        </Form.Item>
        </>
      )}
      </Form.List>
      </Form>
    </Modal>
  );
};
export default function ModalAdd (props) {
	const [open,setopen] = useState(false)
  const onCreate = (values) => {
    props.update(values)
    // console.log('Received values of form: ', values);
    setopen(false);
  };
  return (
  	<>
  	<Row gutter={16}>
      <Col span={10} style={{ textAlign: 'left' }}> 
      	<Button
          className="orange"
          type="primary"
          onClick={() =>{
          	setopen(true)
          }}
          style={{width: '60%',backgroundColor:'#ff5500'}}
          icon={<PlusOutlined />}
        >
          添加规则
        </Button>
      </Col>
    </Row>
      <CollectionCreateForm
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setopen(false);
        }}
      />
      </>
  );
};

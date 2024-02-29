import react,{useState} from 'react'
import {
  Upload,
  Button
} from 'antd';
import { 
  PlusOutlined,
  UploadOutlined
} from '@ant-design/icons';


const uploadButton = (
<div>
  <PlusOutlined />
  <div style={{marginTop: 8}}>Upload</div>
</div>
);
const uploadExcel = (
<Button 
  type="primary"
  style={{
    fontSize:'16px',
    paddingTop:'1px',
    paddingLeft:'8px',
    backgroundColor:'#ff5500'
  }}
  icon={<UploadOutlined />}
>
  批量导入
</Button>
);



const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export default function Newupload(props){
  const [loading, setLoading] = useState(false);
  // const [fileList, setFileList] = useState()


  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
  }
  // const onChange = ({ fileList: newFileList }) => {
  //   setFileList(newFileList);
  // };
  return(
	<Upload
	  style={{display:'inline-block',float:'left'}}
      name={props.name}
      listType={props.excel?'':"picture-card"}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      onPreview={onPreview}
      fileList={props.fileList}
      // className="avatar-uploader"
      showUploadList={props.excel?false:true}
      // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      onChange={props.onChange}
    >
    {props.excel=="yes"?uploadExcel:uploadButton}
    </Upload>
    )
}
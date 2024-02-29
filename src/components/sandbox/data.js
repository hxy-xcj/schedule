import {
  createFromIconfontCN,
  HomeOutlined 
} from '@ant-design/icons';

function getItem(label, key, icon, children, type) {
  return {key,icon,children,label,type};
}
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_3955032_lavp6nvzku.js',
});
const icons = [
  <HomeOutlined style={{fontSize:'20px'}}/>,
  <IconFont style={{fontSize:'20px'}} type="icon-zuzhi" />,
  <IconFont style={{fontSize:'22px'}} type="icon-xinxiaoxi" />,
  <IconFont style={{fontSize:'22px'}} type="icon-wenjianjia_o" />,
  <IconFont style={{fontSize:'22px'}} type="icon-shuju" />,
  <IconFont style={{fontSize:'22px'}} type="icon-yonghu" />
]
const item1 = [
      //label, key, icon, children, type
  getItem('首页', '/home', icons[0]),
  getItem('组织管理', '/organization-manage', icons[2],[
      getItem('门店信息管理','/organization-manage/outlet'),
      getItem('员工管理','/organization-manage/personnel'),
      getItem('职位管理','/organization-manage/character-right'),
  ]),
  getItem('信息管理', '/center',icons[5], [
    getItem('个人信息管理', '/center/per-info'),
    getItem('公司信息管理', '/center/org-info')
  ]),
];
const item2 = [
      //label, key, icon, children, type
  getItem("排班规则管理", "/rules-manage", icons[1],[
      getItem('固定规则','/rules-manage/regular'),
      getItem('用户自定义规则','/rules-manage/customization')
  ]),
  getItem('组织管理', '/organization-manage', icons[2],[
      getItem('门店信息管理','/organization-manage/outlet'),
      getItem('员工管理','/organization-manage/personnel'),
  ]),

  getItem('智能预测管理', '/prediction-manage', icons[4], [
    getItem('业务量预测', '/prediction-manage/volumn-predict'),
    getItem('智能排班', '/prediction-manage/schedule-predict')
  ]),
  getItem('个人中心', '/center',icons[5], [
    getItem('个人排班表', '/center/schedule-mine'),
    getItem('个人信息管理', '/center/per-info')
  ]),
];
const item3 = [
  //label, key, icon, children, type
  getItem('门店排班表', '/center/schedule-outlet'),
  getItem('个人排班表', '/center/schedule-mine'),
  getItem('个人信息管理', '/center/per-info')
];




export {item1,item2,item3}

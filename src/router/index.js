import {
  AppstoreOutlined,
  ContainerOutlined,
} from '@ant-design/icons';
import Data from '../pages/Data';

export const menus = [
  {
    key:'/index/data',
    label:'数据中心',
    icon:<AppstoreOutlined/>
  },
  {
    key:'/index/user',
    label:'用户管理',
    icon:<ContainerOutlined/>,
    children:[
      {
        key:'/index/user/list',
        label:'用户列表',
        children:[
          {
            key:'/index/user/list/detail',
            label:'用户详情'
          }
        ]
      },
      {
        key:'/index/user/power',
        label:'权限分配',
      },
      
    ]
  }
]

export const routers = [
  {
    path:'/index/data',
    component:Data
  }
]

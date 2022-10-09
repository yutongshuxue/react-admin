import {
  AppstoreOutlined,
  ContainerOutlined,
} from '@ant-design/icons';
import Data from '../pages/Data';

export const menus = [
  {
    key:'/index/data/index',
    label:'数据中心',
    icon:<AppstoreOutlined/>
  },
  {
    key:'/index/user',
    label:'用户管理',
    icon:<ContainerOutlined/>,
    children:[
      {
        key:'/index/user/list/index',
        label:'用户列表',
      },
      {
        key:'/index/user/power/index',
        label:'权限分配',
      },
      
    ]
  },
  {
    key:'/index/book',
    label:'图书管理',
    icon:<ContainerOutlined/>,
    children:[
      {
        key:'/index/book/index',
        label:'图书列表',
      },
      {
        key:'/index/book/detail/index',
        label:'图书详情',
      },
      
    ]
  }
]
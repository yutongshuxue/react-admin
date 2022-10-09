import { Menu } from 'antd';
import React,{useEffect} from 'react';
import {menus} from '../../../../router/index'
import { getStorage } from '../../../../utils/getStorage';

// import logo from '../../../../imgs/logo192.png'

import './index.scss'

const HomeSider = ({collapsed,history}) => {

  const handleMenu = options => {
    // console.log(options,'options')
    history.push(options.key)
  }

  useEffect(() => {
    const token = getStorage('token')
    if(token){
      history.push('/index/data/index')
    }
  },[])

  return (
    <>
      <div className="home_sider_header">
        <div className='home_sider_header_logo'>
          <img src='https://img1.baidu.com/it/u=2393932983,2452028485&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=339' alt="logo" width='100%' height='100%'></img>
        </div>
        {collapsed?'':<div className='home_sider_header_title'>yutongshuxue_admin</div>}
      </div>
      <div className="home_sider_menu">

        <Menu
          defaultSelectedKeys={[menus[0].key]}
          defaultOpenKeys={[]}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={menus}
          onClick={handleMenu}
        />

      </div>
    </>
  )
}

export default HomeSider
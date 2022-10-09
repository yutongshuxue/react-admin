import { Menu } from 'antd';
import React,{useState,useEffect} from 'react';
import {menus} from '../../../../router/index'
import { getStorage } from '../../../../utils/getStorage';
import { getMenu } from '../../../../api/menu';

// import logo from '../../../../imgs/logo192.png'

import './index.scss'

const HomeSider = ({collapsed,history}) => {

  const [userMenu,setUserMenu] = useState([])

  const handleMenu = options => {
    // console.log(options,'options')
    history.push(options.key)
  }

  useEffect(() => {
    getMenu().then(res => {
      console.log('get_menu',res.data)
      const resultMenu = res.data

      if(resultMenu && resultMenu.length>0){
        const userMenu = []
        resultMenu.forEach(ele => {
          menus.forEach(item => {
            if(item.key === ele.key){
              // 没有children
              if(!ele.children || ele.children.length == 0){
                const menuItem = {
                  key:item.key,
                  label:item.label,
                  icon:item.icon
                }
                userMenu.push(menuItem)
              }else {  //有children

                ele.children.forEach(eleChild => {
                  item.children.forEach(itemChild => {
                    if(eleChild.key === itemChild.key){
                      const menuItem = {
                        key:item.key,
                        label:item.label,
                        icon:item.icon,
                        children:[]
                      }
                      const childMenu = {
                        key:itemChild.key,
                        label:itemChild.label,
                        icon:itemChild.icon
                      }
                      menuItem.children.push(childMenu)
                      userMenu.push(menuItem)
                    }
                  })
                })

              }
            }
          })
        })
        console.log(userMenu,'last userMenu')
        setUserMenu(userMenu)


        const token = getStorage('token')
        if(token){
          history.push(userMenu[0].key)
        }
      }
     
    })
    
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
          items={userMenu}
          onClick={handleMenu}
        />

      </div>
    </>
  )
}

export default HomeSider
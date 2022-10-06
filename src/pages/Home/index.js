import React, { useState, useEffect } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout,Button } from 'antd';
import { clearStorage } from '../../utils/getStorage';
import HomeSider from './components/HomeSider';
import HomeContent from './components/HomeContent'
import routers from '../../router/creatRoutes'
import './index.scss'
const { Header, Sider, Content } = Layout;


const Home = (props) =>{

    const [collapsed, setCollapsed] = useState(false);
    const [ width, setWidth ] = useState(250)

    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
      if(width == 62) {
        setWidth(250)
      }else{
        setWidth(62)
      }
      
    };

    const loginOut = () => {
      clearStorage()
      props.history.push('/')
    }

    // 自动工程化
    useEffect(() => {
      // 请求后台数据
      

    },[])

    return (
      <Layout>
        <Sider width={width}>
          <HomeSider collapsed={collapsed} {...props}/>
        </Sider>
        <Layout>
          <Header className="home_header_box">
            <div className='header_left'>
              <Button
                type="primary"
                onClick={toggleCollapsed}
                style={{
                  marginLeft:'-36px'
                }}
              >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </Button>
            </div>
            <div className='header_right'>
              <Button type='default' onClick={loginOut}>退出登录</Button>
            </div>
          </Header>
          <Content className='home_content_box'>
            <HomeContent routers={routers}></HomeContent>
          </Content>
        </Layout>
      </Layout>
      
    )

}

export default Home
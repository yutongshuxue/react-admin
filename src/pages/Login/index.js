
import React,{ Component } from "react";
import LoginForm from './components/LoginForm'
import loginConfig from '../../config/pages/loginConfig'
import {login} from '../../api/login/index'

import './index.scss'

class Login extends Component{
  // getToken = async () => {
  //   const res = await login()
  //   console.log(res)
  // }
  componentDidMount(){
    login().then(res => {
      console.log(res,'登录了么')
    })
  }
  render(){
    return (
      <div className="login" style={{...loginConfig.pageStyle}}>
        <LoginForm config={loginConfig}></LoginForm>
      </div>
    )
  }
}

export default Login
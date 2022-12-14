
import React,{ Component} from "react";
import LoginForm from './components/LoginForm'
import loginConfig from '../../config/pages/loginConfig'
import { getStorage } from "../../utils/getStorage";

import './index.scss'

class Login extends Component{

  collectValue = (value) => {
    // 父组件收集子组件数据
    // console.log(value,this.props,'from child')
    loginConfig.success({app:this,form:value})
    // this.props.history.push('/home')
  }

  toHome = () =>{
    console.log(this.props)
    this.props.history.push('/home')
  }

  componentDidMount(){
    const token = getStorage('token')
    // console.log(token,'token')
    if(token){
      this.props.history.push('/index')
    }
  }

  render(){
    return (
      <div className="login" style={{...loginConfig.pageStyle}}>
        <LoginForm config={loginConfig} collectValue={this.collectValue}></LoginForm>
        {/* <button onClick={this.toRouter}>路由跳转</button> */}
      </div>
    )
  }
}

export default Login
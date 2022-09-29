import { Button, Form, Input } from "antd"
import React from "react"
import PropTypes from 'prop-types';
import { LockOutlined, UserOutlined } from "@ant-design/icons"
import logo from '../../../imgs/logo192.png'
import { ACOUNT_PATTERN,PASSWORD_PATTERN } from "../../../config/common"

const LoginForm = (props) => {

  // 1、配置参数
  const {title,lable,showEye,comStyle,useDefaultRules} = props.config
  const { collectValue } = props
  console.log("useDefaultRules: ", useDefaultRules)

  const onFinish = (values) => {
    // console.log("Received values of form: ", props)
    collectValue(values)
  }
  // const valuesChange = (a, b) => {
  //   console.log("Received values of form: ", a, b)
  // }

  // 2、表单默认校验配置
  const userNamePattern = {pattern:ACOUNT_PATTERN,message:'账号必须由数字字母下划线组成的4-16位'}
  const passWordPattern = {pattern:PASSWORD_PATTERN,message:'密码由数字字母下划线6-16位组成'}
  const defaultRulesUserName = [{required:true,message:'请输入账号'},{...userNamePattern}]
  const defaultRulesPassWord = [{required:true,message:'请输入密码'},{...passWordPattern}]

  return (
    <div className="login_form_box">
      <div className="login_logo">
        {comStyle.logoUrl?<img src={comStyle.logoUrl} width='100%' height='100%' alt="logo"></img>:<img src={logo} width='100%' height='100%' alt="logo"></img>}
      </div>
      <div className="login_title">{title}</div>
      <div className="login_form_item_box">
        <Form
          size="large"
          name="normal_login"
          className="login-form"
          onFinish={onFinish}
          // onValuesChange={valuesChange}
        >
          <Form.Item
            name="username"
            label={lable[0]}
            rules={useDefaultRules?defaultRulesUserName:[]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            label={lable[1]}
            rules={useDefaultRules?defaultRulesPassWord:[]}
          >
            {showEye?<Input.Password />:<Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            /> }
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              block
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

LoginForm.prototype = {
  collectValue: PropTypes.func
}

export default LoginForm

import {login} from '../../api/login/index'
import { setStorage } from '../../utils/getStorage'

export default {
  pageStyle:{
    backgroundImage:`url(https://img1.baidu.com/it/u=2292521121,3927980941&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=276)`,
    backgroundSize:'100% 100%'
  },
  comStyle:{
    logoUrl:'https://img1.baidu.com/it/u=2393932983,2452028485&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=339'
  },
  title:'yutongshuxue_admin',
  lable:['账号：','密码：'],
  showEye:false,
  useDefaultRules:true,
  success:async ({app,form}) => {  //点击表单登录，表单收集好信息，帮你调用success,并把收集好的信息以形参的信息给您
    // console.log(app,form,'this form value')
    const {username,password} = form
    if(username && password){
      const res = await login({username,password})
      
      // 接下来就可以做本地存储token了。
      if(res.status === 200){
        const { token } = res.data
        setStorage('token',token,7*24*3600*1000)
        
        // 存储token后跳转到home页面
        app.props.history.push('/index')
      }
    }
  }
}
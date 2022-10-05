import { Fragment } from "react"
import { Redirect, Route } from "react-router-dom"; 
import { getStorage } from "../../utils/getStorage";

const ProviderPage = ({component: Component, ...rest}) => {
  
  return (
    <Fragment>
      <Route {...rest} render={routerProps => getStorage('token')?<Component {...routerProps}/>:<Redirect to="/"/>}></Route>
    </Fragment>
  )
}

export default ProviderPage
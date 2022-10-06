import React from "react";
import { Switch } from "react-router-dom";
import ProviderPage from '../../../providerPage';

const HomeContent = (props) => {

  const { routers } = props

  console.log(routers,'from parent routers')

  return (
    <Switch>
      {
        routers.map(item =>  <ProviderPage key={item.path} path={item.path} component={item.component}/>)
      }
    </Switch>
  )
}

export default HomeContent
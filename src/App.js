
import { BrowserRouter as Router,Route,Switch } from "react-router-dom"; 
import Home from './pages/Home'
import Login from './pages/Login'
import ProviderPage from "./pages/providerPage";
import NotFound from "./pages/NotFound";
import store from '@/redux/store/index'
import { Provider } from 'react-redux';

const App = () => {
  
  return (
    <Provider store={store}>

      <Router>
        <Switch>
          {/* <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route> */}
          <ProviderPage path="/index" component={Home}></ProviderPage>
          <Route exact path="/" component={Login}></Route>
          <Route path="/404" component={NotFound}></Route>
        </Switch>
        
      </Router>

    </Provider>
    
  )
}

export default App
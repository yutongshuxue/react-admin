import { BrowserRouter as Router,Route,Switch } from "react-router-dom"; 
import Home from './pages/Home'
import Login from './pages/Login'
const App = () => {
  return (
    <Router>
      <Switch>
        {/* <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route> */}
         <Route path="/home" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
      </Switch>
      
    </Router>
  )
}

export default App
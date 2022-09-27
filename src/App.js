import { BrowserRouter as Router,Route,Routes } from "react-router-dom"; 
import Home from './pages/Home'
import Login from './pages/Login'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      
    </Router>
  )
}

export default App
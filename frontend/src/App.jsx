
import './App.css'

import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage'
import {Route,Routes} from "react-router-dom"
import Register from './pages/RegisterPage';


function App() {

  return (
    <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={
      <IndexPage />} 
      />
      <Route path={'/login'} element={<LoginPage/>}/>
      <Route path={'/register'} element={<Register/>}></Route>
    </Route>
    </Routes>
  )
}

export default App

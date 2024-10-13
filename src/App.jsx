import HeaderWhite from "./components/Header/HeaderWhite";
import Footer from "./components/Footer/Footer";
import Home from './components/pages/Home/Home'
import Login from './components/pages/Login/Login'
// import Profile from './components/pages/profile/Profile'

import { Route, Routes } from "react-router-dom";
function App() {

  return (
    <>
      <HeaderWhite />
      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={Login} path="/login" />
      </Routes>
    </>
  )
}

export default App

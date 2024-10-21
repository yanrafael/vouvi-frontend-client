import HeaderWhite from "./components/Header/HeaderWhite";
import Home from './components/pages/Home/Home'
import Login from './components/pages/Login/Login'
import Title from "./components/Cards/FormTitle";

//-------

import SenaryQuestion from "./components/pages/Forms/SenaryQuestion";

//--------
// import Profile from './components/pages/profile/Profile'

import { Link, Route, Routes } from "react-router-dom";




function App() {

  return (
    <>
      {/* <HeaderWhite />
      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={Login} path="/login" />
      </Routes> */}

      <SenaryQuestion />
    </>
  )
}

export default App

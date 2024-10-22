import Home from './components/pages/Home/Home'
import Login from './components/pages/Login/Login'
import CreateAccount from './components/pages/CreateAccount/CreateAccount';
import Profile from './components/pages/profile/Profile';
import HeaderIntern from './components/Header/HeaderIntern';
import Store from './components/pages/Store/Store';
import About from './components/pages/About/About';
import Avatar from './components/pages/Avatar/Avatar';

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={Login} path="/login" />
        <Route Component={CreateAccount} path="/create-account" />
      </Routes>
    </>
  )
}

export default App

import Home from './components/pages/Home/Home'
import Login from './components/pages/Login/Login'
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
      </Routes>
      <About/> {/* QA */}
      <HeaderIntern /> {/* QA */}
      <Store/> {/* QA */}
      <Profile/>
      <Avatar/> {/* QA */}
    </>
  )
}

export default App

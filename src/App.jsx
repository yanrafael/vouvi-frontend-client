import Home from './components/pages/Home/Home'
import Login from './components/pages/Login/Login'
import Profile from './components/pages/profile/Profile';
import HeaderIntern from './components/Header/HeaderIntern';
import Avatar from './components/pages/Avatar/Avatar';
import { Route, Routes } from "react-router-dom";
function App() {

  return (
    <>
      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={Login} path="/login" />
      </Routes>
      <HeaderIntern /> {/* QA */}
      <Profile/>
      <Avatar/> {/* QA */}
    </>
  )
}

export default App

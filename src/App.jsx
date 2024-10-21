import Home from './components/pages/Home/Home'
import Login from './components/pages/Login/Login'
import Profile from './components/pages/profile/Profile';
import HeaderIntern from './components/Header/HeaderIntern';
import Store from './components/pages/Store/Store';
import { Route, Routes } from "react-router-dom";
function App() {

  return (
    <>
      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={Login} path="/login" />
      </Routes>
      <HeaderIntern /> {/* QA */}
      <Store/> {/* QA */}
      <Profile/>
    </>
  )
}

export default App

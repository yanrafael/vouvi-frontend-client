import Home from './components/pages/Home/Home'
import Login from './components/pages/Login/Login'

import { Route, Routes } from "react-router-dom";
function App() {

  return (
    <>
      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={Login} path="/login" />
      </Routes>
    </>
  )
}

export default App

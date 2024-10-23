import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import CreateAccount from "./components/pages/CreateAccount/CreateAccount";
import Store from "./components/pages/Store/Store";
import Avatar from "./components/pages/Avatar/Avatar";
import About from "./components/pages/About/About";
import Profile from "./components/pages/profile/Profile";
import GameHome from "./components/pages/GameHome/GameHome";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route Component={Home} path="/home" />
        <Route Component={Login} path="/login" />
        <Route Component={CreateAccount} path="/create-account" />
        <Route Component={Store} path="/store" />
        <Route Component={Avatar} path="/avatar" />
        <Route Component={About} path="/about" />
        <Route Component={Profile} path="/profile" />
        <Route Component={GameHome} path="/play" />
      </Routes>
    </>
  );
}

export default App;

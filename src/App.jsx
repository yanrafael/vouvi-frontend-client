import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import CreateAccount from "./components/pages/CreateAccount/CreateAccount";
import Store from "./components/pages/Store/Store";
import About from "./components/pages/About/About";
import Profile from "./components/pages/profile/Profile";
import Learn from "./components/pages/Learn/Learn";
import Avatar from "./components/pages/Avatar/Avatar";
import Ranking from "./components/pages/Rank/Ranking";
import UserReturn from "./components/pages/UserReturn/UserReturn";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route Component={Home} path="/home" />
        <Route Component={Home} path="/" />
        <Route Component={Home} path="/*" />
        <Route Component={Login} path="/login" />
        <Route Component={CreateAccount} path="/create-account" />
        <Route Component={Store} path="/store" />
        <Route Component={About} path="/about" />
        <Route Component={Profile} path="/profile" />
        <Route Component={Learn} path="/learn" />
        <Route Component={Avatar} path="/avatar" />
        <Route Component={Ranking} path="/ranking" />
        <Route Component={UserReturn} path="/UserReturn" />
      </Routes>
    </>
  );
}

export default App;

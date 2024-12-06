import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import CreateAccount from "./pages/CreateAccount/CreateAccount";
import Store from "./pages/Store/Store";
import About from "./pages/About/About";
import Profile from "./pages/Profile/Profile";
import Learn from "./pages/Learn/Learn";
import Avatar from "./pages/Avatar/Avatar";
import Ranking from "./pages/Rank/Ranking";
import UserReturn from "./pages/UserReturn/UserReturn";
import Planning from "./pages/Planning/Planning";
import Lesson1 from "./pages/Lessons/Lesson1";
import ScrollToTop from "./utils/scrollUp";
import { Route, Routes } from "react-router-dom";
import Plans from "./pages/Plans/Plans";

function App() {
  return (
    <>
      <ScrollToTop />
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
        <Route Component={UserReturn} path="/user-return" />
        <Route Component={Planning} path="/planning" />
        <Route Component={Lesson1} path="/lesson-1" />
        <Route Component={Plans} path="/plans" />
      </Routes>
    </>
  );
}

export default App;

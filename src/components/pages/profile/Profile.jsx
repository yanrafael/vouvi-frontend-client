import Top from "./Top";
import Mid from "./Mid";
import Low from "./Low";
import HeaderIntern from "../../Header/HeaderIntern";
import Footer from "../../Footer/Footer";
import { useState } from "react";
function Profile() {
  const [darkMode, setDarkMode] = useState(
    document.body.classList.contains("dark")
  );

  return (
    <>
      <HeaderIntern iconActiveNumber={1} darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Top />
      <Mid />
      <Low friends={"15"} />
      <Footer/>
    </>
  );
}
export default Profile;

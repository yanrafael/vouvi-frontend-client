import Top from "./Top";
import Low from "./Low";
import HeaderIntern from "../../Header/HeaderIntern";
import Footer from "../../Footer/Footer";
import AvatarFull from "../../Header/AvatarFull";
import { useState } from "react";
function Store() {
  const [darkMode, setDarkMode] = useState(
    document.body.classList.contains("dark"),
  );
  return (
    <>
      <HeaderIntern
        iconActiveNumber={3}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      >
        <AvatarFull name={"Ana Carolina"} xp={200} vcoins={928} />
      </HeaderIntern>
      <Top />
      <Low />
      <Footer />
    </>
  );
}
export default Store;

import Top from "./Top";
import HeaderIntern from "../../Header/HeaderIntern";
import AvatarFull from "../../Header/AvatarFull";
import { useState } from "react";
import Graphics from "./Graphics";

function Planning() {
  const [darkMode, setDarkMode] = useState(
    document.body.classList.contains("dark")
  );

  return (
    <>
      <HeaderIntern
        iconActiveNumber={1}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      >
        <AvatarFull name={"olaaa"} xp={"2000"} vcoins={"2000"} />
      </HeaderIntern>
      <Top />
      <Graphics />
    </>
  );
}
export default Planning;

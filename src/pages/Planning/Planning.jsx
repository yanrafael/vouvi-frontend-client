import { useState } from "react";

import HeaderIntern from "../../Header/HeaderIntern";
import AvatarFull from "../../Header/AvatarFull";
import Footer from "../../Footer/Footer";

import Top from "./Top";
import Graphics from "./Graphics";
import Goals from "./Goals";

function Planning() {
  const [darkMode, setDarkMode] = useState(
    document.body.classList.contains("dark"),
  );

  const [activeContent, setActiveContent] = useState("graphics");

  const handleClickGraphics = () => setActiveContent("graphics");
  const handleClickGoals = () => setActiveContent("goals");

  return (
    <>
      <HeaderIntern
        iconActiveNumber={1}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      >
        <AvatarFull name={"Miro"} xp={"2000"} vcoins={"2000"} />
      </HeaderIntern>

      <main className="m-auto w-11/12">
        <Top onClick={handleClickGraphics} onClick2={handleClickGoals} />

        {activeContent === "graphics" ? <Graphics /> : <Goals />}
      </main>

      <Footer />
    </>
  );
}

export default Planning;

import { useState } from "react";

import HeaderIntern from "../../Header/HeaderIntern";
import AvatarFull from "../../Header/AvatarFull";

import Top from "./Top";
import Graphics from "./Graphics";
import Goals from "./Goals";
import Transactions from "./Transactions";

function Planning() {
  const [darkMode, setDarkMode] = useState(
    document.body.classList.contains("dark")
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
        <AvatarFull name={"olaaa"} xp={"2000"} vcoins={"2000"} />
      </HeaderIntern>

      <main className="w-11/12 m-auto">
        <Top onClick={handleClickGraphics} onClick2={handleClickGoals} />

        {activeContent === "graphics" ? <Graphics /> : <Goals />}

        <Transactions />
      </main>
    </>
  );
}

export default Planning;

import { useState } from "react";

import HeaderIntern from "../../components/Header/HeaderIntern";
import AvatarFull from "../../components/Header/AvatarFull";
import Footer from "../../components/Footer/Footer";

// Modals
import showModal from "../../utils/showModal";
import NewIncome from "../../components/Modals/NewIncome";
import NewExpense from "../../components/Modals/NewExpense";
import NotesModal from "../../components/Modals/NotesModal";

import Top from "./Top";
import Graphics from "./Graphics";
import Goals from "./Goals";
import Note from "../../components/Modals/Note";
import BudgetModal from "../../components/Modals/BudgetModal";

function Planning() {
  const [darkMode, setDarkMode] = useState(
    document.body.classList.contains("dark"),
  );

  const [activeContent, setActiveContent] = useState("graphics");

  const handleClickGraphics = () => setActiveContent("graphics");
  const handleClickGoals = () => setActiveContent("goals");

  return (
    <>
      <NewIncome />
      <NewExpense />
      <NotesModal />
      <Note />
      <BudgetModal />
      <button onClick={() => showModal("budget-modal")}>click</button>
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

import HeaderWhite from "../../Header/HeaderWhite";
import Footer from "../../Footer/Footer";
import Top from "./Top";
import Mid from "./Mid";
import Low from "./Low";
import { useState } from "react";

function Home() {
  const [darkMode, setDarkMode] = useState(
    document.body.classList.contains("dark"),
  );

  return (
    <main className="overflow-x-hidden">
      <HeaderWhite darkMode={darkMode} setDarkMode={setDarkMode} />
      <Top />
      <Mid />
      <Low />
      <Footer darkMode={darkMode} />
    </main>
  );
}
export default Home;

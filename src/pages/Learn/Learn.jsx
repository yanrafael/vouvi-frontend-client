import Header from "../../components/Header/HeaderIntern";
import HeaderMobile from "../../components/Header/HeaderMobile";
import TopSection from "../../components/Learn/TopSection";
import AvatarFull from "../../components/Header/AvatarFull";
import Section1 from "./Sections/Section1";

function GameHome() {
  return (
    <>
      <Header>
        <AvatarFull name={"Josefa"} />
      </Header>

      <main>
        {/* Heading */}
        <TopSection
          section={1}
          sectionName={"Fundamentos"}
          playerCoins={938}
          playerLevel={27}
          playerXP={13_657}
        />

        {/* Trail */}
        <Section1 />
      </main>
      <HeaderMobile iconId={0} />
    </>
  );
}

export default GameHome;

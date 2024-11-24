import Header from "../../components/Header/HeaderIntern";
import HeaderMobile from "../../components/Header/HeaderMobile";
import Stage from "../../components/Learn/Stage";
import TopSection from "../../components/Learn/TopSection";

function GameHome() {
  return (
    <>
      <Header />
      <HeaderMobile iconId={0} />

      <main>
        {/* Heading */}
        <section></section>

        {/* Trail */}
        <section>
          <TopSection section={1} sectionName={"Fundamentos"} />
          <Stage />
        </section>
      </main>
    </>
  );
}

export default GameHome;

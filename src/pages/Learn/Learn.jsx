import Header from "../../components/Header/HeaderIntern";
import HeaderMobile from "../../components/Header/HeaderMobile";
import TopSection from "../../components/Learn/TopSection";
import Section from "./Section";
import AvatarBasic from "../../components/Header/AvatarBasic";

function Learn() {
  const stages = [
    {
      id: 0,
      icon: "mdi:book-open-page-variant",
      iconWidth: 40,
      top: 20,
      left: 25,
    },
    { id: 1, icon: "mdi:heart", iconWidth: 40, top: 200, left: 50 },
    { id: 2, icon: "mdi:star", iconWidth: 40, top: 380, left: 110 },
    { id: 3, top: 500, left: 250 },
    { id: 4, top: 470, left: 350 },
    { id: 5, top: 400, left: 450 },
  ];

  return (
    <>
      <Header>
        <AvatarBasic name={"Josefa"} />
      </Header>

      <main className="w-[100vw] px-[7vw]">
        {/* Heading */}
        <TopSection
          section={1}
          sectionName={"Fundamentos"}
          playerCoins={938}
          playerLevel={27}
          playerXP={13_657}
        />

        {/* Trail 1 */}
        <Section stages={stages} />
      </main>

      <HeaderMobile iconId={0} />
    </>
  );
}

export default Learn;

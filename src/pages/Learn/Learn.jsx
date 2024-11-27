import Header from "../../components/Header/HeaderIntern";
import HeaderMobile from "../../components/Header/HeaderMobile";
import TopSection from "../../components/Learn/TopSection";
import Trail from "./Trail";
import AvatarBasic from "../../components/Header/AvatarBasic";

import trailImage1 from "../../assets/images/learning-trail-1.svg";

function Learn() {
  const stages = [
    {
      id: 0,
      icon: "ic:round-menu-book",
      iconWidth: 50,
      top: 10,
      left: 10,
      finished: true,
    },
    {
      id: 1,
      icon: "iconoir:heart-solid",
      iconWidth: 50,
      top: 200,
      left: 35,
      finished: true,
    },
    {
      id: 2,
      icon: "bi:phone-fill",
      iconWidth: 50,
      top: 390,
      left: 110,
      finished: false,
    },
    { id: 3, top: 500, left: 250, finished: false },
    { id: 4, top: 470, left: 350, finished: false },
    { id: 5, top: 400, left: 450, finished: false },
    { id: 6, top: 300, left: 520, finished: false },
    { id: 7, top: 200, left: 580, finished: false },
    { id: 8, top: 160, left: 710, finished: false },
    { id: 9, top: 230, left: 850, finished: false },
  ];

  return (
    <>
      <Header>
        <AvatarBasic name={"Josefa"} />
      </Header>

      <main className="flex w-[100vw] flex-col items-center justify-center px-[7vw]">
        {/* Heading */}
        <TopSection
          section={1}
          sectionName={"Fundamentos"}
          playerCoins={938}
          playerLevel={27}
          playerXP={13_657}
        />

        {/* Trail 1 */}
        <Trail stages={stages} bg={trailImage1} />
      </main>

      <HeaderMobile iconId={0} />
    </>
  );
}

export default Learn;

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
      top: 1,
      left: 0.5,
      finished: true,
    },
    {
      id: 1,
      icon: "iconoir:heart-solid",
      iconWidth: 50,
      top: 27,
      left: 2,
      finished: true,
    },
    {
      id: 2,
      icon: "bi:phone-fill",
      iconWidth: 50,
      top: 51,
      left: 5,
      finished: false,
    },
    { id: 3, top: 80, left: 15, finished: false },
    { id: 4, top: 80, left: 23, finished: false },
    { id: 5, top: 70, left: 30, finished: false },
    { id: 6, top: 56, left: 35, finished: false },
    { id: 7, top: 40, left: 38, finished: false },
    { id: 8, top: 28, left: 45, finished: false },
    { id: 9, top: 28, left: 54, finished: false },
    {
      id: 10,
      icon: "bi:phone-fill",
      iconWidth: 50,
      top: 45,
      left: 61,
      finished: false,
    },
    {
      id: 11,
      top: 73,
      left: 70,
      finished: false,
    },
    {
      id: 12,
      top: 85,
      left: 78,
      finished: false,
    },
    {
      id: 13,
      top: 80,
      left: 86,
      finished: false,
    },
    {
      id: 14,
      top: 65,
      left: 91,
      finished: false,
    },
  ];

  return (
    <>
      <Header>
        <AvatarBasic name={"Josefa"} />
      </Header>

      <main className="flex w-[100vw] flex-col items-center justify-center px-0 md:px-[1vw] xl:px-[7vw]">
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

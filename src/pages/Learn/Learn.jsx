import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

import Header from "../../components/Header/HeaderIntern";
import HeaderMobile from "../../components/Header/HeaderMobile";
import TopSection from "../../components/Learn/TopSection";
import AvatarBasic from "../../components/Header/AvatarBasic";
import Trail from "./Trail";

import trailImage1 from "../../assets/images/learning-trail-1.svg";

function Learn() {
  const stages = [
    {
      id: 0,
      icon: "ic:round-menu-book",
      iconWidth: 50,
      top: 1,
      left: 1.5,
      open: true,
    },
    {
      id: 1,
      icon: "iconoir:heart-solid",
      iconWidth: 50,
      top: 27,
      left: 2.5,
      open: true,
    },
    {
      id: 2,
      icon: "bi:phone-fill",
      iconWidth: 50,
      top: 54,
      left: 5.8,
      open: false,
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
      top: 43,
      left: 61,
      open: false,
    },
    {
      id: 11,
      top: 73,
      left: 70,
      open: false,
    },
    {
      id: 12,
      top: 85,
      left: 78,
      open: false,
    },
    {
      id: 13,
      top: 80,
      left: 86,
      open: false,
    },
    {
      id: 14,
      top: 65,
      left: 91,
      open: false,
    },
    {
      id: 15,
      top: 37,
      left: 92,
      final: true,
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
        <div className="relative h-full w-full">
          <Trail stages={stages} bg={trailImage1} />
        </div>

        <LifeMeter lives={3} />
      </main>

      <div className="fixed bottom-0 w-screen">
        <HeaderMobile iconId={0} />
      </div>
    </>
  );
}

function LifeMeter({ lives = 3 }) {
  return (
    <div className="absolute bottom-5 left-32 flex h-fit w-fit gap-2 rounded-sm bg-secondary-200/20 p-3">
      <Icon
        icon={"mdi:thunder"}
        width={48}
        className={lives >= 1 ? "text-secondary-200" : "text-secondary-200/30"}
      />
      <Icon
        icon={"mdi:thunder"}
        width={48}
        className={lives >= 2 ? "text-secondary-200" : "text-secondary-200/30"}
      />
      <Icon
        icon={"mdi:thunder"}
        width={48}
        className={lives >= 3 ? "text-secondary-200" : "text-secondary-200/30"}
      />
    </div>
  );
}

LifeMeter.propTypes = {
  lives: PropTypes.number,
};

export default Learn;

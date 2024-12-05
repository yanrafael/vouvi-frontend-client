import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

import Header from "../../components/Header/HeaderIntern";
import HeaderMobile from "../../components/Header/HeaderMobile";
import TopSection from "../../components/Learn/TopSection";
import AvatarBasic from "../../components/Header/AvatarBasic";
import Trail from "./Trail";

import trailImage1 from "../../assets/images/learning-trail-1.svg";
import trailImage1Dark from "../../assets/images/learning-trail-1-dark.svg";

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
      open: false,
    },
    {
      id: 2,
      icon: "bi:phone-fill",
      iconWidth: 50,
      top: 54,
      left: 5.8,
      open: false,
    },
    { id: 3, top: 80, left: 15, open: false },
    { id: 4, top: 80, left: 23, open: false },
    { id: 5, icon: "mdi:bomb", iconWidth: 65, top: 66, left: 27, open: false },
    { id: 6, top: 56, left: 35, open: false },
    { id: 7, top: 40, left: 38, open: false },
    { id: 8, top: 28, left: 45, open: false },
    { id: 9, top: 28, left: 54, open: false },
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
      icon: "mdi:dice-multiple",
      iconWidth: 60,
      top: 81,
      left: 76,
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

  const bonusStages = [
    {
      id: 1,
      type: "accessory",
      iconColor: "black",
      color: "green",
      top: 30,
      left: 20,
      open: false,
    },
    {
      id: 2,
      type: "accessory",
      color: "yellow",
      iconColor: "black",
      top: 63,
      left: 48,
      open: false,
    },
    {
      id: 3,
      type: "accessory",
      color: "pink",
      top: 40,
      left: 75,
      open: false,
    },
  ];

  const nextArrow = (
    <svg
      tabIndex="0"
      width="49"
      height="84"
      viewBox="0 0 49 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="group absolute right-8 hidden cursor-pointer lg:block"
    >
      <path
        d="M2.08181 81.7755C0.910111 80.6035 0.251889 79.0141 0.251889 77.3568C0.251889 75.6995 0.910111 74.1101 2.08181 72.938L33.0193 42.0005L2.08181 11.063C0.943324 9.88428 0.313357 8.30551 0.327598 6.66678C0.341838 5.02805 0.999145 3.46048 2.15794 2.30167C3.31675 1.14287 4.88433 0.485569 6.52306 0.471333C8.16178 0.457089 9.74055 1.08706 10.9193 2.22554L46.2756 37.5818C47.4473 38.7538 48.1055 40.3433 48.1055 42.0005C48.1055 43.6578 47.4473 45.2472 46.2756 46.4193L10.9193 81.7755C9.74725 82.9472 8.15783 83.6055 6.50055 83.6055C4.84328 83.6055 3.25385 82.9472 2.08181 81.7755Z"
        className="fill-secondary-400 transition-all duration-200 group-hover:fill-secondary-200 dark:fill-white"
      />
    </svg>
  );

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
          <Trail
            stages={stages}
            bonusStages={bonusStages}
            bg={
              !document.body.classList.contains("dark")
                ? trailImage1
                : trailImage1Dark
            }
          />
        </div>

        {nextArrow}

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

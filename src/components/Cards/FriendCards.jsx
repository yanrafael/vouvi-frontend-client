import { Icon } from "@iconify/react";
import Vicon from "../../assets/images/vcoins-icon.svg";
function Friends({ icon, name, level, xp, vcoin }) {
  return (
    <div className="mt-5 flex justify-between rounded-md bg-[rgba(255,255,255,0.50);] p-2 text-base font-medium dark:bg-[#3c3c3c]">
      <div className="flex items-center">
        <Icon icon="solar:user-circle-bold-duotone" width="80px" color={icon} />
        <div className="ml-3 flex flex-col leading-[1] dark:text-white">
          <h2>{name}</h2>
          <p className="text-md font-light">Nível {level}</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="mx-4 flex rounded-[14px] bg-[rgba(141,141,141,0.30);] p-2 dark:bg-[#1F1F1F] dark:text-white">
          <h1 className="px-2 text-[30px] font-bold text-[#014085]">XP</h1>
          <p>{xp}</p>
        </div>
        <div className="flex items-center rounded-[14px] bg-[rgba(141,141,141,0.30);] p-2 dark:bg-[#1F1F1F] dark:text-white">
          <img width={"38px"} src={Vicon} alt="" />
          <p className="px-2">{vcoin}</p>
        </div>
      </div>
    </div>
  );
}
export default Friends;

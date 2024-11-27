import Avatar from "../../assets/images/avatar-sm-icon.svg";
import Vicon from "../../assets/images/vcoins-icon.svg";

import { Link } from "react-router-dom";
function AvatarFull({ name, xp, vcoins }) {
  return (
    <Link to="/profile">
      <div className="flex cursor-pointer items-center rounded-[60px] lg:p-[5px_11px_5px_14px] xl:p-[6px_13px_6px_16px] 2xl:p-[8px_16px_8px_20px] transition-colors duration-300 hover:bg-[#222222]/10 hover:dark:bg-[#222222]">
        <div className="mr-3 flex flex-col 2xl:leading-[1.1] lg:leading-[0.9]">
          <h1 className="text-right lg:text-[22px] xl:text-[25px] 2xl:text-[32px] font-medium text-black dark:text-white">
            {name}
          </h1>
          {/* Gambiarra dos infernos */}
          <div className="flex items-center lg:text-[17px] xl:text-[19px] 2xl:text-[24px] text-black dark:text-white">
            <div className="lg:mr-[7px] xl:mr-2 2xl:mr-3 flex">
              <p className="lg:mr-[2px] xl:mr-[3px] 2xl:mr-1 font-bold text-secondary-200">XP</p>
              <p>{xp}</p>
            </div>
            <div className="flex items-center">
              <img className="lg:mr-[2px] xl:mr-[3px] 2xl:mr-1 lg:w-[28px] xl:w-[31px] 2xl:w-[38px]" src={Vicon} alt="" />
              <p>{vcoins}</p>
            </div>
          </div>
        </div>
        <img src={Avatar} className={`lg:h-[57px] xl:h-[64px]`} alt="" />
      </div>
    </Link>
  );
}
export default AvatarFull;

import React from "react";
import { Icon } from "@iconify/react";
const GoalsHistory = () => {
  return (
    <div className="flex justify-between rounded-[18px] bg-black px-6 py-4">
      <div className="flex items-center gap-2">
        <div className={`h-fit w-fit flex-none rounded-full bg-orange-200 p-4`}>
          <Icon icon="fa6-solid:house" width="36px" className="text-white" />
        </div>
        <p className="text-base text-[#878787]">Casa</p>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-[32px] text-[#878787]">+R$260,00</p>
        <p className="text-md text-[#87878799]">01 de Outubro</p>
      </div>
    </div>
  );
};

export default GoalsHistory;

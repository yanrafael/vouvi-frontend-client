import { Icon } from "@iconify/react";
function AvatarBasic({ openModal, textColor, width }) {
  return (
    <>
      <div onClick={openModal} className={`flex cursor-pointer items-center ${width}`}>
        <div className="lg:mr-3 flex flex-col leading-[1.1]">
          <h1 className={`text-right text-[32px] font-medium dark:text-[#8D8D8D] ${textColor}`}>
            Ajustes
          </h1>
        </div>
        <div className="group flex w-10 h-10 text-[2rem] sm:text-[3rem] sm:h-[3.5rem] sm:w-[3.5rem] items-center justify-center rounded-full bg-black dark:bg-white">
          <Icon
            className=" relative right-[1px] text-white transition-transform duration-[800ms] group-hover:translate-x-[2px] group-hover:rotate-[180deg] dark:text-black"
            icon="solar:settings-bold"
          />
        </div>
      </div>
    </>
  );
}
export default AvatarBasic;

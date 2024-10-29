import { Icon } from "@iconify/react";
function AvatarBasic({openModal}) {
  return (
    <>
    <div onClick={openModal} className="flex items-center cursor-pointer">
      <div className="flex flex-col mr-3 leading-[1.1]">
        <h1 className="dark:text-[#8D8D8D] text-[32px] font-medium  text-right">
          Ajustes
        </h1>
      </div>
      <div className="bg-black dark:bg-white rounded-full flex w-[3.5rem] h-[3.5rem] items-center justify-center">
          <Icon
            className=" dark:text-black right-[1px] relative text-white"
            icon="solar:settings-bold"
            width="3rem"
          />
      </div>
    </div>
    </>
  );
}
export default AvatarBasic;

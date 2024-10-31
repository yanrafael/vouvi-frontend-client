import { Icon } from "@iconify/react";
import Friends from "../Cards/FriendCards";
function FriendsModal({ closeModal }) {
  return (
    <section className="w-full fixed dark:bg-black/50 bg-white/50 backdrop-blur-[25px] z-20 left-0 top-0 h-[fill-available] flex justify-center items-center overflow-y-hidden ">
      <div className=" h-[750px] flex flex-col w-8/12 bg-white dark:bg-[#1B1B1B] p-6 rounded-md  shadow-black shadow-2xl">
        <div className="flex justify-between items-center">
          <h1 className="dark:text-white text-[32px] font-medium  text-right">
            Adicionar amigo
          </h1>

          <div className="flex gap-5 items-center">
            <Icon
              onClick={closeModal}
              className=" text-black dark:text-white right-[1px] relative opacity-35 cursor-pointer"
              icon="carbon:close-filled"
              width="3rem"
            />
          </div>
        </div>

        <div className="bg-[#8D8D8D33] dark:bg-[#3D3D3D4D] flex p-2 justify-between rounded-md mt-5">
          <input className="bg-white bg-opacity-0 outline-none rounded-md w-full placeholder:text-[24px] placeholder:text-[#02020B80] placeholder:dark:text-[#F5F5F44D] placeholder:font-medium text-[24px]" type="text" placeholder="Digite o nome do seu amigo" />
            <Icon icon='fluent:search-12-filled' width='36px' className="text-[#878787]"/>
        </div>

      </div>
    </section>
  );
}
export default FriendsModal;

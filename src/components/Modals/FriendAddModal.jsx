import { Icon } from "@iconify/react";
import Friends from "../Cards/FriendCards";
function FriendsModal({ closeModal }) {
  return (
    <section className="fixed left-0 top-0 z-20 flex h-full w-full items-center justify-center overflow-y-hidden bg-white/50 backdrop-blur-[25px] dark:bg-black/50">
      <div className="flex h-[90vh] w-11/12 flex-col rounded-md bg-white p-6 shadow-2xl shadow-black md:w-10/12 lg:w-8/12 dark:bg-[#1B1B1B]">
        <div className="flex items-center justify-between">
          <h1 className="text-right text-[26px] sm:text-[32px] font-medium dark:text-white">
            Adicionar amigo
          </h1>

          <div className="flex items-center gap-5">
            <Icon
              onClick={closeModal}
              className="relative right-[1px] cursor-pointer text-black opacity-35 dark:text-white"
              icon="carbon:close-filled"
              width="3rem"
            />
          </div>
        </div>

        <div className="mt-5 flex justify-between rounded-md bg-[#8D8D8D33] p-2 dark:bg-[#3D3D3D4D]">
          <input
            className="w-full rounded-md bg-white bg-opacity-0 text-[24px] outline-none placeholder:text-[24px] placeholder:font-medium placeholder:text-[#02020B80] dark:text-white placeholder:dark:text-[#F5F5F44D]"
            type="text"
            placeholder="Digite o nome do seu amigo"
          />
          <Icon
            icon="fluent:search-12-filled"
            width="36px"
            className="text-[#878787]"
          />
        </div>
      </div>
    </section>
  );
}
export default FriendsModal;

import { Icon } from "@iconify/react";
import Friends from "../Cards/FriendCards";
function FriendsModal({ closeModal, openModal }) {
  return (
    <section className="fixed left-0 top-0 z-20 flex h-[fill-available] w-full items-center justify-center overflow-y-hidden bg-white/50 backdrop-blur-[25px] dark:bg-black/50">
      <div className="flex h-[750px] w-8/12 flex-col rounded-md bg-white p-6 shadow-2xl shadow-black dark:bg-[#1B1B1B]">
        <div className="flex items-center justify-between">
          <h1 className="text-right text-[32px] font-medium dark:text-white">
            Amigos:
          </h1>

          <div className="flex items-center gap-5">
            <div
              onClick={openModal}
              className="flex cursor-pointer items-center rounded-xl border-4 border-black px-2 text-[32px] dark:border-white dark:text-white"
            >
              <Icon icon="typcn:plus" />
              <p className="mx-3">Adicionar amigo</p>
            </div>
            <Icon
              onClick={closeModal}
              className="relative right-[1px] cursor-pointer text-black opacity-35 dark:text-white"
              icon="carbon:close-filled"
              width="3rem"
            />
          </div>
        </div>
        <div className="flex flex-col overflow-y-scroll">
          <Friends
            icon={"red"}
            name={"Wesley rocha"}
            level={"15"}
            xp={"7.000"}
            vcoin={"5.000"}
          />
          <Friends
            icon={"red"}
            name={"Wesley rocha"}
            level={"15"}
            xp={"7.000"}
            vcoin={"5.000"}
          />
          <Friends
            icon={"red"}
            name={"Wesley rocha"}
            level={"15"}
            xp={"7.000"}
            vcoin={"5.000"}
          />
          <Friends
            icon={"red"}
            name={"Wesley rocha"}
            level={"15"}
            xp={"7.000"}
            vcoin={"5.000"}
          />
          <Friends
            icon={"red"}
            name={"Wesley rocha"}
            level={"15"}
            xp={"7.000"}
            vcoin={"5.000"}
          />
          <Friends
            icon={"red"}
            name={"Wesley rocha"}
            level={"15"}
            xp={"7.000"}
            vcoin={"5.000"}
          />
          <Friends
            icon={"red"}
            name={"Wesley rocha"}
            level={"15"}
            xp={"7.000"}
            vcoin={"5.000"}
          />
        </div>
      </div>
    </section>
  );
}
export default FriendsModal;

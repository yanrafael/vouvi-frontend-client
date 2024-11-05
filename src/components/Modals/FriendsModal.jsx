import { Icon } from "@iconify/react";
import Friends from "../Cards/FriendCards";
function FriendsModal({ closeModal,openModal }) {
  return (
    <section className="w-full fixed dark:bg-black/50 bg-white/50 backdrop-blur-[25px] z-20 left-0 top-0 h-full flex justify-center items-center overflow-y-hidden ">
      <div className=" h-[750px] flex flex-col w-8/12 bg-white dark:bg-[#1B1B1B] p-6 rounded-md  shadow-black shadow-2xl">
        <div className="flex justify-between items-center">
          <h1 className="dark:text-white text-[32px] font-medium  text-right">
            Amigos:
          </h1>

          <div className="flex gap-5 items-center">
              <div onClick={openModal} className="flex text-[32px] px-2 items-center border-4 rounded-xl border-black dark:border-white cursor-pointer dark:text-white">
                <Icon icon="typcn:plus" />
                <p className="mx-3 ">Adicionar amigo</p>
              </div>
              <Icon
                onClick={closeModal}
                className=" text-black dark:text-white right-[1px] relative opacity-35 cursor-pointer"
                icon="carbon:close-filled"
                width="3rem"
              />
          </div>
        </div>
        <div className=" flex flex-col overflow-y-scroll">
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

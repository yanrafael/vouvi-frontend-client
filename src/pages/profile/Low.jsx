import Friends from "../../components/Cards/FriendCards";
import { Icon } from "@iconify/react";
function Low({ friends, openModal, openModal2 }) {
  return (
    <section className="m-auto mt-20 w-11/12 text-[32px] sm:text-[40px] font-medium dark:text-white">
      <div className="group flex flex-col rounded-md bg-[rgba(124,32,190,0.50);] p-5 transition-colors duration-500 hover:bg-primary-200 dark:bg-[#1e1e1e] dark:hover:bg-[#282828]">
        <div className="flex items-start flex-col sm:flex-row justify-between text-[#471650] group-hover:text-white dark:text-white flex-wrap">
          <h1 className="transition-colors duration-500 sm:mx-0 mx-3">Amigos: {friends}</h1>
          
          <div
            onClick={openModal2}
            className="flex flex-row-reverse sm:flex-row cursor-pointer items-center rounded-xl sm:border-4 border-[#471650] px-2 text-[25px] sm:text-[32px] transition-colors duration-500 hover:bg-black group-hover:border-white dark:border-white dark:hover:bg-white dark:hover:text-black"
          >
            <Icon icon="typcn:plus" />
            <p className="mx-1">Adicionar amigo</p>
          </div>
        </div>
        <div>
          <Friends
            icon={"red"}
            name={"Wesley rocha"}
            level={"15"}
            xp={"7.000"}
            vcoin={"5.000"}
          />
          <Friends
            icon={"blue"}
            name={"Wesley rocha"}
            level={"15"}
            xp={"7.000"}
            vcoin={"5.000"}
          />
          <Friends
            icon={"green"}
            name={"Wesley rocha"}
            level={"15"}
            xp={"7.000"}
            vcoin={"5.000"}
          />
        </div>
        <div className="mx-5 mt-3 flex items-center justify-end text-[#471650] group-hover:text-white dark:text-white">
          <p
            onClick={openModal}
            className="cursor-pointer text-[32px] font-medium transition-colors duration-500"
          >
            Ver todos
          </p>
          <Icon
            onClick={openModal}
            icon="prime:sort-down-fill"
            className="cursor-pointer transition-colors duration-500"
          />
        </div>
      </div>
    </section>
  );
}
export default Low;

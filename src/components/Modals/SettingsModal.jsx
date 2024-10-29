import { Icon } from "@iconify/react";
import { useState } from "react";
function SettingsModal({closeModal}) {
  const [ballAnimation, noBallAnimation] = useState(true);
  const BA = "translate-x-14";

  const Call = () => {
    noBallAnimation(!ballAnimation);
    document.body.classList.toggle("dark");
    setDarkMode((dm) => !dm);
  };
  return (
    <section className="w-full fixed dark:bg-black/50 bg-white/50 backdrop-blur-[25px] z-20 left-0 top-0 h-[fill-available] flex justify-center items-center overflow-y-hidden ">
        <div className=" flex flex-col w-8/12 bg-white dark:bg-[#1B1B1B] p-6 rounded-md h-fit shadow-black shadow-2xl">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-black dark:bg-white rounded-full flex w-[3.5rem] h-[3.5rem] items-center justify-center">
                <Icon
                  className=" dark:text-black right-[1px] relative text-white"
                  icon="solar:settings-bold"
                  width="3rem"
                />
              </div>
              <h1 className="dark:text-white text-[32px] font-medium  text-right">
                Ajustes
              </h1>
            </div>
            <Icon
                onClick={closeModal}
              className=" text-black dark:text-white right-[1px] relative opacity-35 cursor-pointer"
              icon="carbon:close-filled"
              width="3rem"
            />
          </div>
          <div className="bg-[rgba(141,141,141,0.30);] flex items-center justify-between p-4 rounded-md mt-5">
            <div className="flex flex-col ">
              <h1 className="dark:text-white text-[32px] font-medium ">
                Plano atual
              </h1>
              <p className="text-md text-primary-200 font-medium">
                Atualize seu plano hoje mesmo
              </p>
            </div>
            <div className="flex flex-col">
              <h1 className="dark:text-white text-[32px] font-medium  text-right">
                Essencial
              </h1>
              <p className="text-md text-primary-200 font-medium">Seja Premium</p>
            </div>
          </div>
          <div className="bg-[rgba(141,141,141,0.30);] flex items-center justify-between p-4 rounded-md mt-5">
            <div className="flex flex-col ">
              <h1 className="dark:text-white text-[32px] font-medium ">
                Modo claro
              </h1>
              <p className="text-md text-primary-200 font-medium">
                Aqui é você que escolhe a visualização
              </p>
            </div>
            <div
              onClick={Call}
              className="w-24 h-10 bg-black dark:bg-white rounded-md flex items-center p-1 cursor-pointer"
            >
              <div
                className={`bg-white dark:bg-black w-8 h-8 rounded-full transition-transform duration-300 ${
                  ballAnimation ? BA : ""
                }`}
              ></div>
            </div>
          </div>
          <div className="bg-[#E3000033] flex items-center justify-between px-4 py-2 rounded-md mt-32 cursor-pointer">
            <div className="flex flex-col ">
              <h1 className="dark:text-white text-[32px] font-medium ">
                Sair da conta
              </h1>
              <p className="text-md text-red font-medium">
                Aqui é você que escolhe a visualização
              </p>
            </div>
            <Icon
              className=" text-red"
              icon="solar:exit-bold"
              width="4rem"
            />
          </div>
          <p className="m-auto text-[24px] font-semibold mt-4 dark:text-white text-black">Versão 1.0.0 (beta)</p>
        </div>
    </section>
  );
}
export default SettingsModal;

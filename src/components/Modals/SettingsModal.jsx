import { Icon } from "@iconify/react";
import { useState } from "react";
function SettingsModal({ closeModal }) {
  const [ballAnimation, noBallAnimation] = useState(true);
  const BA = "translate-x-14";

  const Call = () => {
    noBallAnimation(!ballAnimation);
    document.body.classList.toggle("dark");
    setDarkMode((dm) => !dm);
  };
  return (
    <section className="fixed left-0 top-0 z-20 flex h-[fill-available] w-full items-center justify-center overflow-y-hidden bg-white/50 backdrop-blur-[25px] dark:bg-black/50">
      <div className="flex h-fit w-8/12 flex-col rounded-md bg-white p-6 shadow-2xl shadow-black dark:bg-[#1B1B1B]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-full bg-black dark:bg-white">
              <Icon
                className="relative right-[1px] text-white dark:text-black"
                icon="solar:settings-bold"
                width="3rem"
              />
            </div>
            <h1 className="text-right text-[32px] font-medium dark:text-white">
              Ajustes
            </h1>
          </div>
          <Icon
            onClick={closeModal}
            className="relative right-[1px] cursor-pointer text-black opacity-35 dark:text-white"
            icon="carbon:close-filled"
            width="3rem"
          />
        </div>
        <div className="mt-5 flex items-center justify-between rounded-md bg-[rgba(141,141,141,0.30);] p-4">
          <div className="flex flex-col">
            <h1 className="text-[32px] font-medium dark:text-white">
              Plano atual
            </h1>
            <p className="text-md font-medium text-primary-200">
              Atualize seu plano hoje mesmo
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-right text-[32px] font-medium dark:text-white">
              Essencial
            </h1>
            <p className="text-md font-medium text-primary-200">Seja Premium</p>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between rounded-md bg-[rgba(141,141,141,0.30);] p-4">
          <div className="flex flex-col">
            <h1 className="text-[32px] font-medium dark:text-white">
              Modo claro
            </h1>
            <p className="text-md font-medium text-primary-200">
              Aqui é você que escolhe a visualização
            </p>
          </div>
          <div
            onClick={Call}
            className="flex h-10 w-24 cursor-pointer items-center rounded-md bg-black p-1 dark:bg-white"
          >
            <div
              className={`h-8 w-8 rounded-full bg-white transition-transform duration-300 dark:bg-black ${
                ballAnimation ? BA : ""
              }`}
            ></div>
          </div>
        </div>
        <div className="mt-32 flex cursor-pointer items-center justify-between rounded-md bg-[#E3000033] px-4 py-2">
          <div className="flex flex-col">
            <h1 className="text-[32px] font-medium dark:text-white">
              Sair da conta
            </h1>
            <p className="text-md font-medium text-red">
              Aqui é você que escolhe a visualização
            </p>
          </div>
          <Icon className="text-red" icon="solar:exit-bold" width="4rem" />
        </div>
        <p className="m-auto mt-4 text-[24px] font-semibold text-black dark:text-white">
          Versão 1.0.0 (beta)
        </p>
      </div>
    </section>
  );
}
export default SettingsModal;

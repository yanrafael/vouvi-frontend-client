import { Icon } from "@iconify/react";
import { useState } from "react";
import convertFloat from "../../utils/convertFloat";

import showModal from "../../utils/showModal";

function Top({ onClick, onClick2 }) {
  const [balance, setBalance] = useState(6000);
  const [income, setIncome] = useState(2500);
  const [expense, setExpense] = useState(6021);

  const [btnOn, setBtnOn] = useState(0);

  const handleClick = (n) => {
    setBtnOn(n);
    if (n === 0) {
      onClick(0);
    } else if (n === 1) {
      onClick2(1);
    }
  };

  const [colorCatIcon, setCatIconColor] = useState(null);

  const catIcon = (
    <svg
      className="w-10"
      viewBox="0 0 39 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="transition-colors duration-500"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.15092 1.27999C4.2131 1.07731 4.27794 0.874585 4.34551 0.671875C4.5304 0.777367 4.72866 0.8956 4.93797 1.02593C5.12266 1.14093 5.31595 1.26535 5.51627 1.39876C8.0298 3.07269 11.65 6.16161 13.2531 9.80496C15.2056 9.25601 17.3084 8.95712 19.4996 8.95712C21.6739 8.95712 23.7611 9.2514 25.7007 9.79224C27.3067 6.15442 30.9214 3.07074 33.432 1.39876C33.6323 1.26535 33.8256 1.14093 34.0103 1.02593C34.2196 0.8956 34.4179 0.777367 34.6028 0.671875C34.6703 0.874585 34.7352 1.07731 34.7974 1.27999L34.8122 1.32867C36.4614 6.74078 36.2203 12.1128 35.4743 16.1063C37.1465 18.3092 38.1077 20.8868 38.1077 23.6415C38.1077 31.7514 29.7766 38.3258 19.4996 38.3258C9.22271 38.3258 0.891602 31.7514 0.891602 23.6415C0.891602 20.9093 1.83716 18.3514 3.48412 16.1604C2.73021 12.1614 2.47937 6.76525 4.13604 1.32867L4.15092 1.27999Z"
        fill={colorCatIcon ? "#007FFF" : "#878787"}
      />
    </svg>
  );

  return (
    <div className="w-full">
      <section className="mt-10 flex w-full justify-between gap-2">
        <div className="flex w-2/12 flex-col justify-center whitespace-nowrap rounded-md bg-[#DDDDDD] px-4 py-4 leading-[1.1] dark:bg-[#1B1B1B] dark:text-white">
          <p className="text-[36px] font-light">Saldo</p>
          <h1 className="text-[36px] font-medium">
            R$ {convertFloat(balance)}
          </h1>
        </div>

        <div className="flex flex-col gap-2 text-[32px] leading-[1.1]">
          <div
            onClick={() => showModal("new-income")}
            className="group relative cursor-pointer rounded-md bg-[#84CE7A99] px-4 py-3 font-medium text-[#14A900] hover:bg-[#14A900] hover:text-[#133810] dark:bg-[rgba(11,85,5,0.50);] transition-all duration-300 hover:transition-none hover:duration-0"
          >
            {/* Animação Hover */}
            <div
              className={`absolute inset-0 flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-300`}
            >
              <Icon icon="typcn:plus" width="25px" className="" />
              <h1 className="">Adicionar</h1>
            </div>

            <div
              className={`flex items-center gap-1 group-hover:opacity-0`}
            >
              <Icon icon="icon-park-solid:up-one" width="25px" className="" />
              <h1 className="">R$ {convertFloat(income)}</h1>
            </div>
          </div>

          <div
            onClick={() => showModal("new-expense")}
            className="group relative cursor-pointer rounded-md bg-[#A9000066] px-4 py-3 font-medium text-[#E30000] hover:bg-[#E30000] hover:text-[#390C0C] transition-all duration-300 hover:transition-none hover:duration-0"
          >
            {/* Animação Hover */}
            <div
              className={`absolute inset-0 flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-300`}
            >
              <Icon icon="typcn:plus" width="25px" className="" />
              <h1 className="">Adicionar</h1>
            </div>

            <div
              className={`flex items-center gap-1 group-hover:opacity-0`}
            >
              <Icon icon="icon-park-solid:down-one" width="25px" />
              <h1 className="">R$ {convertFloat(expense)}</h1>
            </div>
          </div>
        </div>

        <div className="flex w-5/12 flex-col rounded-md bg-[#DDDDDD] p-2 dark:bg-[#1B1B1B]">
          <p className="p-2 text-base font-light dark:text-white">Missões</p>
          <div className="overflow-hidden whitespace-nowrap rounded-md bg-white p-2 text-[32px] text-black">
            <p className="slide-track animate-scroll relative left-[800px]">
              Anote três pequenas economias que você fez hoje
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 whitespace-nowrap text-[32px] leading-[1.1]">
          <div
            onClick={() => showModal("notes-modal")}
            className="flex cursor-pointer items-center gap-1 rounded-md bg-[#FFB51533] px-4 py-3 font-medium text-[#FFB515]"
          >
            <Icon icon="solar:notes-bold" className="" width="25px" />
            <h1 className="">Anotações livres</h1>
          </div>
          <div
            onClick={() => showModal("budget-modal")}
            className="flex cursor-pointer items-center gap-1 rounded-md bg-[#FF48A733] px-4 py-3 font-medium text-[#FF48A7]"
          >
            <Icon icon="iconoir:wallet-solid" width="25px" />
            <h1 className="">Orçamento</h1>
          </div>
        </div>
      </section>

      <section className="mt-10 flex w-full items-center justify-between rounded-md p-4">
        <div className="flex justify-between gap-7">
          <button
            onClick={() => handleClick(0)}
            className={`${
              btnOn == 0
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-[#8D8D8D] text-white transition-colors duration-500 hover:bg-[#282828]"
            } rounded-md p-4 text-base`}
          >
            Planejar
          </button>
          <button
            onClick={() => handleClick(1)}
            className={`${
              btnOn == 1
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-[#8D8D8D] text-white transition-colors duration-500 hover:bg-[#282828]"
            } rounded-md p-4 text-base`}
          >
            Metas
          </button>
        </div>

        <div className="flex justify-between gap-7 text-[#8D8D8D] dark:text-white">
          {btnOn == 1 ? (
            <>
              <div
                onClick={() => showModal("")}
                className="flex h-20 cursor-pointer items-center justify-center gap-4 rounded-md border-4 border-[#8D8D8D] px-6 transition-colors duration-500 hover:border-secondary-200 hover:text-secondary-200"
              >
                <Icon icon={"typcn:plus"} className="text-base" />
                <p className="text-base">Criar Meta</p>
              </div>
            </>
          ) : (
            <>
              <div
                onMouseEnter={() => setCatIconColor(true)}
                onMouseLeave={() => setCatIconColor(false)}
                onClick={() => showModal("tip-from-fin")}
                className="flex h-20 cursor-pointer items-center justify-center gap-6 rounded-md border-4 border-[#8D8D8D] px-6 transition-colors duration-500 hover:border-secondary-200 hover:text-secondary-200"
              >
                {catIcon}
                <p className="text-base">Dicas do Fin</p>
              </div>
              <div className="flex h-20 items-center justify-center gap-6 rounded-md border-4 border-[#8D8D8D] px-6 transition-colors duration-500 hover:border-secondary-200 hover:text-secondary-200">
                <p className="flex flex-row items-center justify-center gap-4 text-nowrap text-base">
                  01 Out - 10 Out |{" "}
                  <Icon icon={"bi:calendar-fill"} width={40} />
                </p>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

export default Top;

import { Icon } from "@iconify/react";
import { useState } from "react";
import convertFloat from "../../utils/convertFloat"

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
      className="2xl:w-10 xl:w-8 lg:w-7 w-5"
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
    <div className="lg:w-full md:w-[97%]">
      <section className="2xl:mt-10 lg:mt-8 sm:mt-6 mt-5 flex w-full justify-between lg:gap-2 md:gap-[1px] 2xl:h-auto">
        <div className="flex 2xl:w-2/12 lg:w-[18%] md:w-[15%] sm:w-[63%] xs:w-[57%] w-[50%] flex-col justify-center whitespace-nowrap xl:rounded-md lg:rounded-sm rounded-[12px] bg-[#DDDDDD] 2xl:px-4 2xl:py-4 xl:px-3 md:px-2 md:py-0 px-3 sm:py-4 2xl:gap-3 leading-[1.1] dark:bg-[#1B1B1B] dark:text-white">
          <p className="2xl:text-[36px] xl:text-[32px] lg:text-md md:text-[16px] sm:text-[20px] text-[16px] font-light">Saldo</p>
          <h1 className="2xl:text-[36px] xl:text-[32px] lg:text-md md:text-[16px] sm:text-[32px] xs:text-[24px] font-medium">
            R$ {convertFloat(balance)}
          </h1>
        </div>

        <div className="flex flex-col lg:gap-2 gap-1 2xl:text-[32px] xl:text-[28px] lg:text-md md:text-[16px] sm:text-[20px] text-[16px] leading-[1.1] whitespace-nowrap">
          <div
            onClick={() => showModal("new-income")}
            className="group relative cursor-pointer xl:rounded-md lg:rounded-sm rounded-[8px] bg-[#84CE7A99] xl:px-4 xl:py-4 lg:px-3 lg:py-2 md:px-1 md:py-[1%] sm:px-4 py-2 font-medium text-[#14A900] transition-all duration-300 hover:bg-[#14A900] hover:text-[#133810] hover:transition-none hover:duration-0 dark:bg-[rgba(11,85,5,0.50);]"
          >
            {/* Animação Hover */}
            <div
              className={`absolute inset-0 flex items-center justify-center lg:gap-1 opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-300`}
            >
              <Icon icon="typcn:plus" width="25px" className="2xl:w-[25px] xl:w-[20px] lg:w-full md:w-4 xs:w-5 w-4" />
              <h1 className="">Adicionar</h1>
            </div>

            <div className={`flex items-center gap-1 group-hover:opacity-0`}>
              <Icon icon="icon-park-solid:up-one" width="25px" className="2xl:w-auto lg:w-full md:w-4 xs:w-5 w-4" />
              <h1 className="">R$ {convertFloat(income)}</h1>
            </div>
          </div>

          <div
            onClick={() => showModal("new-expense")}
            className="group relative cursor-pointer xl:rounded-md lg:rounded-sm rounded-[8px] bg-[#A9000066] xl:px-4 xl:py-4 lg:px-3 lg:py-2 md:px-1 md:py-[1%] sm:px-4 py-2 font-medium text-[#E30000] transition-all duration-300 hover:bg-[#E30000] hover:text-[#390C0C] hover:transition-none hover:duration-0"
          >
            {/* Animação Hover */}
            <div
              className={`absolute inset-0 flex items-center justify-center lg:gap-1 mr-1 opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-300`}
            >
              <Icon icon="typcn:plus" width="25px" className="2xl:w-[25px] xl:w-[20px] lg:w-full md:w-4 xs:w-5 w-4" />
              <h1 className="">Adicionar</h1>
            </div>

            <div className={`flex items-center group-hover:opacity-0`}>
              <Icon icon="icon-park-solid:down-one" width="25px" className="2xl:w-auto lg:w-full md:w-4 xs:w-5 w-4" />
              <h1 className="">R$ {convertFloat(expense)}</h1>
            </div>
          </div>
        </div>

        <div onClick={() => showModal("financial-missions")}
        className="md:flex hidden cursor-pointer xl:w-5/12 lg:w-[35%] md:w-[42%] flex-col xl:rounded-md lg:rounded-sm md:rounded-[12px] bg-[#DDDDDD] p-2 dark:bg-[#1B1B1B] py-4">
          <p className="2xl:p-2 lg:p-1 2xl:text-base xl:text-[32px] lg:text-md md:text-[16px] font-light dark:text-white">Missões</p>
          <div className="overflow-hidden whitespace-nowrap xl:rounded-md lg:rounded-sm md:rounded-[12px] bg-white 2xl:p-2 lg:p-1 2xl:text-[32px] xl:text-[28px] lg:text-[20px] md:text-[14px] text-black">
            <p className="slide-track animate-scroll relative left-[800px]">
              Anote três pequenas economias que você fez hoje
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:gap-2 gap-1 whitespace-nowrap 2xl:text-[32px] xl:text-[28px] lg:text-md md:text-[16px] leading-[1.1]">
          <div
            onClick={() => showModal("notes-modal")}
            className="flex lg:w-full md:w-[115%] xl:h-[61px] lg:h-[44px] md:h-[27px] cursor-pointer items-center gap-1 xl:rounded-md lg:rounded-sm rounded-[8px] bg-[#FFB51533] hover:bg-yellow hover:text-[#493A1A] transition-all duration-300 xl:px-4 xl:py-4 lg:px-3 lg:py-2 md:px-2 md:py-0 px-1 font-medium text-[#FFB515]"
          >
            <Icon icon="solar:notes-bold" className="2xl:w-[25px] xl:w-[23px] lg:w-[10%] md:w-[9%] sm:w-[33px] w-[30px]" width="41px" />
            <h1 className="md:flex hidden">Anotações livres</h1>
          </div>
          <div
            onClick={() => showModal("budget-modal")}
            className="flex lg:w-full md:w-[115%] xl:h-[61px] lg:h-[44px] md:h-[27px] cursor-pointer items-center gap-1 xl:rounded-md lg:rounded-sm rounded-[8px] bg-[#FF48A733] hover:bg-[#FF48A7] hover:text-[#492437] transition-all duration-300 xl:px-4 xl:py-4 lg:px-3 lg:py-2 md:px-2 md:py-0 px-1 font-medium text-[#FF48A7]"
          >
            <Icon icon="iconoir:wallet-solid" className="2xl:w-[25px] xl:w-[23px] lg:w-[10%] md:w-[9%] sm:w-[33px] w-[30px]" width="41px" />
            <h1 className="md:flex hidden">Orçamento</h1>
          </div>
        </div>
      </section>
      <div className="flex md:hidden mt-3 flex-col rounded-[12px] bg-[#DDDDDD] px-3 py-2 dark:bg-[#1B1B1B]">
          <p className="xs:text-[25px] text-[16px] font-light dark:text-white">Missões</p>
          <div className="overflow-hidden whitespace-nowrap rounded-[12px] bg-white xs:p-2 p-1 xs:text-[20px] text-[16px] text-black">
            <p className="slide-track animate-scroll relative left-[800px]">
              Anote três pequenas economias que você fez hoje
            </p>
          </div>
        </div>

      <section className="lg:w-full md:w-[103.2%] 2xl:mt-10 xl:mt-5 lg:mt-4 mt-3 flex sm:flex-row flex-col w-full sm:items-center justify-between rounded-md 2xl:p-4 xl:p-2">
        <div className="flex justify-between sm:w-auto w-full 2xl:gap-7 xl:gap-5 sm:gap-2">
          <button
            onClick={() => handleClick(0)}
            className={`${btnOn == 0
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-[#8D8D8D] text-white transition-colors duration-500 hover:bg-[#282828]"
              } 2xl:rounded-md lg:rounded-sm xs:rounded-[12px] rounded-[8px] 2xl:text-base xl:text-[32px] lg:text-md md:text-[16px] text-[24px] 2xl:h-auto xl:h-14 2xl:py-4 xl:py-0 lg:p-4 p-2`}
          >
            Planejar
          </button>
          <button
            onClick={() => handleClick(1)}
            className={`${btnOn == 1
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-[#8D8D8D] text-white transition-colors duration-500 hover:bg-[#282828]"
              } 2xl:rounded-md lg:rounded-sm xs:rounded-[12px] rounded-[8px] 2xl:text-base xl:text-[32px] lg:text-md md:text-[16px] text-[24px] 2xl:h-auto xl:h-14 xl:py-0 lg:p-4 p-2`}
          >
            Metas
          </button>
        </div>
          <div className="flex justify-between whitespace-nowrap lg:gap-7 sm:gap-2 text-[#8D8D8D] dark:text-white">
            {btnOn == 1 ? (
              <>
                <div
                  onClick={() => showModal("")}
                  className="flex 2xl:h-20 lg:h-[60px] md:h-[38px] cursor-pointer items-center justify-center xl:gap-4 lg:gap-2 gap-1 sm:mt-0 mt-2 2xl:rounded-md lg:rounded-sm rounded-[12px] 2xl:border-4 xs:border-[3px] border-[2px] border-[#8D8D8D] lg:px-6 px-3 py-2 transition-colors duration-500 hover:border-secondary-200 hover:text-secondary-200"
                >
                  <Icon icon={"typcn:plus"} className="xl:text-base lg:text-md md:text-[16px] text-[20px]" />
                  <p className="2xl:text-base xl:text-[32px] lg:text-md md:text-[16px] text-[20px]">Criar Meta</p>
                </div>
              </>
            ) : (
              <>
                <div
                  onMouseEnter={() => setCatIconColor(true)}
                  onMouseLeave={() => setCatIconColor(false)}
                  onClick={() => showModal("tip-from-fin")}
                  className="flex 2xl:h-20 lg:h-[60px] md:h-[39px] 2xl:mt-0 lg:mt-[1px] md:mt-0 xs:mt-2 mt-5 cursor-pointer items-center justify-center 2xl:gap-6 xl:gap-4 lg:gap-3 gap-1 2xl:rounded-md lg:rounded-sm rounded-[12px] 2xl:border-4 lg:border-[3px] border-[3px] border-[#8D8D8D] lg:px-6 md:px-3 p-2 transition-colors duration-500 hover:border-secondary-200 hover:text-secondary-200"
                >
                  {catIcon}
                  <p className="2xl:text-base xl:text-[32px] lg:text-md md:text-[16px] text-[20px]">Dicas do Fin</p>
                </div>
                <div className="flex 2xl:h-20 lg:h-[60px] md:h-[39px] 2xl:mt-0 lg:mt-[1px] md:mt-0 xs:mt-2 mt-5 items-center justify-center lg:gap-6 md:gap-1 2xl:rounded-md lg:rounded-sm rounded-[12px] 2xl:border-4 lg:border-[3px] border-[3px] border-[#8D8D8D] lg:px-6 md:px-3 transition-colors duration-500 hover:border-secondary-200 hover:text-secondary-200 ">
                  <p className="md:flex hidden flex-row items-center justify-center lg:gap-4 md:gap-2 text-nowrap 2xl:text-base xl:text-[32px] lg:text-md md:text-[16px] ">
                    <input 
                      className="2xl:w-full xl:w-8 lg:w-7 md:w-5" 
                      type="date" 
                    />
                  </p>
                  <Icon className="flex md:hidden px-2" icon={"bi:calendar-fill"} width={40} />
                </div>
              </>
            )}
        </div>
      </section>
    </div>
  );
}

export default Top;

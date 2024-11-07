import { Icon } from "@iconify/react";
import { useState } from "react";
import catIcon from "../../../assets/images/gato-planning.svg";
import convertFloat from "../../../utils/convertFloat";

function Top({ onClick, onClick2 }) {
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const [btnOn, setBtnOn] = useState(0);

  const handleClick = (n) => {
    setBtnOn(n);
    if (n === 0) {
      onClick(0);
    } else if (n === 1) {
      onClick2(1);
    }
  };

  return (
    <div className="w-full">
      <section className="mt-10 flex w-full justify-between gap-2">
        <div className="flex w-2/12 flex-col justify-center whitespace-nowrap rounded-md bg-[#DDDDDD] dark:bg-[#1B1B1B] px-4 py-4 leading-[1.1] dark:text-white">
          <p className="text-[36px] font-light">Saldo</p>
          <h1 className="text-[36px] font-medium">R${convertFloat(balance)}</h1>
        </div>

        <div className="flex flex-col gap-2 text-[32px] leading-[1.1]">
          <div className="flex items-center gap-1 rounded-md bg-[#84CE7A99] px-4 py-3 font-medium text-[#14A900] dark:bg-[rgba(11,85,5,0.50);]">
            <Icon icon="icon-park-solid:up-one" width="25px" />
            <h1 className="">R${convertFloat(income)}</h1>
          </div>
          <div className="flex items-center gap-1 rounded-md bg-[#A9000066] px-4 py-3 font-medium text-[#E30000]">
            <Icon icon="icon-park-solid:down-one" width="25px" />
            <h1 className="">R${convertFloat(expense)}</h1>
          </div>
        </div>

        <div className="flex w-5/12 flex-col rounded-md bg-[#DDDDDD] p-2 dark:bg-[#1B1B1B]">
          <p className="p-2 text-base font-light dark:text-white">Missões</p>
          <div className="overflow-hidden whitespace-nowrap rounded-md bg-white p-2 text-[32px] text-black">
            <p>Anote três pequenas economias que você fez hoje</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 whitespace-nowrap text-[32px] leading-[1.1]">
          <div className="flex items-center gap-1 rounded-md bg-[#FFB51533] px-4 py-3 font-medium text-[#FFB515]">
            <Icon icon="solar:notes-bold" className="" width="25px" />
            <h1 className="">Anotações livres</h1>
          </div>
          <div className="flex items-center gap-1 rounded-md bg-[#FF48A733] px-4 py-3 font-medium text-[#FF48A7]">
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
                : "bg-[#8D8D8D] text-white"
            } rounded-md p-4 text-base`}
          >
            Planejar
          </button>
          <button
            onClick={() => handleClick(1)}
            className={`${
              btnOn == 1
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-[#8D8D8D] text-white"
            } rounded-md p-4 text-base`}
          >
            Metas
          </button>
        </div>

        <div className="flex justify-between gap-7">
          <div className="flex h-20 items-center justify-center gap-6 rounded-md border-8 px-6 text-[#8D8D8D]">
            <img className="w-10" src={catIcon} alt="pequeno gato cinza" />
            <p className="text-base">Dicas do Fin</p>
          </div>
          <div className="flex h-20 items-center justify-center gap-6 rounded-md border-8 px-6 text-[#8D8D8D]">
            <p className="flex flex-row items-center justify-center gap-4 text-nowrap text-base">
              01 Out - 10 Out | <Icon icon={"bi:calendar-fill"} width={40} />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Top;

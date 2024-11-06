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
    <div>
      <section className="flex w-11/12 m-auto gap-2 mt-10 justify-center">
        <div className=" py-4 px-4 w-2/12 bg-[#DDDDDD] dark:bg-black dark:text-white leading-[1.1] rounded-md flex flex-col justify-center whitespace-nowrap">
          <p className="text-[36px] font-light">Saldo</p>
          <h1 className="text-[36px] font-medium">R${convertFloat(balance)}</h1>
        </div>

        <div className="leading-[1.1] text-[32px] flex flex-col gap-2">
          <div className="bg-[#84CE7A99] dark:bg-[rgba(11,85,5,0.50);] flex items-center text-[#14A900] font-medium py-3 px-4 gap-1 rounded-md">
            <Icon icon="icon-park-solid:up-one" width="25px" />
            <h1 className="">R${convertFloat(income)}</h1>
          </div>
          <div className=" flex items-center bg-[#A9000066] text-[#E30000] font-medium py-3 px-4 gap-1 rounded-md">
            <Icon icon="icon-park-solid:down-one" width="25px" />
            <h1 className="">R${convertFloat(expense)}</h1>
          </div>
        </div>

        <div className="bg-[#DDDDDD] dark:bg-[#1B1B1B] flex flex-col p-2 rounded-md w-5/12">
          <p className="dark:text-white text-base p-2 font-light">Missões</p>
          <div className="bg-white text-black overflow-hidden p-2 text-[32px] rounded-md whitespace-nowrap">
            <p>Anote três pequenas economias que você fez hoje</p>
          </div>
        </div>

        <div className=" leading-[1.1] text-[32px] flex flex-col gap-2 whitespace-nowrap">
          <div className="bg-[#FFB51533] flex items-center text-[#FFB515] font-medium py-3 px-4 gap-1 rounded-md">
            <Icon icon="solar:notes-bold" className="" width="25px" />
            <h1 className="">Anotações livres</h1>
          </div>
          <div className=" flex items-center bg-[#FF48A733] text-[#FF48A7] font-medium py-3 px-4 gap-1 rounded-md">
            <Icon icon="iconoir:wallet-solid" width="25px" />
            <h1 className="">Orçamento</h1>
          </div>
        </div>
      </section>

      <section className="w-11/12 m-auto mt-10 p-4 rounded-md flex justify-between items-center">
        <div className="flex gap-7">
          <button
            onClick={() => handleClick(0)}
            className={`${
              btnOn == 0
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-[#8D8D8D] text-white"
            } text-base p-4 rounded-md`}
          >
            Planejar
          </button>
          <button
            onClick={() => handleClick(1)}
            className={`${
              btnOn == 1
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-[#8D8D8D] text-white"
            } text-base p-4 rounded-md`}
          >
            Metas
          </button>
        </div>

        <div className="flex gap-7">
          <div className="flex items-center h-20 justify-center gap-6 border-8 text-[#8D8D8D] px-6 rounded-md">
            <img className="w-10" src={catIcon} alt="pequeno gato cinza" />
            <p className="text-base">Dicas do Fin</p>
          </div>
          <div className="flex items-center h-20 justify-center gap-6 border-8 text-[#8D8D8D] px-6 rounded-md">
            <p className="flex flex-row gap-4 justify-center items-center text-base text-nowrap">
              01 Out - 10 Out | <Icon icon={"bi:calendar-fill"} width={40} />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Top;

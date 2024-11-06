import GoalsButton from "../../Buttons/GoalsButton";
import { useState } from "react";
import GoalsCard from "../../Cards/GoalsCard";
import { Icon } from "@iconify/react";
import GoalsHistory from "../../Cards/GoalsHistory";
function Goals() {
  const [btnColor, setBtnColor] = useState([0]); // Estado inicial como array vazio

  const activeButton = (n) => {
    setBtnColor([n]); // Atualiza o estado com o valor de n
  };

  return (
    <section className="m-auto mt-5 flex w-12/12 justify-between gap-5">
      <div className="flex w-full flex-col gap-4">
        <div className="flex gap-4 flex-wrap">
          <div onClick={() => activeButton(0)}>
            <GoalsButton
              color={`hover:bg-[#87878733] hover:text-black hover:dark:text-white transition-colors duration-300 ${
                btnColor.includes(0)
                  ? "bg-white text-black dark:"
                  : "bg-[#8D8D8D] dark:bg-[#1B1B1B] dark:text-[#878787] text-white"
              }`}
              text="Tudo"
            />
          </div>
          <div onClick={() => activeButton(1)}>
            <GoalsButton
              color={`hover:bg-[#87878733] hover:text-[#878787] transition-colors duration-300 ${
                btnColor.includes(1)
                  ? "bg-[#878787] text-black"
                  : "bg-[#8D8D8D] dark:bg-[#1B1B1B] dark:text-[#878787] text-white"
              }`}
              text="Não iniciado"
            />
          </div>
          <div onClick={() => activeButton(2)}>
            <GoalsButton
              color={`hover:bg-[#FF88004D] hover:text-[#FF8800] transition-colors duration-300 ${
                btnColor.includes(2)
                  ? "bg-[#FF8800] text-[#351D09]"
                  : "bg-[#8D8D8D] dark:bg-[#1B1B1B] dark:text-[#878787] text-white"
              }`}
              text="Em andamento"
            />
          </div>
          <div onClick={() => activeButton(3)}>
            <GoalsButton
              color={`hover:bg-[#14A9004D] hover:text-[#14A900] transition-colors duration-300 ${
                btnColor.includes(3)
                  ? "bg-[#14A900] text-[#0D3512]"
                  : "bg-[#8D8D8D] dark:bg-[#1B1B1B] dark:text-[#878787] text-white"
              }`}
              text="Concluído"
            />
          </div>
          <div onClick={() => activeButton(4)}>
            <GoalsButton
              color={`hover:bg-[#E300004D] hover:text-[#E30000] transition-colors duration-300 ${
                btnColor.includes(4)
                  ? "bg-[#E30000] text-[#660B1B]"
                  : "bg-[#8D8D8D] dark:bg-[#1B1B1B] dark:text-[#878787] text-white"
              }`}
              text="Atrasado"
            />
          </div>
        </div>

        <div className="flex h-[1000px] flex-col gap-4 overflow-y-scroll">
          <GoalsCard
            actualValue={20}
            maxValue={2999}
            objective={"Televisão"}
            date={"2024-10-20"}
          />
          <GoalsCard
            actualValue={20}
            maxValue={2999}
            objective={"Televisão"}
            date={"2024-12-20"}
          />
          <GoalsCard
            actualValue={0}
            maxValue={2999}
            objective={"Televisão"}
            date={"2024-12-20"}
          />
          <GoalsCard
            actualValue={20000}
            maxValue={2999}
            objective={"Televisão"}
            date={"2024-10-20"}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex h-14 items-center">
          <input
            type="text"
            placeholder="Histórico"
            className="h-14 rounded-l-[14px] bg-[#86868633] px-5 text-base font-medium outline-none placeholder:text-black dark:bg-[#1B1B1B] dark:text-[#878787]"
          />
          <div className="flex h-14 cursor-pointer items-center rounded-r-[14px] bg-black p-2 dark:bg-[#878787]">
            <Icon
              icon="flowbite:filter-solid"
              className="text-base text-white dark:text-black"
            />
          </div>
        </div>

        <div className="relative flex h-[1000px] flex-col gap-5 overflow-y-scroll rounded-md bg-[#86868633] px-8 py-8 dark:bg-[#1B1B1B]">
          <div className="flex h-[1000px] w-full flex-col gap-4 overflow-y-scroll">
            <GoalsHistory />
            <GoalsHistory />
            <GoalsHistory />
            <GoalsHistory />
            <GoalsHistory />
            <GoalsHistory />
            <GoalsHistory />
            <GoalsHistory />
            <GoalsHistory />
            <GoalsHistory />
            <GoalsHistory />
            <GoalsHistory />
            <GoalsHistory />
            <GoalsHistory />
            <GoalsHistory />
            <GoalsHistory />

            <div className="to-transparent absolute bottom-8 h-32 w-full bg-gradient-to-t from-[#868686] dark:from-[#1B1B1B]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Goals;

import showModal from "../../utils/showModal";
import Modal from "./Modal";
import { Icon } from "@iconify/react";

export default function BudgetModal() {
  const budget = [
    { id: 0, month: "Janeiro", revenue: 1000, expense: 800, economy: 200 },
    { id: 1, month: "Fevereiro", revenue: 1000, expense: 800, economy: 200 },
    { id: 2, month: "Março", revenue: 1000, expense: 800, economy: 200 },
    { id: 3, month: "Abril", revenue: 1000, expense: 800, economy: 0 },
  ];

  return (
    <Modal
      id="budget-modal"
      title="Orçamento"
      icon="mdi:wallet"
      iconWidth={32}
      top
    >
      {/* Legend for each colomn */}
      <ul className="flex max-h-[55vh] lg:w-[50vw] md:w-[60vw] xs:w-[67vw] flex-col xl:gap-3 lg:gap-2 md:gap-3 gap-2 overflow-hidden overflow-y-scroll xl:text-md lg:text-[22px] md:text-[18px] sm:text-[16px] text-[14px]">
        <li className="relative xl:left-16 sm:left-10 left-6 top-3 flex items-center justify-between gap-4">
          <div className="flex w-full">
            <span className="w-1/4">Mês</span>
            <span className="w-1/4">Receita</span>
            <span className="w-1/4">Despesa</span>
            <span className="w-1/4">Economia</span>
            <span className="w-1/4"></span>
          </div>
        </li>

        {budget.map((item) => (
          <li className="flex items-center justify-between gap-2" key={item.id}>
            <div className="flex w-full items-center justify-between sm:gap-2 gap-1 rounded-sm bg-black/5 xl:p-4 lg:p-3 p-1 dark:bg-black">
              <Icon
                className="xl:w-auto lg:w-[35px] md:w-[30px] sm:w-[30px] xs:w-[20px] w-[18px]"
                icon={"mdi:wallet"}
                width={48}
                color={`${item.economy <= 0 ? "red" : "blue"}`}
              />
              <span
                className={`w-1/4 ${item.economy <= 0 ? "text-red" : "text-secondary-200"}`}
              >
                {item.month}
              </span>
              <span className="w-1/4">R$ {item.revenue}</span>
              <span className="w-1/4">R$ {item.expense}</span>
              <span
                className={`w-1/4 ${item.economy <= 0 ? "text-red" : "text-secondary-200"}`}
              >
                R$ {item.economy}
              </span>
            </div>
            <div
              onClick={() => showModal("budget-details-edit")}
              className="h-auto cursor-pointer lg:rounded-sm sm:rounded-[16px] rounded-[12px] bg-black/5 sm:px-3 xs:px-2 lg:py-7 xs:py-5 px-1 py-4 transition-all hover:bg-black/10 dark:bg-white/50"
            >
              <Icon icon="mdi:pencil" />
            </div>
          </li>
        ))}
      </ul>
      <button className="flex w-full items-center justify-between gap-4">
        <div
          onClick={() => showModal("budget-details")}
          className="md:mt-3 mt-2 flex w-full items-center justify-center gap-2 rounded-sm md:border-4 border-[3px] border-dashed sm:p-4 xs:p-2 p-1 lg:text-md md:text-[20px] sm:text-[18px] text-[16px]"
        >
          <Icon icon={"mdi:plus-bold"} /> <p>Criar orçamento</p>
        </div>
      </button>
    </Modal>
  );
}

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
      <ul className="flex max-h-[55vh] w-[50vw] flex-col gap-3 overflow-hidden overflow-y-scroll">
        <li className="relative left-16 top-6 flex items-center justify-between gap-4">
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
            <div className="flex w-full items-center justify-between gap-2 rounded-sm bg-black/5 p-4 dark:bg-black">
              <Icon
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
              className="h-auto cursor-pointer rounded-sm bg-black/5 px-3 py-7 transition-all hover:bg-black/10 dark:bg-white/50"
            >
              <Icon icon="mdi:pencil" />
            </div>
          </li>
        ))}
      </ul>
      <button className="flex w-full items-center justify-between gap-4">
        <div
          onClick={() => showModal("budget-details")}
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-sm border-4 border-dashed p-4"
        >
          <Icon icon={"mdi:plus-bold"} /> <p>Criar orçamento</p>
        </div>
      </button>
    </Modal>
  );
}

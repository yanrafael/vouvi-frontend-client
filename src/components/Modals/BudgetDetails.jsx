import { Icon } from "@iconify/react";
import hideModal from "../../utils/hideModal";

function BudgetDetails() {
  const expenses = [
    { id: 0, title: "Aluguel", value: 1000, type: "conta", date: "03/11/2021" },
    {
      id: 1,
      title: "Alimentação",
      value: 500,
      type: "dinheiro",
      date: "03/11/2021",
    },
    {
      id: 2,
      title: "Transporte",
      value: 200,
      type: "cartão",
      date: "03/11/2021",
    },
    { id: 3, title: "Lazer", value: 300, type: "conta", date: "03/11/2021" },
    { id: 4, title: "Saúde", value: 150, type: "dinheiro", date: "03/11/2021" },
    {
      id: 5,
      title: "Educação",
      value: 100,
      type: "cartão",
      date: "03/11/2021",
    },
  ];

  return (
    // Background
    <div
      className={`fixed left-0 top-0 z-50 flex h-screen w-screen justify-center gap-3 overflow-hidden bg-white/50 backdrop-blur-xl dark:bg-black/50`}
      id={"budget-details"}
    >
      {/* Modal container */}
      <div className="h-fit w-fit min-w-80 rounded-md bg-white p-9 text-md text-black shadow-lg shadow-black/50">
        {/* Modal heading */}
        <div className="flex justify-between">
          <span className="flex items-center gap-4">
            <Icon icon={"mdi:wallet"} className={`text-pink-200`} width={32} />
            <h2>Orçamento</h2>
          </span>
          <button className="cursor-pointer">
            <Icon
              onClick={() => hideModal("budget-details")}
              className="relative right-[1px] cursor-pointer text-black"
              icon="carbon:close-filled"
              width="3rem"
            />
          </button>
        </div>

        {/* Modal body */}
        <div className="mt-2">
          {/* Heading */}
          <div className="flex w-[50vw] justify-between">
            <div>
              <h4 className="font-bold">A receber:</h4>
              <ul className="flex gap-3">
                <li className="rounded-[9px] border-[3px] border-black p-1 px-2 text-sm font-light">
                  Emprego
                </li>
                <li className="rounded-[9px] border-[3px] border-black p-1 px-2 text-sm font-light">
                  Freelance
                </li>
                <li className="rounded-[9px] border-[3px] border-black p-1 px-2 text-sm font-light">
                  Adicionar +
                </li>
              </ul>
            </div>

            <div>
              <h4 className="">Mês referente:</h4>
              <span className="flex w-full items-center">
                <span className="w-full rounded-[9px] border-4 p-2 text-secondary-200">
                  <p>Novembro</p>
                </span>
                <Icon
                  icon={"mdi-calendar"}
                  width={55}
                  className="text-secondary-200"
                />
              </span>
            </div>
          </div>

          {/* Table */}
          <div className="mt-8 rounded-sm bg-black/10 p-5">
            <div className="flex justify-between">
              <h4>A pagar:</h4>
              <span className="rounded-[9px] border-[3px] border-black p-1 px-2">
                <p>+ Adicionar</p>
              </span>
            </div>

            <div>
              <p>Título</p>
              <p>Valor</p>
              <p>Tipo</p>
              <p>Data</p>
            </div>

            <ul></ul>
          </div>
        </div>
      </div>

      <div className="h-fit w-fit min-w-80 max-w-[50vw] rounded-md bg-white p-9 text-md text-black shadow-lg shadow-black/50">
        {/* Modal heading */}
        <div className="flex justify-between">
          <h2>Resumo</h2>
        </div>

        {/* Modal body */}
      </div>
    </div>
  );
}

export default BudgetDetails;

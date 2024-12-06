import { Icon } from "@iconify/react";
import convertFloat from "../../utils/convertFloat";
import { useState } from "react";


function BudgetDetailsEdit({ closeModal }) {
  const expenses = [
    { id: 0, title: "Aluguel", value: 1000, type: "Conta", date: "03/11/2021" },
    {
      id: 1,
      title: "Mercado",
      value: 500,
      type: "Alimentação",
      date: "03/11/2021",
    },
    {
      id: 2,
      title: "Spotify",
      value: 200,
      type: "Assinatura",
      date: "03/11/2021",
    },
    { id: 3, title: "Jogos", value: 300, type: "Lazer", date: "03/11/2021" },
    {
      id: 4,
      title: "Saúde",
      value: 150,
      type: "Alimentação",
      date: "03/11/2021",
    },
    {
      id: 5,
      title: "Alura",
      value: 100,
      type: "Educação",
      date: "03/11/2021",
    },
  ];

  const [toReceive, setToReceive] = useState(0);
  const [toPay, setToPay] = useState(0);


  return (
    // Background
    <div
      className={`fixed left-0 top-0 z-50 flex h-screen w-screen justify-center gap-3 overflow-hidden bg-white/50 pt-10 backdrop-blur-xl dark:bg-black/50`}
      id={"budget-details-edit"}
    >
      {/* Modal container */}
      <div className="h-fit w-2/5 min-w-80 rounded-md bg-white p-9 text-md text-black shadow-lg shadow-black/50 dark:bg-[#1B1B1B] dark:text-white">

      <div className="flex items-center justify-between">
          <h1 className="text-right text-[32px] font-medium dark:text-white">
            Conquistas
          </h1>

          <Icon
            onClick={closeModal}
            className="relative right-[1px] cursor-pointer text-black opacity-35 dark:text-white"
            icon="carbon:close-filled"
            width="3rem"
          />
        </div>
        
      </div>

      {/* Modal container 2 */}
      <div className="h-fit w-fit min-w-80 max-w-[50vw] rounded-md bg-white p-9 text-md text-black shadow-lg shadow-black/50 dark:bg-[#1B1B1B] dark:text-white">
        {/* Modal heading */}
        <div className="flex justify-between">
          <h2>Resumo</h2>
        </div>

        {/* Modal body */}
        <div className="mt-10">
          <div className="flex flex-col gap-3">
            <div className="rounded-sm bg-black/10 p-4">
              <h5 className="font-bold text-green-200">A Receber</h5>
              <p>
                <strong>Total:</strong> R${convertFloat(toReceive)}
              </p>
            </div>

            <div className="rounded-sm bg-black/10 p-4">
              <h5 className="font-bold text-red">A Pagar</h5>
              <p>
                <strong>Total:</strong> R${convertFloat(toPay)}
              </p>
            </div>

            <div className="rounded-sm bg-black/10 p-4">
              <h5 className="font-bold text-yellow">Para metas</h5>
              <p>
                <strong>Total:</strong> R$0,00
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-sm bg-black/10 p-4">
            <h5 className="font-bold text-secondary-200">Valor economizado</h5>
            <p>
              <strong>Total:</strong> R$0,00
            </p>
          </div>

          {/* Submit */}
          <div className="mt-8 flex w-full justify-between gap-2">
            <div className="group flex w-2/5 items-center justify-center rounded-sm border-4 border-primary-200 transition-all duration-200 hover:bg-secondary-300">
              <button>
                <Icon
                  icon={"mdi:repeat"}
                  width={64}
                  className="text-primary-200 group-hover:text-secondary-200"
                />
              </button>
            </div>

            <div className="w-3/5 rounded-sm bg-primary-200 p-4 hover:bg-secondary-200">
              <button className="text-center font-bold text-white">
                Registrar orçamento
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BudgetDetailsEdit;

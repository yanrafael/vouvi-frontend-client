import Transactions from "./Transactions";
import convertFloat from "../../utils/convertFloat";

import { LineChart, PieChart } from "@mui/x-charts";
import { useState } from "react";

function Graphics() {
  const [expenses] = useState(2587);

  return (
    <div className="mt-5 dark:text-white">
      <div className="flex justify-between">
        <div className="w-7/12 rounded-md bg-[#868686] bg-opacity-20 pb-10 dark:bg-[#1B1B1B]">
          <h3 className="m-8 text-lg font-bold dark:text-white">
            Veja seus investimentos decolando
          </h3>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 4, 5, 6] }]}
            series={[
              {
                data: [0, 20, 40, 80, 160, 320],
                area: true,
                color: "#480ca8",
              },
            ]}
            colors={["dark"]}
            height={300}
          />
        </div>

        <div className="w-2/5 rounded-md bg-[#868686] bg-opacity-20 pb-10 dark:bg-[#1B1B1B]">
          <h3 className="m-8 text-lg font-bold dark:text-white">
            Distribuição de gastos
          </h3>
          <div className="relative mt-20 w-full dark:text-white">
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 12, label: "Aluguel", color: "#480ca8" },
                    { id: 1, value: 12, label: "Compras", color: "#560bad" },
                    { id: 2, value: 12, label: "Gás", color: "#7209b7" },
                    { id: 3, value: 12, label: "Contas", color: "#b5179E" },
                    { id: 4, value: 12, label: "Saúde", color: "#f72585" },
                    { id: 5, value: 40, label: "Carro", color: "#8d8d8d" },
                  ],
                  outerRadius: 9 * (window.innerWidth / 100),
                },
              ]}
              margin={{
                top: 0,
                right: 270 - 2 * (window.innerWidth / 100),
                bottom: 0,
                left: 0,
              }}
              slotProps={{
                legend: {
                  direction: "column",
                  position: { vertical: "middle", horizontal: "right" },
                  labelStyle: { color: "white" },
                  padding: { right: 9 * (window.innerWidth / 100) },
                },
              }}
              height={350}
            />
            <span className="absolute right-24 top-0 text-left text-md font-bold">
              R${convertFloat(expenses)}
            </span>
          </div>
        </div>
      </div>

      <div className="m-auto mt-8 w-full rounded-md bg-[#888] bg-opacity-20 p-3 dark:bg-[#1B1B1B]">
        <h3 className="m-8 text-base font-bold">
          Acompanhe seus gastos e ganhos
        </h3>
        <div className="ml-16 flex gap-10 text-md">
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#b5179e]"></span>
            <p>Ganhos</p>
          </span>
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#480ca8]"></span>
            <span className=""></span>
            <p>Gastos</p>
          </span>
        </div>
        <LineChart
          xAxis={[{ data: [1, 3, 7, 10, 14, 20, 23, 27, 30] }]}
          sx={{
            "& .MuiLineElement-root": {
              strokeWidth: 10,
            },
          }}
          series={[
            {
              data: [0, 1000, 1200, 500, 2200, 3300, 2700, 3000, 2000],
              color: "#480ca8",
            },
            {
              data: [1800, 2800, 1500, null, 3800, 1300, 500, 1900, 3900],
              color: "#b5179e",
              connectNulls: true,
            },
          ]}
          height={500}
          grid={{ horizontal: true }}
        />
      </div>

      <Transactions />
    </div>
  );
}

export default Graphics;

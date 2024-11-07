import { LineChart, PieChart } from "@mui/x-charts";
import { useState } from "react";
import Transactions from "./Transactions";
import convertFloat from "../../../utils/convertFloat";

function Graphics() {
  const [expenses] = useState(2587);

  return (
    <div className="mt-5">
      <div className="flex justify-between">
        <div className="rounded-md bg-[#868686] bg-opacity-20 pb-10">
          <h3 className="m-8 text-lg font-bold">
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
            width={800}
            height={300}
          />
        </div>

        <div className="w-fit rounded-md bg-[#868686] bg-opacity-20 pb-10">
          <h3 className="m-8 text-lg font-bold">Distribuição de gastos</h3>
          <div className="relative w-full">
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
                  innerRadius: 0,
                  outerRadius: 150,
                },
              ]}
              margin={{ top: 0, right: 280, bottom: 0, left: 0 }}
              slotProps={{
                legend: {
                  direction: "column",
                  position: { vertical: "middle", horizontal: "right" },
                  padding: 100,
                },
              }}
              width={700}
              height={300}
            />
            <span className="absolute right-32 top-10 text-right text-base font-bold">
              R${convertFloat(expenses)}
            </span>
          </div>
        </div>
      </div>

      <div className="m-auto mt-8 w-full rounded-md bg-[#888] bg-opacity-20 p-3">
        <h3 className="m-8 text-base font-bold">
          Acompanhe seus gastos e ganhos
        </h3>
        <div className="flex gap-10">
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
              curve: "linear",
              data: [0, 1000, 1200, 500, 2200, 3300, 2700, 3000, 2000],
              color: "#480ca8",
            },
            {
              curve: "linear",
              data: [1800, 2800, 1500, null, 3800, 1300, 500, 1900, 3900],
              color: "#b5179e",
              connectNulls: true,
            },
          ]}
          height={400}
          grid={{ horizontal: true }}
        />
      </div>

      <Transactions />
    </div>
  );
}

export default Graphics;

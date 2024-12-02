import { PieChart } from "@mui/x-charts";
import PropTypes from "prop-types";
import convertFloat from "../../utils/convertFloat";
import { Icon } from "@iconify/react";

const dailyTransactions = [
  {
    iconSrc: "carbon:money",
    description: "Salário",
    value: 2000,
    type: "Entrada",
    date: "01/09/2021",
  },
  {
    iconSrc: "carbon:money",
    description: "Mercado",
    value: 200,
    type: "Saída",
    date: "06/11/2024",
  },
  {
    iconSrc: "carbon:money",
    description: "Salário",
    value: 2000,
    type: "Entrada",
    date: "01/09/2021",
  },
  {
    iconSrc: "carbon:money",
    description: "Mercado",
    value: 200,
    type: "Saída",
    date: "06/11/2024",
  },
  {
    iconSrc: "carbon:money",
    description: "Salário",
    value: 2000,
    type: "Entrada",
    date: "01/09/2021",
  },
  {
    iconSrc: "carbon:money",
    description: "Mercado",
    value: 200,
    type: "Saída",
    date: "06/11/2024",
  },
];

function DailyTransaction({ description, value, type, date, iconSrc }) {
  return (
    <li className="mb-2 flex justify-around rounded-md bg-white xl:p-3 p-2 2xl:text-md xl:text-[22px] lg:text-[18px] md:text-[16px] sm:text-[18px] xs:text-[14px] text-[12px] dark:bg-black">
      <div className="flex items-center">
        <Icon icon={iconSrc} className="2xl:h-12 2xl:w-12 xl:h-10 xl:w-10 md:h-8 md:w-8 sm:w-10 sm:h-10 xs:w-7 xs:h-7 w-5 h-5 rounded-full bg-yellow xl:p-2 md:p-1 sm:p-2 xs:p-1 p-[2px]" />
        <span className="w-1/4 xl:p-4 md:p-2 p-1">{description}</span>
      </div>
      <span className="w-1/3 xl:p-4 lg:p-3 md:pt-2 p-2 px-0 text-center">R$ {convertFloat(value)}</span>
      <span className="w-1/4 xl:p-4 lg:p-3 md:p-2 p-2 text-center">{type}</span>
      <span className="w-1/4 xl:p-4 lg:p-3 md:p-2 p-2">{date}</span>
    </li>
  );
}

function Transactions() {
  const performance = 88;

  return (
    <div className="mt-10 flex w-full md:flex-row flex-col justify-between dark:text-white">
      <div className="md:w-7/12 sm:w-full rounded-md bg-[#888] bg-opacity-20 p-6 dark:bg-[#1B1B1B]">
        <h3 className="w-fit rounded-xl bg-primary-200 p-2 lg:text-md md:text-[26px] sm:text-[3vw] text-[18px] font-semibold text-white dark:bg-black">
          Transações
        </h3>

        <br />

        <ul className="max-h-96 overflow-y-scroll">
          <li className="sm:mb-2 xs:mb-0 flex justify-around text-md md:text-[20px] sm:text-[16px] xs:text-[14px] text-[17px]">
            <span className="w-1/4 p-4 text-center font-bold">Descrição</span>
            <span className="w-1/4 lg:p-4 md:py-4 md:pl-10 xs:pl-0 pl-[39px] p-4 text-center font-bold">Valor</span>
            <span className="w-1/4 lg:p-4 md:py-4 md:pl-4 xs:pl-0 pl-7 p-4 text-center font-bold">Tipo</span>
            <span className="w-1/4 p-4 text-center font-bold">Data</span>
          </li>

          {dailyTransactions.map((transaction, index) => (
            <DailyTransaction key={index} {...transaction} />
          ))}
        </ul>
      </div>

      <div className="relative flex md:w-2/5 sm:w-full flex-col items-center rounded-md bg-[#888] bg-opacity-20 p-6 dark:bg-[#1B1B1B] md:mt-0 mt-5">
        <h3 className="lg:text-lg md:text-base sm:text-base xs:text-[32px] text-[28px]">Desempenho Financeiro</h3>
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 50, color: "#480ca8" },
                { id: 1, value: 15, color: "#560bad" },
                { id: 2, value: 15, color: "#7209b7" },
                { id: 3, value: 20, color: "#b5179E" },
              ],

              innerRadius: (window.innerWidth>768&&window.innerWidth<1024)?100:150,
              outerRadius: (window.innerWidth>768&&window.innerWidth<1024)?120:180,
              cornerRadius: 35,
              startAngle: -90,
              endAngle: 90,
              paddingAngle: 3,
            },
          ]}
          margin={{ top: 150, right: 0, bottom: 0, left: 0 }}
          width={600}
          height={300}
        />

        <span className="absolute lg:top-1/2 top-1/2 md:top-[55%] lg:text-xl md:text-lg text-lg">{performance}%</span>

        <button className="lg:w-4/6 md:w-3/5 w-full rounded-md border-4 border-black py-3 text-md md:text-[20px] dark:border-white">
          Saiba Mais
        </button>
      </div>
    </div>
  );
}

DailyTransaction.propTypes = {
  description: PropTypes.string,
  value: PropTypes.number,
  type: PropTypes.string,
  date: PropTypes.string,
};

export default Transactions;

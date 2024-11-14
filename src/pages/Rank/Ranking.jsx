import HeaderIntern from "../../components/Header/HeaderIntern";
import Card from "../../components/Cards/cardXPRank.jsx";
import CardLateral from "../../components/Cards/CardVCRank.jsx";
import Colocacao from "../../components/Cards/cardRicoRank.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import AvatarFull from "../../components/Header/AvatarFull";

import { useState } from "react";

const Ranking = () => {
  const [selectedOption, setSelectedOption] = useState("Especialista");

  const options = [
    { label: "Dedicado", xp: "500 XP" },
    { label: "Economista", xp: "2000 XP" },
    { label: "Esforçado", xp: "3500 XP" },
    { label: "Especialista", xp: "5000 XP" },
  ];

  const ranking = [
    { nome: "Você", xp: 13.657 },
    { nome: "Izzy", xp: 12.102 },
    { nome: "Kim", xp: 10.018 },
    { nome: "Rich", xp: 9.657 },
    { nome: "Mich", xp: 9.102 },
    { nome: "mark", xp: 9.018 },
    { nome: "Chris", xp: 9.013 },
    { nome: "Chesp", xp: 8.755 },
    { nome: "Billie", xp: 8.124 },
    { nome: "Naye", xp: 7.802 },
    { nome: "User", xp: 5.614 },
    { nome: "User", xp: 5.614 },
    { nome: "User", xp: 5.614 },
    { nome: "User", xp: 5.614 },
    { nome: "User", xp: 5.614 },
    { nome: "User", xp: 5.614 },
    { nome: "User", xp: 5.614 },
    { nome: "User", xp: 5.614 },
    { nome: "User", xp: 5.614 },
    { nome: "User", xp: 5.614 },
  ];

  const lateral = [
    { nome: "yan", vc: 8.511 },
    { nome: "Davi", vc: 7.012 },
    { nome: "Elon", vc: 6.944 },
    { nome: "Michael", vc: 5614 },
    { nome: "Rich", vc: 5614 },
    { nome: "Naye", vc: 5614 },
    { nome: "Luna", vc: 5614 },
    { nome: "Banner", vc: 5614 },
    { nome: "Vilagran", vc: 5614 },
    { nome: "Luke", vc: 5614 },
    { nome: "Vader", vc: 5614 },
    { nome: "Você", vc: 938 },
    { nome: "Herobri", vc: 5614 },
    { nome: "Joel", vc: 5614 },
    { nome: "Cleiton", vc: 5614 },

  ];

  return (
    <>
      <HeaderIntern iconActiveNumber={2}>
        <AvatarFull name={"Ana Carolina"} xp={200} vcoins={928} />
      </HeaderIntern>

      <div className="mt-10 flex flex-row items-center justify-center">
        <div className="mr-5 flex w-3/5 flex-col">
          <h2 className="text-xl font-bold text-primary-200 dark:text-white">
            Os Especialistas!
          </h2>
          <p className="text-base font-light text-primary-200 dark:text-white">
            Ranking atualizado
          </p>
        </div>
        <div className="flex w-1/4 flex-col">
          <p className="text-md font-light text-[#471650] dark:text-white md:text-md">
            Mostrando ranking
          </p>
          <div className="relative w-fit p-1">
            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="focus:ring-purple-500 w-full rounded-lg border-2 border-[#471650] bg-[#7C20BE1A] p-2 text-md font-light text-[#471650] focus:outline-none focus:ring-2 dark:border-primary-200 dark:text-primary-200 md:text-sm md:mt-10"
            >
              {options.map((option) => (
                <option
                  key={option.label}
                  value={option.label}
                  className="bg-white text-[#1a001a] dark:bg-[#1a001a] dark:text-white"
                >
                  {option.label} {option.xp}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="mt-10"></div>
      <div className="flex justify-center">
        <div className="mr-5 w-3/5 rounded-lg bg-[#DFDFDE] p-10 dark:bg-[#1F1F1F]">
          <div className="flex justify-evenly gap-10 ">
            {ranking.slice(1, 2).map((ranking, index) => (
              <Colocacao posicao={2} nome={ranking.nome} xp={ranking.xp} />
            ))}
            {ranking.slice(0, 1).map((ranking, index) => (
              <Colocacao posicao={1} nome={ranking.nome} xp={ranking.xp} />
            ))}
            {ranking.slice(2, 3).map((ranking, index) => (
              <Colocacao posicao={3} nome={ranking.nome} xp={ranking.xp} />
            ))}
          </div>
          <div className="mt-10"></div>
          <div className="h-[551px] overflow-y-auto pr-3">
            {ranking.slice(3, ranking.length).map((ranking, index) => (
              <Card posicao={index + 4} nome={ranking.nome} xp={ranking.xp} />
            ))}
          </div>
          <div className="mt-10"></div>
          <div className="mt-4 flex h-12 items-center justify-center text-center text-md font-bold">
            <span
              className="flex h-12 cursor-pointer items-center rounded-sm bg-white dark:bg-[#1F1F1F]"
              style={{ color: "red" }}
            >
              ▼ Zona de Rebaixamento ▼
            </span>
          </div>
        </div>
        <div className="flex w-1/4 flex-col items-center rounded-lg bg-primary-200 p-5 dark:bg-[#1F1F1F] md:w-46">
          <div>
            <p className="text-teste text-base font-bold text-white md:text-[18px]">
              Ricos da Vouvi
            </p>
            <p className="text-teste mb-3 text-md font-light text-white md:text-[18px]">
              Ranking de Vcoins
            </p>
          </div>
          {lateral.map((lateral, index) =>
            lateral.nome === "Você" ? (
              <CardLateral posicao={index + 1} vc={lateral.vc} nome="Usuario" />
            ) : (
              <></>
            ),
          )}
          <div className="border-card m-4 flex rounded-md border-2 md:w-16"></div>
          {lateral.map((lateral, index) => (
            <CardLateral
              posicao={index + 1}
              vc={lateral.vc}
              nome={lateral.nome}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Ranking;

import HeaderIntern from "../../components/Header/HeaderIntern";
import Card from "../../components/Cards/cardXPRank.jsx";
import CardLateral from "../../components/Cards/CardVCRank.jsx";
import Colocacao from "../../components/Cards/cardRicoRank.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import AvatarFull from "../../components/Header/AvatarFull";
import HeaderMobile from "../../components/Header/HeaderMobile.jsx";

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
    { nome: "Elias", vc: 8.511 },
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
      <div className="lg:lex-row items-center justify-center text-nowrap lg:mt-10 lg:flex">
        <div className="top-8 mr-5 flex-col lg:w-3/5 ">
          <h2 className="ml-6 mr-28 mt-11 text-nowrap text-left text-[30px] font-bold text-primary-200 md:text-nowrap md:p-1 md:text-[45px] lg:-mt-28 lg:text-[55px] dark:text-white">
            Os Especialistas!
          </h2>
          <p className="relative text-left text-[30px] font-light text-primary-200 md:text-[40px] lg:text-base dark:text-white">
            Ranking atualizado
          </p>
        </div>
        <div className="relative hidden lg:w-1/5 flex-col md:-top-14 md:flex items-end">
          <p className="relative text-right font-light text-[#471650] md:text-[24px] lg:mt-11 lg:text-md dark:text-white">
            Mostrando Ranking
          </p>
          <div className="relative w-fit">
            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="focus:ring-purple-500 relative w-full rounded-lg border-2 border-[#471650] bg-[#7C20BE1A] p-2 font-light text-[#471650] focus:outline-none focus:ring-2 md:text-sm lg:text-md dark:border-primary-200 dark:text-primary-200"
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
      <div className="mt-10 md:hidden lg:block"></div>
      <div className="flex flex-col justify-center md:flex-row lg:w-screen lg:gap-0">
        <div className="lg:h-5/5 mr-6 w-full rounded-lg bg-[#DFDFDE] lg:-mt-16 dark:bg-[#1F1F1F]">
          <div className="m-9 flex justify-evenly md:text-nowrap">
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
          <div className="overflow-y-scroll pr-3 md:h-[600px] lg:h-[551px]">
            {ranking.slice(3, ranking.length).map((ranking, index) => (
              <Card posicao={index + 4} nome={ranking.nome} xp={ranking.xp} />
            ))}
          </div>
          <div className="mt-10"></div>
          <div className="mt-4 flex h-12 items-center justify-center text-center text-md font-bold">
            <span
              className="-mt-5 flex h-12 cursor-pointer items-center rounded-sm bg-white text-[16px] md:ml-2 md:mt-16 md:w-[290px] md:text-[22px] lg:-mt-6 lg:w-[530px] lg:text-[40px] dark:bg-[#1F1F1F]"
              style={{ color: "red" }}
            >
              ▼ Zona de Rebaixamento ▼
            </span>
          </div>
        </div>

        {
          <div className="top-9 m-7 flex flex-col md:relative md:hidden lg:w-1/5">
            <p className="ml-3 text-nowrap text-[18px] font-light text-[#471650] md:ml-2 md:text-[19px] lg:text-md dark:text-white">
              Mostrando Ranking
            </p>
            <div className="relative w-fit p-1 ">
              <select
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="focus:ring-purple-500 mr-4 w-72 rounded-lg border-2 border-[#471650] bg-[#7C20BE1A] p-2 text-[16px] font-light text-[#471650] focus:outline-none focus:ring-2 md:text-sm lg:w-full lg:text-md dark:border-primary-200 dark:text-primary-200"
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
        }
        <p className="m-5 -mt-6 ml-7 text-[24px] font-bold text-primary-200 md:hidden md:text-[30px] lg:text-md">
          Ricos da Vouvi
        </p>
        <div className="w-full flex-col rounded-lg bg-primary-200 md:-mt-1 md:w-fit lg:-mt-14 dark:bg-[#1F1F1F]">
          <div>
            <p className="ml-5 mt-4 hidden text-[18px] font-bold text-white md:block md:text-[30px] lg:text-md">
              Ricos da Vouvi
            </p>
            <p className="text[16px] mb-3 ml-5 mr-px mt-0 pt-4 text-[18px] font-light text-white md:text-[20px] lg:text-md">
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
          <div className="lg:border-card m-auto my-4 hidden w-64 rounded-md border-2 md:m-4 md:mr-1 md:block md:w-60 lg:flex lg:w-80"></div>
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
      <HeaderMobile iconId={2} />
    </>
  );
};

export default Ranking;

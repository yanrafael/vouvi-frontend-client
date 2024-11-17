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
      <div className="lg:lex-row items-center  gap-24 justify-center lg:mt-10 lg:flex md:m-50 md:-m-">
        <div className="lg:w-3/5 top-8 mr-5  flex-col md:mx-30 md:relative">
          <h2 className=" mr-28 font-bold text-primary-200 md:text-nowrap  dark:text-white text-[40px] ml-6 text-nowrap lg:text-[64px] md:text-[50px]  md:ml-1 lg:mr-96 lg:-mt-28 md:p-1  ">
            Os Especialistas!
          </h2>
          <p className=" text-center lg:text-base font-light text-primary-200   dark:text-white md:text-[30px]  md:mr-[500px] lg:mr-[990px] text-[24px] lg:text-nowrap lg:-mt-1 mr-24 md:-m-6">
            Ranking atualizado
          </p>
        </div>
        <div className="md:flex top-9 hidden w-1/5 flex-col">
          <p className="lg:text-md font-light text-[#471650] md:text-[29px] dark:text-white md:ml-[499px]  lg:-ml-8 md:text-nowrap mr-44 lg:m-3 lg:  md:m-3">
            Mostrando Ranking
          </p>
          <div className="relative w-fit  ">
            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="lg:w-full focus:ring-purple-500 rounded-lg border-2 border-[#471650] bg-[#7C20BE1A] p-2 lg:text-md font-light text-[#471650] focus:outline-none focus:ring-2 md:text-sm dark:border-primary-200 dark:text-primary-200   lg:-ml-10  md:-mt-52 md:m-30 md:ml-[499px]  md:m-2"
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
      <div className="mt-10 w-10"></div>
      <div className="flex lg:w-screen justify-center flex-col  md:flex-row md:ml-32 lg:ml-14 md:gap-1 ">
        <div className="lg:mx-auto md:w-11/12 rounded-lg bg-[#DFDFDE] lg:w-3/5 dark:bg-[#1F1F1F] lg:h-5/5 lg:mr-14  w-11/12  -mt-10 lg:-mt-8 ">
          <div className="flex justify-evenly  md:text-nowrap m-9 ">
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
          <div className="pr-3 lg:h-[551px] lg:overflow-y-auto">
            {ranking.slice(3, ranking.length).map((ranking, index) => (
              <Card posicao={index + 4} nome={ranking.nome} xp={ranking.xp} />
            ))}
          </div>
          <div className="mt-10"></div>
          <div className="mt-4 flex h-12 items-center justify-center text-center text-md font-bold">
            <span
              className="flex h-12 cursor-pointer items-center rounded-sm bg-white dark:bg-[#1F1F1F]  md:-mt-9  -mt-5"
              style={{ color: "red" }}
            >
              ▼ Zona de Rebaixamento ▼
            </span>
          </div>
        </div>
        
        { <div className="top-9 flex lg:w-1/5 flex-col md:relative md:hidden m-auto">
          <p className="text-nowrap lg:text-md font-light text-[#471650] md:ml-2 md:text-[19px] dark:text-white ml-9 text-[18px]">
            Mostrando Ranking
          </p>
          <div className="relative w-fit p-1">
            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="focus:ring-purple-500 rounded-lg border-2 border-[#471650] bg-[#7C20BE1A] p-2 text-md font-light text-[#471650] focus:outline-none focus:ring-2 md:text-sm lg:w-full dark:border-primary-200 dark:text-primary-200 mr-16 ml-6"
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
        </div> }
        <div className="lg:w-1/4  flex  flex-col rounded-lg bg-primary-200 md:p-3  dark:bg-[#1F1F1F] md:w-[300px] md:mr-36 md:-mt-9 mr-90 w-[320px] ml-4 lg:-mt-8">
          <div>
            <p className=" text-base font-bold text-white md:text-[30px] lg:text-md text-[18px] ml-5">
              Ricos da Vouvi
            </p>
            <p className="mb-3 mr-px text-md font-light text-white md:text-[20px] lg:text-md pt-4 mt-0 text[16px] ml-5">
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
          <div className="lg:border-card m-auto my-4 flex rounded-md border-2 md:w-52  w-64 -mt- md:m-10"></div>
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

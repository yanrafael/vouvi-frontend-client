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
      <div className="lg:lex-row items-center  gap-24 justify-center lg:mt-10 lg:flex md:m-50 md:w-30 text-nowrap">
        <div className="lg:w-3/5 top-8 mr-5  flex-col md:mx-30 ">
          <h2 className=" mr-28 font-bold text-primary-200 md:text-nowrap  dark:text-white  ml-6 text-nowrap lg:text-[64px] md:text-[50px]  md:ml-6 lg:mr-96 lg:-mt-28 md:p-1 mt-11 text-[30px]">
            Os Especialistas!
          </h2>
          <p className=" text-center lg:text-base font-light text-primary-200   dark:text-white md:text-[30px]  md:mr-[500px] text-[24px] lg:text-nowrap lg:-mt-1 4 md:-m-6 lg:-ml-16  md:ml-6 mr-20">
            Ranking atualizado
          </p>
        </div>
        <div className="md:flex hidden w-1/5 flex-col  relative md:-top-14 ">
          <p className="lg:text-md font-light text-[#471650] md:text-[24px] dark:text-white md:ml-[499px]  lg:-ml-8 md:text-nowrap mr-44 lg:m-3  md:m-1 lg:mt-11 ">
            Mostrando Ranking
          </p>
          <div className="relative w-fit  ">
            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="lg:w-full focus:ring-purple-500 rounded-lg border-2 border-[#471650] bg-[#7C20BE1A] p-2 lg:text-md font-light text-[#471650] focus:outline-none focus:ring-2 md:text-sm dark:border-primary-200 dark:text-primary-200   lg:-ml-10  md:-mt-52 md:m-30 md:ml-[490px]  md:m-2  mt-11 md:w-[260px] lg:-mt-1"
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
      <div className="mt-10 w-10 md:hidden lg:block"></div>
      <div className="flex lg:w-screen justify-center flex-col  md:flex-row md:ml-32 lg:ml-14 md:gap-4 lg:gap-0">
        <div className="lg:mx-auto md:w-11/12 rounded-lg bg-[#DFDFDE] lg:w-3/5 dark:bg-[#1F1F1F] lg:h-5/5 lg:mr-14  w-11/12  -mt-10 ml-3 md:-mt-12 lg:-mt-16">
          <div className="flex justify-evenly  md:text-nowrap m-9  ">
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
          <div className="pr-3 lg:h-[551px] overflow-y-scroll md:h-[600px] ">
            {ranking.slice(3, ranking.length).map((ranking, index) => (
              <Card posicao={index + 4} nome={ranking.nome} xp={ranking.xp} />
            ))}
          </div>
          <div className="mt-10"></div>
          <div className="mt-4 flex h-12 items-center justify-center text-center text-md font-bold ">
            <span
              className="flex h-12 cursor-pointer items-center rounded-sm bg-white dark:bg-[#1F1F1F] -mt-5  text-[16px] lg:text-[40px] md:mt-16 md:text-[22px] md:ml-2 lg:-mt-6 md:w-[290px] lg:w-[530px]"
              style={{ color: "red" }}
            >
              ▼ Zona de Rebaixamento ▼
            </span>
          </div>
        </div>
        
        { <div className="top-9 flex lg:w-1/5 flex-col md:relative md:hidden m-7 ">
          <p className="text-nowrap lg:text-md font-light text-[#471650] md:ml-2 md:text-[19px] dark:text-white ml-3 text-[18px] ">
            Mostrando Ranking
          </p>
          <div className="relative w-fit p-1">
            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="focus:ring-purple-500 rounded-lg border-2 border-[#471650] bg-[#7C20BE1A] p-2 lg:text-md font-light text-[#471650] focus:outline-none focus:ring-2 md:text-sm lg:w-full dark:border-primary-200 dark:text-primary-200 mr-4 text-[16px] w-72"
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
        <p className=" lg:text-md font-bold  text-primary-200 md:text-[30px] ml-7 m-5 text-[24px] md:hidden -mt-6">
              Ricos da Vouvi
            </p>
        <div className="lg:w-1/4  flex  flex-col rounded-lg bg-primary-200 md:p-3  dark:bg-[#1F1F1F] md:w-[300px] md:mr-36 mr-90 w-[320px] ml-4  -mt-5 md:-mt-10 lg:-mt-16">
          <div>
            <p className=" lg:text-md font-bold text-white md:text-[30px] text-[18px] ml-5 mt-4 hidden md:block">
              Ricos da Vouvi
            </p>
            <p className="mb-3 mr-px lg:text-md font-light text-white md:text-[20px]  pt-4 mt-0 text[16px] ml-5 text-[18px]">
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
          <div className="lg:border-card m-auto my-4 lg:flex rounded-md border-2 md:w-60  w-64 md:m-4 lg:w-80 lg:ml-4 hidden md:block md:mr-1"></div>
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

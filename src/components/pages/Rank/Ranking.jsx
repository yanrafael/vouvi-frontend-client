import React, { useState } from "react";
import HeaderIntern from "../../Header/HeaderIntern";
import Card from "../../Cards/cardXPRank.jsx";
import CardLateral from "../../Cards/CardVCRank.jsx";
import Colocacao from '../../Cards/cardRicoRank.jsx'
import Footer from '../../Footer/Footer.jsx'


const Ranking = () => {
  const [selectedOption, setSelectedOption] = useState("Especialista");

  const [darkMode, setDarkMode] = useState(
    document.body.classList.contains("dark")
  );

  const options = [
    { label: "Dedicado", xp: "500 XP" },
    { label: "Economista", xp: "2000 XP" },
    { label: "Esforçado", xp: "3500 XP" },
    { label: "Especialista", xp: "5000 XP" },
  ];

  const ranking = [
    { nome: 'Você', xp: 13.657 },
    { nome: 'Izzy', xp: 12.102 },
    { nome: 'Kim', xp: 10.018 },
    { nome: 'Rich', xp: 9.657 },
    { nome: 'Michael', xp: 9.102 },
    { nome: 'Roberto', xp: 9.018 },
    { nome: 'Chris', xp: 9.013 },
    { nome: 'Chesp', xp: 8.755 },
    { nome: 'Billie', xp: 8.124 },
    { nome: 'Naye', xp: 7.802 },
    { nome: 'User', xp: 5.614 },
    { nome: 'User', xp: 5.614 },
    { nome: 'User', xp: 5.614 },
    { nome: 'User', xp: 5.614 },
    { nome: 'User', xp: 5.614 },
    { nome: 'User', xp: 5.614 },
    { nome: 'User', xp: 5.614 },
    { nome: 'User', xp: 5.614 },
    { nome: 'User', xp: 5.614 },
    { nome: 'User', xp: 5.614 }
  ]

  const lateral = [
    { nome: 'Roberto', vc: 8.511 },
    { nome: 'Chesp', vc: 7.012 },
    { nome: 'Elon', vc: 6.944 },
    { nome: 'Michael', vc: 5614 },
    { nome: 'Rich', vc: 5614 },
    { nome: 'Naye', vc: 5614 },
    { nome: 'Luna', vc: 5614 },
    { nome: 'Banner', vc: 5614 },
    { nome: 'Vilagran', vc: 5614 },
    { nome: 'Luke', vc: 5614 },
    { nome: 'Vader', vc: 5614 },
    { nome: 'Você', vc: 938 },
    { nome: 'Herobri', vc: 5614 },
    { nome: 'Joel', vc: 5614 },
    { nome: 'Cleiton', vc: 5614 }
  ]


  return (
    <>
      <HeaderIntern iconActiveNumber={2} />

      <div className="mt-10 flex flex-row justify-center items-center">
        <div className="flex flex-col w-3/5 mr-5">
          <h2 className="text-primary-200 dark:text-white font-bold text-xl">Os Especialistas!</h2>
          <p className="text-primary-200 dark:text-white font-light text-base">Ranking atualizado</p>
        </div>
        <div className="flex flex-col  w-1/4">
          <p className="text-[#471650] dark:text-white font-light text-md">Mostrando ranking</p>
          <div className="relative w-80">
            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="w-full p-2 border-2 border-[#471650] dark:border-primary-200 rounded-lg bg-[#7C20BE1A] text-[#471650] dark:text-primary-200 text-md font-light focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {options.map((option) => (
                <option
                  key={option.label}
                  value={option.label}
                  className="dark:bg-[#1a001a] dark:text-white bg-white text-[#1a001a]"
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
        <div className=" bg-[#DFDFDE] dark:bg-[#1F1F1F] w-3/5 mr-5 rounded-lg p-10 max-h-1/5" >
          <div className=" flex justify-evenly">
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
          <div className="overflow-y-auto h-1/4 .scrollbar-thin scrollbar-webkit ">
            {ranking.slice(3, ranking.length).map((ranking, index) => (
              <Card posicao={index + 4} nome={ranking.nome} xp={ranking.xp} />
            ))}
          </div>
          <div className="mt-10"></div>
          <div className="mt-4 text-center font-bold h-12 flex items-center justify-center text-md">
            <span className="bg-white dark:bg-[#1F1F1F] flex items-center h-12 rounded-sm cursor-pointer" style={{ color: "red" }}>▼ Zona de Rebaixamento ▼</span>
          </div>
        </div>
        <div className="  bg-primary-200 dark:bg-[#1F1F1F] w-1/4 rounded-lg p-5 flex flex-col items-center">
          <div className="w-full">
            <p className="text-teste text-base font-bold text-white">Ricos da Vouvi</p>
            <p className="text-teste mb-3 text-white text-md font-light">Ranking de Vcoins</p>
          </div>
          {lateral.map((lateral, index) => (
            lateral.nome === 'Você'
              ? <CardLateral posicao={index + 1} vc={lateral.vc} nome="Usuario" />
              : <></>
          ))}
          <div className="flex w-full border-2 rounded-md m-4 border-card"></div>
          {lateral.map((lateral, index) => (
            <CardLateral posicao={index + 1} vc={lateral.vc} nome={lateral.nome} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
};

export default Ranking;


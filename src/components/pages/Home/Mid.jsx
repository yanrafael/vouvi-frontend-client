import AiCards from "../../Cards/AiCards";
import AiCardsReverse from "../../Cards/AiCardsReverse";
import AiIcon from "../../../assets/images/ai-icon.svg";
import LineTopLeft from "../../../assets/images/line-top-left.svg";
import LineTopRight from "../../../assets/images/line-top-right.svg";
import LineDownLeft from "../../../assets/images/line-down-left.svg";
import LineDownRight from "../../../assets/images/line-down-right.svg";
import Rewards from "../../../assets/images/missionsandrewards.png";
import { Icon } from "@iconify/react";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Mid() {
  const TextGradient =
    "text-[transparent] bg-[linear-gradient(90deg,#02020B_0%,#3D3D3D_100%);] dark:bg-[linear-gradient(90deg,#F5F5F4_12.77%,#8F8F8E_86.51%)] bg-clip-text";

  useEffect(() => {
    AOS.init({ duration: 1200 });
  });

  return (
    <>
      <section className="mt-72 flex flex-col items-center">
        <h1
          data-aos="fade-up"
          className={`text-center lg:text-[90px] text-[72px] font-medium leading-[1.2] ${TextGradient}`}
        >
          Planejamento inteligente
        </h1>

        <p
          data-aos="fade-up"
          className={`text-center text-[18px] lg:text-[28px] ${TextGradient} relative top-3`}
        >
          Inteligência artificial? Aqui é para organizar sua vida!
        </p>

        <div
          className="flex flex-col"
          aria-label="A imagem mostra um ícone de banco de dados. O ícone é composto por três cilindros pretos empilhados horizontalmente, representando discos de armazenamento de dados, sobre um fundo cinza claro. Este ícone é frequentemente usado para representar bancos de dados em contextos de tecnologia da informação e desenvolvimento de software, sendo relevante para identificar sistemas de gerenciamento de dados."
          title="A imagem mostra um ícone de banco de dados."
        >
          <div className="relative m-auto lg:bottom-0 bottom-3 flex items-center ">
            <div
              data-aos="fade-right"
              aria-label=""
              className="relative top-[20px] lg:top-[40px] 2xl:right-3 flex"
              title=""
            >
              <AiCards
                icon={<Icon icon="solar:database-bold" className="text-[65px] lg:text-[85px] xl:text-[108px]" />}
                text={"Acompanhamento de Dados"}
              />

              <img
                className="relative top-14 lg:top-[70px] xl:top-20 w-[60px] lg:w-[80px] xl:w-[100px] lg:right-2 xl:right-0"
                src={LineTopLeft}
                alt="icone de planejamento, um calendario"
              />
            </div>
            <div
              aria-label="ícone de planejamento. um calendario"
              title="ícone de calendario"
              data-aos="fade-left"
              className="relative left-[40px] xl:left-[60px] 2xl:left-[100px] top-[40px] flex justify-center"
            >
              <img className="w-[180px] lg:w-[240px] xl:w-[300px]" src={LineTopRight} alt="" />
              <AiCardsReverse
                icon={<Icon icon="solar:calendar-bold" className="text-[65px] lg:text-[85px] xl:text-[108px]" />}
                text={"Planejamento personalizável"}
              />
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            className="flex items-center justify-center"
          >
            <img src={AiIcon} alt="" className="w-[80px] lg:w-[145px] 2xl:w-[182px]" />
            <p className="absolute text-[36px] lg:text-[72px] 2xl:text-2xl text-[#8D8D8D]">IA</p>
          </div>

          <div className="relative m-auto flex top-1 lg:top-3 items-center">
            <div
              aria-label="ícone de relogio"
              title="ícone de relogio preto"
              data-aos="fade-right"
              className="relative bottom-[45px] right-[0px] flex"
            >
              <AiCards
                icon={<Icon icon="lets-icons:time-atack" className="text-[65px] lg:text-[85px] xl:text-[108px]" />}
                text={"Dicas em Tempo Real"}
              />
              <img
                className="w-[180px] lg:w-[240px] 2xl:w-[300px] top-3 lg:top-0 relative"
                src={LineDownLeft}
                alt="ícone de relogio"
              />
            </div>
            <div
              aria-label="A imagem mostra um logo e texto. O logo consiste em um círculo preto com três linhas curvas brancas dentro, parecendo um gráfico ou diagrama estilizado."
              title="ícone de grafíco"
              data-aos="fade-left"
              className="relative bottom-[30px] lg:bottom-[60px] left-[20px] lg:left-[35px] 2xl:left-[60px] flex items-end justify-center"
            >
              <img src={LineDownRight} alt="" className="w-[140px] lg:w-[180px] 2xl:w-[224px]" />
              <AiCardsReverse
                icon={<Icon icon="solar:round-graph-bold" className="text-[65px] lg:text-[85px] xl:text-[108px]" />}
                text={"Gráficos inteligentes"}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-52 flex flex-col items-center">
        <h1
          data-aos="fade-right"
          className={`${TextGradient} text-center text-xl lg:text-2xl font-medium xl:leading-[1.2]`}
        >
          Domine o jogo, domine o dinheiro!
        </h1>
        <p data-aos="fade-right" className={`${TextGradient} text-sm lg:text-base`}>
          Economize de verdade com cada missão completa.
        </p>

        <div className="relative m-auto mt-[50px] lg:mt-[100px] flex w-11/12 items-center justify-evenly rounded-md bg-[#D9D9D9]">
          <img
            className="w-[40%] lg:w-[58%]"
            src={Rewards}
            alt="Fundo azul com várias letras 'XP' em diferentes tamanhos e opacidades espalhadas. No centro, há uma forma amarela brilhante semelhante a uma estrela ou um brilho."
            aria-label="Fundo azul com várias letras 'XP' em diferentes tamanhos e opacidades espalhadas. No centro, há uma forma amarela brilhante semelhante a uma estrela ou um brilho."
            title="ícone chamado Vcon, representando dinheiro da vouvi"
          />
          <div className="flex h-[20vw] lg:h-[29vw] w-[50%] lg:w-[38%] items-center rounded-md bg-[#01438A]">
            <p data-aos="fade-left" className={`${TextGradient} ml-5 lg:ml-10 text-lg lg:text-xl`}>
              Missões e Recompensas
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Mid;

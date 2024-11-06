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
      <section className="flex flex-col items-center mt-72">
        <h1
        data-aos="fade-up"
          className={`text-2xl leading-[1.2] text-center font-medium ${TextGradient}`}
        >
          Planejamento inteligente
        </h1>

        <p
        data-aos="fade-up"
          className={`text-base text-center ${TextGradient} relative top-3 text-center`}
        >
          Inteligência artificial? Aqui é para organizar sua vida!
        </p>

        <div className="flex flex-col" aria-label="A imagem mostra um ícone de banco de dados. O ícone é composto por três cilindros pretos empilhados horizontalmente, representando discos de armazenamento de dados, sobre um fundo cinza claro. Este ícone é frequentemente usado para representar bancos de dados em contextos de tecnologia da informação e desenvolvimento de software, sendo relevante para identificar sistemas de gerenciamento de dados." title="A imagem mostra um ícone de banco de dados.">
          <div className="flex m-auto relative items-center">
            <div data-aos="fade-right" aria-label=""  className="flex relative top-[40px]" title="">
              <AiCards
                icon={<Icon icon="solar:database-bold" height={108} />}
                text={"Acompanhamento de Dados"}
              />
              <img className="relative top-16 " src={LineTopLeft} alt="icone de planejamento, um calendario" />
            </div>
            <div aria-label="ícone de planejamento. um calendario" title="ícone de calendario" data-aos="fade-left" className="flex justify-center relative left-[100px] top-[40px]">
              <img className="w-[300px]" src={LineTopRight} alt="" />
              <AiCardsReverse
                icon={<Icon icon="solar:calendar-bold" height={108} />}
                text={"Planejamento personalizável"}
              />
            </div>
          </div>

          <div data-aos="zoom-in-up" className="flex justify-center items-center">
            <img src={AiIcon} alt="" />
            <p className="absolute text-[#8D8D8D] text-2xl">IA</p>
          </div>

          <div className="flex m-auto relative items-center">
            <div aria-label="ícone de relogio" title="ícone de relogio preto" data-aos="fade-right" className="flex relative bottom-[45px] right-[0px]">
              <AiCards
                icon={<Icon icon="lets-icons:time-atack" height={108} 
                
                />}
                text={"Dicas em Tempo Real"}
              />
              <img className="w-[300px]" src={LineDownLeft} alt="ícone de relogio" />
            </div>
            <div aria-label="A imagem mostra um logo e texto. O logo consiste em um círculo preto com três linhas curvas brancas dentro, parecendo um gráfico ou diagrama estilizado." title="ícone de diagrama preto" title="ícone de grafíco" data-aos="fade-left" className="flex justify-center relative left-[60px] bottom-[60px] items-end">
              <img src={LineDownRight} alt="" />
              <AiCardsReverse
                icon={<Icon icon="solar:round-graph-bold" height={108}/>}
                text={"Gráficos inteligentes"}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center mt-52">
        <h1
        data-aos="fade-right"
          className={`${TextGradient} text-2xl xl:leading-[1.2] text-center font-medium`}
        >
          Domine o jogo, domine o dinheiro!
        </h1>
        <p data-aos="fade-right" className={`${TextGradient} text-base`}>
          Economize de verdade com cada missão completa.
        </p>

        <div className="w-11/12 flex justify-evenly items-center m-auto bg-[#D9D9D9] rounded-md relative mt-[100px]">
          <img className="w-[58%]" src={Rewards} alt="Fundo azul com várias letras 'XP' em diferentes tamanhos e opacidades espalhadas. No centro, há uma forma amarela brilhante semelhante a uma estrela ou um brilho." aria-label="Fundo azul com várias letras 'XP' em diferentes tamanhos e opacidades espalhadas. No centro, há uma forma amarela brilhante semelhante a uma estrela ou um brilho." title="ícone chamado Vcon, representando dinheiro da vouvi"/>
          <div className="bg-[#01438A] w-[38%] rounded-md h-[29vw] flex items-center" >
            <p data-aos='fade-left' className={`${TextGradient} text-xl ml-10`}>
              Missões e Recompensas
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Mid;

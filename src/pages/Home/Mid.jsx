import AiCards from "../../components/Cards/AiCards";
import AiCardsReverse from "../../components/Cards/AiCardsReverse";
import AiIcon from "../../assets/images/ai-icon.svg";
import LineTopLeft from "../../assets/images/line-top-left.svg";
import LineTopRight from "../../assets/images/line-top-right.svg";
import LineDownLeft from "../../assets/images/line-down-left.svg";
import LineDownRight from "../../assets/images/line-down-right.svg";
import Rewards from "../../assets/images/missionsandrewards.png";
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
          className={`text-center text-[36px] sm:text-[50px] md:text-[72px] lg:text-[90px] font-medium leading-[1.2] ${TextGradient}`}
        >
          Planejamento
          inteligente
        </h1>

        <p
          data-aos="fade-up"
          className={`text-center text-[18px] lg:text-[28px] ${TextGradient} relative top-3`}
        >
          Inteligência artificial? Aqui é para organizar sua vida!
        </p>

        <div
          className="mt-20 flex flex-col p-10 lg:mt-0 lg:p-0"
          aria-label="A imagem mostra um ícone de banco de dados. O ícone é composto por três cilindros pretos empilhados horizontalmente, representando discos de armazenamento de dados, sobre um fundo cinza claro. Este ícone é frequentemente usado para representar bancos de dados em contextos de tecnologia da informação e desenvolvimento de software, sendo relevante para identificar sistemas de gerenciamento de dados."
        >
          <div className="relative bottom-3 m-auto flex items-center lg:bottom-0">
            <div
              title="A imagem mostra um ícone de banco de dados."
              data-aos="fade-right"
              className="relative top-[40px] flex"
              aria-label=""
              className="relative flex lg:top-[40px] 2xl:right-3"
            >
              <AiCards
                icon={
                  <Icon
                    icon="solar:database-bold"
                    className="text-[85px] xl:text-[108px]"
                  />
                }
                text={"Acompanhamento de Dados"}
              />

              <img
                className="relative right-2 top-[70px] hidden w-[80px] lg:flex 2xl:right-0 2xl:top-20 2xl:w-[100px]"
                src={LineTopLeft}
                alt="icone de planejamento, um calendario"
              />
            </div>
            <div
              aria-label="ícone de planejamento. um calendario"
              title="ícone de calendario"
              data-aos="fade-left"
              className="relative flex justify-center lg:left-[40px] lg:top-[40px] xl:left-[60px] 2xl:left-[100px]"
            >
              <img
                className="hidden lg:flex lg:w-[240px] 2xl:w-[300px]"
                src={LineTopRight}
                alt=""
              />
              <AiCardsReverse
                icon={
                  <Icon
                    icon="fluent:calendar-ltr-16-filled"
                    className="text-[100px] xl:text-[120px]"
                  />
                }
                text={`Planejamento personalizável`}
              />
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            className="hidden items-center justify-center lg:flex"
          >
            <img src={AiIcon} alt="" className="w-[145px] 2xl:w-[182px]" />
            <p className="absolute text-[72px] text-[#8D8D8D] 2xl:text-2xl">
              IA
            </p>
          </div>

          <div className="relative flex justify-between lg:top-3 lg:m-auto">
            <div
              aria-label="ícone de relogio"
              title="ícone de relogio preto"
              data-aos="fade-right"
              className="relative flex lg:bottom-[45px]"
            >
              <AiCards
                icon={
                  <Icon
                    icon="lets-icons:time-atack"
                    className="text-[85px] xl:text-[108px]"
                  />
                }
                text={"Dicas em Tempo Real"}
              />
              <img
                className="relative -top-2 hidden w-[240px] lg:flex 2xl:w-[300px]"
                src={LineDownLeft}
                alt="ícone de relogio"
              />
            </div>
            <div
              aria-label="A imagem mostra um logo e texto. O logo consiste em um círculo preto com três linhas curvas brancas dentro, parecendo um gráfico ou diagrama estilizado."
              title="ícone de diagrama preto"
              data-aos="fade-left"
              className="relative flex items-end justify-center lg:bottom-[60px] lg:left-[35px] 2xl:left-[60px]"
            >
              <img
                src={LineDownRight}
                alt=""
                className="relative hidden w-[180px] lg:left-[15px] lg:flex 2xl:w-[224px]"
              />
              <AiCardsReverse
                icon={
                  <Icon
                    icon="solar:round-graph-bold"
                    className="text-[100px] xl:text-[120px]"
                  />
                }
                text={"Gráficos inteligentes"}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-52 flex flex-col items-center">
        <h1
          data-aos="fade-right"
          className={`${TextGradient} text-center font-medium text-[36px] sm:text-[50px] md:text-[72px] lg:text-[90px] xl:leading-[1.2] leading-[1]`}
        >
          Domine o jogo, domine o dinheiro!
        </h1>
        <p
          data-aos="fade-right"
          className={`${TextGradient} text-sm lg:text-base`}
        ></p>

        <div className="relative flex-wrap lg:flex-nowrap p-6 lg:p-0 m-auto mt-[50px] flex w-11/12 items-center justify-evenly rounded-md bg-[#D9D9D9] lg:mt-[100px]">
          <img
            className="w-[100%] lg:w-[58%]"
            src={Rewards}
            alt="Fundo azul com várias letras 'XP' em diferentes tamanhos e opacidades espalhadas. No centro, há uma forma amarela brilhante semelhante a uma estrela ou um brilho."
            aria-label="Fundo azul com várias letras 'XP' em diferentes tamanhos e opacidades espalhadas. No centro, há uma forma amarela brilhante semelhante a uma estrela ou um brilho."
            title="ícone chamado Vcon, representando dinheiro da vouvi"
          />
          <div className="flex h-[20vw] lg:h-[29vw] w-[100%] lg:w-[38%] items-center lg:justify-normal justify-center rounded-md bg-[#01438A]">
            <p
              data-aos="fade-left"
              className={`bg-clip-text text-[transparent] bg-[linear-gradient(90deg,#F5F5F4_12.77%,#8F8F8E_86.51%)] ml-5 text-lg lg:ml-10 lg:text-[50px] xl:text-xl`}
            >
              Missões e Recompensas
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Mid;

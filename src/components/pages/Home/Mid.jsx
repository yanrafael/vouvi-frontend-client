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
          className={`text-center text-2xl font-medium leading-[1.2] ${TextGradient}`}
        >
          Planejamento inteligente
        </h1>

        <p
          data-aos="fade-up"
          className={`text-center text-base ${TextGradient} relative top-3 text-center`}
        >
          Inteligência artificial? Aqui é para organizar sua vida!
        </p>

        <div className="flex flex-col">
          <div className="relative m-auto flex items-center">
            <div data-aos="fade-right" className="relative top-[40px] flex">
              <AiCards
                icon={<Icon icon="solar:database-bold" height={108} />}
                text={"Acompanhamento de Dados"}
              />
              <img className="relative top-16" src={LineTopLeft} alt="" />
            </div>
            <div
              data-aos="fade-left"
              className="relative left-[100px] top-[40px] flex justify-center"
            >
              <img className="w-[300px]" src={LineTopRight} alt="" />
              <AiCardsReverse
                icon={<Icon icon="solar:calendar-bold" height={108} />}
                text={"Planejamento personalizável"}
              />
            </div>
          </div>

          <div
            data-aos="zoom-in-up"
            className="flex items-center justify-center"
          >
            <img src={AiIcon} alt="" />
            <p className="absolute text-2xl text-[#8D8D8D]">IA</p>
          </div>

          <div className="relative m-auto flex items-center">
            <div
              data-aos="fade-right"
              className="relative bottom-[45px] right-[0px] flex"
            >
              <AiCards
                icon={<Icon icon="lets-icons:time-atack" height={108} />}
                text={"Dicas em Tempo Real"}
              />
              <img className="w-[300px]" src={LineDownLeft} alt="" />
            </div>
            <div
              data-aos="fade-left"
              className="relative bottom-[60px] left-[60px] flex items-end justify-center"
            >
              <img src={LineDownRight} alt="" />
              <AiCardsReverse
                icon={<Icon icon="solar:round-graph-bold" height={108} />}
                text={"Gráficos inteligentes"}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-52 flex flex-col items-center">
        <h1
          data-aos="fade-right"
          className={`${TextGradient} text-center text-2xl font-medium xl:leading-[1.2]`}
        >
          Domine o jogo, domine o dinheiro!
        </h1>
        <p data-aos="fade-right" className={`${TextGradient} text-base`}>
          Economize de verdade com cada missão completa.
        </p>

        <div className="relative m-auto mt-[100px] flex w-11/12 items-center justify-evenly rounded-md bg-[#D9D9D9]">
          <img className="w-[58%]" src={Rewards} alt="" />
          <div className="flex h-[29vw] w-[38%] items-center rounded-md bg-[#01438A]">
            <p data-aos="fade-left" className={`${TextGradient} ml-10 text-xl`}>
              Missões e Recompensas
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Mid;

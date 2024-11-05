import PrimaryButton from "../../Buttons/PrimaryButton";
import Cards from "../../Cards/MarketingCards";
import FireIcon from "../../../assets/images/fire-icon.svg";
import GreenIcon from "../../../assets/images/graphicgreen-icon.svg";
import HeartIcon from "../../../assets/images/heart-icon.svg";
import BackgroundV from "../../../assets/videos/video-background.mp4";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

function Top() {
  const TextGradient =
    "text-[transparent] bg-[linear-gradient(90deg,#02020B_0%,#3D3D3D_100%);] dark:bg-[linear-gradient(90deg,#F5F5F4_12.77%,#8F8F8E_86.51%)] bg-clip-text";

  useEffect(() => {
    AOS.init({ duration: 1200 });
  });

  return (
    <>
      <section className="flex flex-col">
        {/* Background */}
        <div className="absolute top-0 w-full -z-10 h-screen overflow-hidden ">
          <video
            className="min-h-full opacity-20 object-cover blur-md  "
            src={BackgroundV}
            autoPlay
            muted
            loop
          ></video>
          <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t dark:from-black from-white to-transparent"></div>
        </div>

        <div className="flex flex-col justify-center text-center m-auto text-black dark:text-white mt-[200px]">
          <h1 className="text-[90px] font-normal leading-[0.85]">
            <strong className=" text-secondary-200 font-medium drop-shadow-[0px_0px_50px_#007FFF] ">
              Transforme
            </strong>{" "}
            suas{" "}
            <strong className="text-primary-200 font-medium">finanças</strong>
            <br />
            em uma{" "}
            <strong className="text-primary-200 font-medium">aventura</strong>
          </h1>
          <p className="text-[36px] mt-7">Aprenda a fazer essa grana durar!</p>
        </div>

        <Link to={"/create-account"}>
          <PrimaryButton text={"Começar agora"} />
        </Link>

        <div
          className="m-auto flex flex-col justify-center items-center mt-[150px]"
        >
          <p className="dark:text-white text-[36px]">Saiba mais</p>
          <Icon
            className="relative bottom-6 text-black dark:text-white"
            icon="ep:arrow-down-bold"
            width="7rem"
          />
        </div>
      </section>

      <h1
        className={`flex text-2xl justify-center mt-40 mb-10 leading-[1.2] font-medium text-center ${TextGradient} `}
        data-aos="fade-up"
      >
        Educação Financeira
      </h1>

      <section
        className="flex justify-center !scroll-smooth"
        data-aos="fade-up"
      >
        <Cards
          img={FireIcon}
          title={"Zero dívidas!"}
          text={"Aprenda a se livrar das despesas e manter sua conta no azul."}
          color="text-[#FFB515] bg-[radial-gradient(105.89%_105.89%_at_50%_105.89%,rgba(255,184,104,0.26)_0%,rgba(2,2,11,0.00)_100%);] dark:bg-[radial-gradient(105.89%_105.89%_at_50%_105.89%,rgba(253,163,61,0.26)_0%,rgba(2,2,11,0.26)_100%)]"
        />
        <Cards
          img={GreenIcon}
          title={"Grana que cresce!"}
          text={"Saber investir é fazer seu dinheiro trabalhar por você."}
          color="text-[#14A900] bg-[radial-gradient(104.28%_104.28%_at_50.1%_104.28%,rgba(20,169,0,0.26)_0%,rgba(8,67,0,0.00)_100%)]"
        />
        <Cards
          img={HeartIcon}
          title={"Realize sonhos!"}
          text={"Com planejamento, seu sonho tá logo ali na esquina."}
          color="text-[#FF0084] bg-[linear-gradient(0deg,rgba(255,0,132,0.26)_-8.57%,rgba(255,0,132,0.00)_100%)]"
        />
      </section>
    </>
  );
}
export default Top;

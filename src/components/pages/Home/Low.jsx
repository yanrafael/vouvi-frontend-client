import FeedbackCard from "../../Cards/FeedbackCard";
import PrimaryButton from "../../Buttons/PrimaryButton";
import SecondaryButton from "../../Buttons/SecondaryButton";
import Subscription from "../../Cards/SubscriptionCard";
import FiveStars from "../../../assets/images/fivestars-icon.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import subscriptionHover from "../../../assets/images/subscription-hover.svg";
import subscriptionStar from "../../../assets/images/subscription-star.svg";
import subscriptionStar2 from "../../../assets/images/subscription-star2.svg";
import subscriptionStar3 from "../../../assets/images/subscription-star3.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Low() {
  const TextGradient =
    "text-[transparent] bg-[linear-gradient(90deg,#02020B_0%,#3D3D3D_100%);] dark:bg-[linear-gradient(90deg,#F5F5F4_12.77%,#8F8F8E_86.51%)] bg-clip-text";

  useEffect(() => {
    AOS.init({ duration: 1200 });
  });

  return (
    <>
      <section className="bg-slate-500 relative m-auto mt-[200px] flex w-10/12">
        <div className="flex w-[60%] flex-col">
          <div data-aos="zoom-in-up" className="flex justify-between">
            <FeedbackCard 
              color={"bg-[#FA7ABC] text-[#A90057]"}
              text={"Manda a real!"}
            />
            <FeedbackCard
              img={FiveStars}
              color={"bg-[#FABE7A] text-[#773F00]"}
              text={"Avalie-nos"}
            />
          </div>
          <div data-aos="zoom-in-up" className="mt-6 flex justify-between" >
            <FeedbackCard
              color={"bg-[#84CE7A] text-[#0A5800]"}
              text={"Solta o verbo!"}
            />
            <FeedbackCard
              color={"bg-[#B88AD9] text-[#480479]"}
              text={`Diz aí, Mandamos bem?`}
            />
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="ml-10 flex w-[40%] flex-col items-start justify-center"
        >
          <div className="flex flex-col">
            <h1
              data-aos="fade-left"
              className={`${TextGradient} text-2xl font-medium`}
            >
              A Gente Cresce Com Seu Feedback
            </h1>
            <p
              data-aos="zoom-in-up"
              className={`${TextGradient} mb-16 mt-5 text-base`}
            >
              Você faz parte do Time.
              <br /> Queremos te ouvir!
            </p>
          </div>
          <SecondaryButton
            color={
              " text-white hover:text-black bg-black dark:text-black dark:bg-white dark:hover:text-white"
            }
            text={"Enviar feedback"}
          />
        </div>
      </section>

      <section data-aos="fade-right">
        <h1
          className={`${TextGradient} mt-[160px] text-center text-2xl font-medium xl:leading-[1.2]`}
        >
          Escolha o plano e vire o jogo
        </h1>
        <p
          className={`${TextGradient} m-auto mb-20 w-4/6 text-center text-base`}
        >
          Do básico ao premium, tem um plano certinho para sua caminhada
          financeira. Bora começar e subir de nível!
        </p>
        <div className="flex justify-evenly">
          <Subscription
            color={"bg-[#007FFF]"}
            colortitle={"text-[#002952]"}
            title={"Free"}
            price={"Gratuito"}
            text1={"Acesso às aulas de educação financeira."}
            text2={"Newsletter duas vezes por semana."}
            text3={"Ferramentas de planejamento."}
            colorbutton={
              "bg-[#002952] hover:outline-[#002952] hover:text-[#002952]"
            }
            texthover={
              "Ideal para quem está começando a aprender sobre finanças."
            }
          />
          <Subscription
            color={
              "bg-primary-200 border-8 dark:border-black outline outline-8 outline-primary-300 relative"
            }
            colortitle={"text-[#35005B]"}
            title={"Premium"}
            price={"R$14,90"}
            mes={"/Mês"}
            text1={"Acesso às aulas personalizadas."}
            text2={"Vida infinita e recompensas únicas."}
            text3={"Relatórios mensais detalhados."}
            bold={"font-medium"}
            colorbutton={
              "bg-primary-300 hover:outline-primary-300 hover:text-primary-300 "
            }
            texthover={
              "Perfeito para quem quer se aprofundar no controle financeiro."
            }
          >
            <img
              src={subscriptionHover}
              className="pointer-events-none absolute -top-64 -ml-64 scale-[2] opacity-30 transition-transform duration-1000 group-hover:translate-x-[550px] group-hover:translate-y-[650px]"
            />
          </Subscription>
          <Subscription
            color={"bg-[#FFB120] dark:bg-[#FFB12099]"}
            colortitle={"text-[#583900]"}
            title={"Family"}
            price={"R$39,90"}
            mes={"/Mês"}
            text1={"Todos os benefícios do Plano Premium."}
            text2={"Acesso para até 4 pessoas."}
            text3={`Suporte com o fin.`}
            bold={'z-10'}
            colorbutton={
              "bg-[#6B4B08] hover:outline-[#6B4B08] hover:text-[#6B4B08] "
            }
            texthover={
              "Para profissionais e empresários que buscam otimizar finanças."
            }
          >
              <div className="absolute -z-10 ml-0 mt-10 opacity-0 group-hover:opacity-60 ">
                <img src={subscriptionStar} alt="" />
              </div>
              <div className="absolute -z-10 ml-0 mt-[380px] rotate-45 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                <img src={subscriptionStar2} alt="" />
              </div>
              <div className="absolute -z-20 ml-52 mt-[150px] opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                <img src={subscriptionStar3} alt="" />
              </div>
          </Subscription>
        </div>
      </section>

      <section className="m-auto w-8/12">
        <p
          className={`${TextGradient} mb-16 mt-[200px] text-center text-base font-light`}
        >
          Venha com a gente e faça valer cada centavo. <br />
          <strong className="font-bold">
            Junte-se à
            <strong className="text-primary-200 dark:bg-black">Vouvi</strong> e
            transforme sua vida financeira!
          </strong>
        </p>
        <Link to={"/create-account"}>
          <PrimaryButton text={"Começar agora!"} />
        </Link>
      </section>
    </>
  );
}
export default Low;

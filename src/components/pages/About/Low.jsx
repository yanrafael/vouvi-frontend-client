import Cat from "../../../assets/images/cat2-about-us.svg";
import PrimaryButton from "../../Buttons/PrimaryButton";
function Low() {
  return (
    <>
      <section className="m-auto mt-20 flex items-center justify-around leading-[1]">
        <div className="w-[580px] text-white">
          <h1 className="text-xl font-medium text-black dark:text-white">
            Método de Ensino
          </h1>
          <p className="mt-20 text-[40px] font-light text-black dark:text-white">
            Utilizamos uma abordagem{" "}
            <strong className="text-primary-200">prática</strong> e{" "}
            <strong className="text-secondary-200">interativa</strong> que
            combina jogos, quadrinhos e atividades para tornar o aprendizado
            sobre finanças{" "}
            <strong className="text-primary-200">divertido</strong> e
            envolvente.
          </p>
        </div>
        <img src={Cat} alt="" />
      </section>

      <section className="m-auto mt-40 flex w-11/12 justify-around">
        <div className="w-5/12 rounded-[72px] bg-[#7C20BE33] p-20 pb-40 leading-[1] text-white">
          <h1 className="text-xl font-medium text-[#7C20BE]">Nossa Equipe</h1>
          <p className="mt-28 text-[40px] font-light text-black dark:text-white">
            Contamos com uma equipe de especialistas em finanças, educadores e
            designers que trabalham juntos para criar uma experiência de
            aprendizado única e eficaz.
          </p>
        </div>
        <div className="w-5/12 rounded-[72px] bg-secondary-200/20 p-20 pb-40 leading-[1] text-white dark:bg-[#0029524D]">
          <h1 className="text-xl font-medium text-[#002952]">Impacto Social</h1>
          <p className="mt-28 text-[40px] font-light text-black dark:text-white">
            Estamos comprometidos em impactar positivamente a vida das pessoas.
            Oferecemos educação financeira para comunidades de baixa renda,
            ajudamos a construir um futuro mais sustentável.
          </p>
        </div>
      </section>

      <section className="m-auto w-8/12">
        <p
          className={`mb-16 mt-[200px] text-center text-base font-light text-black dark:text-white`}
        >
          Na <strong className="font-bold text-primary-200">Vouvi</strong>,
          acreditamos que todos podem aprender a lidar melhor com seu dinheiro.{" "}
          <strong className="font-bold">
            Junte-se à nós e transforme sua vida financeira.
          </strong>
        </p>
        <PrimaryButton text={"Começar agora!"} />
      </section>
    </>
  );
}
export default Low;

import Cat from "../../../assets/images/cat-about-us.svg";
import Target from "../../../assets/images/target-about-us.svg";
function Top() {
  return (
    <>
      <section className="m-auto mt-10 flex items-center justify-evenly text-2xl font-medium text-primary-200">
        <h1>
          Aprenda a <br /> dominar suas <br /> finanças de <br /> forma
          divertida!
        </h1>
        <img src={Cat} alt="" />
      </section>
      <section className="m-auto mt-52 flex w-11/12 flex-col rounded-[72px] bg-secondary-200/10 p-20 leading-[1] dark:bg-[#0029524D]">
        <div className="m-auto flex">
          <img src={Target} alt="" />
          <div className="relative mx-20 flex h-fit w-[40rem] flex-col rounded-md bg-secondary-200/20 p-8 text-white dark:bg-[#0029524D]">
            <h1 className="text-xl font-medium text-[#002952] dark:text-secondary-200">
              Missão
            </h1>
            <p className="mt-5 text-[40px] font-light text-black dark:text-white">
              Empoderar <strong className="text-secondary-200">todos</strong> a
              conquistar um <strong className="text-primary-200">futuro</strong>{" "}
              financeiro saudável por meio de educação{" "}
              <strong className="text-secondary-200">acessível</strong> e{" "}
              <strong className="text-primary-200">gamificada.</strong>
            </p>
          </div>
        </div>
        <div className="mt-20 flex">
          <div className="relative flex h-fit w-[690px] flex-col rounded-md bg-secondary-200/20 p-8 text-white dark:bg-[#0029524D]">
            <h1 className="text-xl font-medium text-[#002952] dark:text-secondary-200">
              Valores
            </h1>
            <p className="mt-5 text-[40px] font-light text-black dark:text-white">
              {" "}
              <strong className="text-primary-200">Transformar </strong>a
              educação financeira em uma{" "}
              <strong className="text-secondary-200">experiência</strong>{" "}
              divertida e eficaz.
            </p>
          </div>
          <div className="relative bottom-40 left-10 flex h-fit w-[690px] flex-col rounded-md bg-secondary-200/20 p-8 text-white dark:bg-[#0029524D]">
            <h1 className="darktext-secondary-200 text-xl font-medium text-[#002952]">
              Visão
            </h1>
            <p className="mt-5 text-[40px] font-light text-black dark:text-white">
              {" "}
              <strong className="text-primary-200">Educação </strong>para todos,{" "}
              <strong className="text-secondary-200">Inovação</strong>,{" "}
              <strong className="text-primary-200">Inclusão</strong> e{" "}
              <strong className="text-secondary-200">Transparência</strong>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Top;

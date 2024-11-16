import { Icon } from "@iconify/react";
import PropTypes from "prop-types";

function UserReturn() {
  return (
    <section className="lg:fixed left-0 top-0 z-20 flex h-full lg:w-full items-center justify-center overflow-y-hidden lg:shadow-2xl backdrop-blur-[25px] dark:bg-black/50 md:h-auto md:mt-50 ">
      <div className="flex h-[600px] w-8/12 flex-col items-center justify-center rounded-md bg-white p-6 shadow-2xl dark:bg-[#1B1B1B] dark:shadow-black">
        <p className="text-[40px] text-black dark:text-[#FFFFFF] font-semibold md:text-[30px]">
          Você voltou, sentimos sua falta!
        </p>{" "}
        <p className="text-[20px]">O que deseja fazer?</p>
        <div className="flex h-[400px] w-11/12 items-center justify-around rounded-md p-8  md:items-center ">
          <Box
            icon={
              <Icon
                className="text-primary-200"
                icon="solar:home-2-bold"
                width="130px"
              />
            }
            cor={true}
            texto="Voltar a última atividade"
          />
          <Box
            icon={
              <Icon
                className="text-secondary-200"
                icon="solar:graph-up-bold"
                width="130px"
              />
            }
            cor={false}
            texto="Atualizar as suas finanças"
          />
        </div>
      </div>
    </section>
  );
}

function Box({ icon, cor, texto }) {
  return (
    <div
      className={`${cor ? "hover:bg-primary-200" : "hover:bg-secondary-200"} hover:rounded-md hover:border-8 hover:bg-opacity-30 ${cor ? "hover:border-[#7C20BE]" : "hover:border-secondary-200"} lg:flex lg:h-[250px] lg:w-4/12 flex-col items-center justify-center rounded-md bg-secondary-200/20 p-4 text-black shadow-black dark:bg-black dark:text-white  md:text-center flex md:h-[200px] md:w-5/12`}
    >
      {icon}
      <p className="text-[20px] font-bold md:text-[16px]">{texto}</p>
    </div>
  );
}

Box.propTypes = {
  icon: PropTypes.element,
  cor: PropTypes.bool,
  texto: PropTypes.string,
};

export default UserReturn;

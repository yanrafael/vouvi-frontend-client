import CatBanner from "../../../assets/images/cat-banner-store.svg";
import PrimaryButton from "../../Buttons/PrimaryButton";
import StoreButton from "../../Buttons/StoreButton";
import { useState } from "react";
import { Icon } from "@iconify/react";

function Top() {
  const [btnColor, setBtnColor] = useState(0);

  const activeButton = (index) => {
    setBtnColor(index);
  };

  return (
    <>
      <section className="m-auto mt-24 flex w-11/12 justify-between rounded-md bg-primary-100 px-10 pt-10 outline outline-[26px] outline-[#7C20BE33]">
        <div className="ml-5 mt-5 w-3/6 text-primary-200">
          <h1 className="text-xl font-bold">Seja Premium</h1>
          <p className="mt-6 text-lg font-light">
            Energia infinita, ferramentas avançadas, e relatórios em PDF, para
            toda a família.
          </p>
          <div className="relative mt-14 w-fit pb-10">
            <PrimaryButton text={"Assinar agora!"} />
          </div>
        </div>
        <img
          src={CatBanner}
          alt="gato Fin, Uma ilustração em estilo cartoon de um gato preto com olhos bem abertos que têm dinheiro roxos nas pupilas. A boca do gato está aberta e um brilho roxo com dinheiro está emanando dela. O fundo é de cor roxa clara e o gato está usando um colar azul."
          title="gato Fin, Uma ilustração em estilo cartoon de um gato preto "
        />
      </section>

      <hr className="m-auto mb-14 mt-20 w-10/12 rounded-md bg-black p-1 dark:bg-[#F5F5F442]" />

      <section className={`m-auto w-11/12 relative`}>
        <div className="mb-6 flex items-center justify-between gap-4 overflow-hidden overflow-x-scroll">
          <div className="mr-20 text-base leading-[1] text-black dark:text-white">
            <h1 className={`font-medium`}>Personalize!</h1>
            <p className="font-light">Gaste vcoins!</p>
          </div>

          <div onClick={() => setBtnColor(0)}>
            <StoreButton
            title="opções de acessórios"
              color={
                btnColor === 0
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-[#8D8D8D] dark:bg-[#1F1F1F] text-white"
              }
              text={"Todos"}
            >
              <Icon icon={"solar:star-shine-bold"} title="opções de acessórios"/>
            </StoreButton>
          </div>

          <div onClick={() => setBtnColor(1)}>
            <StoreButton
              color={
                btnColor === 1
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-[#8D8D8D] dark:bg-[#1F1F1F] text-white"
              }
              text={"Olhos"}
            >
              <Icon icon={"mingcute:eye-fill"} />
            </StoreButton>
          </div>

          <div onClick={() => setBtnColor(2)}>
            <StoreButton
              color={
                btnColor === 2
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-[#8D8D8D] dark:bg-[#1F1F1F] text-white"
              }
              text={"Pelos"}
            >
              <Icon icon={"icon-park-outline:texture"} />
            </StoreButton>
          </div>

          <div onClick={() => setBtnColor(3)}>
            <StoreButton
              color={
                btnColor === 3
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-[#8D8D8D] dark:bg-[#1F1F1F] text-white"
              }
              text={"Coleiras"}
            >
              <Icon icon={"carbon:circle-dash"} />
            </StoreButton>
          </div>

          <div onClick={() => setBtnColor(4)}>
            <StoreButton
              color={
                btnColor === 4
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-[#8D8D8D] dark:bg-[#1F1F1F] text-white"
              }
              text={"Pingente"}
            >
              <Icon icon={"mdi:necklace"} />
            </StoreButton>
          </div>

          <div onClick={() => activeButton(5)}>
            <StoreButton
              color={`${
                btnColor === 5
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-[#8D8D8D] dark:bg-[#1F1F1F] text-white"
              }`}
              text={"Fundos"}
              title="opções de fundo"
            >
              <Icon icon={"mynaui:square-solid"} />
            </StoreButton>
          </div>
        </div>
        <div className="to-transparent absolute right-0 bottom-5 h-20 w-32 bg-gradient-to-l from-[#FFFFFF] dark:from-[#000000]"></div>
      </section>
    </>
  );
}
export default Top;

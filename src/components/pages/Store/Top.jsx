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
      <section className="w-11/12 m-auto flex justify-between bg-primary-100 outline outline-[26px] outline-[#7C20BE33] rounded-md px-10 pt-10 mt-24">
        <div className="text-primary-200 w-3/6 mt-5 ml-5">
          <h1 className="text-xl font-bold">Seja Premium</h1>
          <p className="text-lg font-light mt-6">
            Energia infinita, ferramentas avançadas, e relatórios em PDF, para
            toda a família.
          </p>
          <div className="w-fit mt-14 relative pb-10">
            <PrimaryButton text={"Assinar agora!"} />
          </div>
        </div>
        <img src={CatBanner} alt="" />
      </section>

      <hr className="p-1 w-10/12 m-auto bg-[#F5F5F442] mt-20 rounded-md mb-14" />

      <section className={`m-auto w-11/12 `}>
        <div className="flex justify-between items-center mb-6">
          <div className="text-white text-base leading-[1] mr-20">
            <h1 className={`font-medium`}>Personalize!</h1>
            <p className="font-light">Gaste vcoins!</p>
          </div>

          <div onClick={() => setBtnColor(0)}>
            <StoreButton
              color={
                btnColor === 0
                  ? "bg-white text-black"
                  : "bg-[#1F1F1F] text-white"
              }
              text={"Todos"}
            >
              <Icon icon={"solar:star-shine-bold"} />
            </StoreButton>
          </div>

          <div onClick={() => setBtnColor(1)}>
            <StoreButton
              color={
                btnColor === 1
                  ? "bg-white text-black"
                  : "bg-[#1F1F1F] text-white"
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
                  ? "bg-white text-black"
                  : "bg-[#1F1F1F] text-white"
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
                  ? "bg-white text-black"
                  : "bg-[#1F1F1F] text-white"
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
                  ? "bg-white text-black"
                  : "bg-[#1F1F1F] text-white"
              }
              text={"Pingente"}
            >
              <Icon icon={"mdi:necklace"} />
            </StoreButton>
          </div>

          <div onClick={() => activeButton(5)}>
            <StoreButton
              color={`${btnColor === 5 ? "bg-white text-[#02020b]" : ""}`}
              text={"Fundos"}
            >
              <Icon icon={"mynaui:square-solid"} />
            </StoreButton>
          </div>
        </div>
      </section>
    </>
  );
}
export default Top;

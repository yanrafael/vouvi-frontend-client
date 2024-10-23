import CatBanner from "../../../assets/images/cat-banner-store.svg";
import PrimaryButton from "../../Buttons/PrimaryButton";
import StoreButton from "../../Buttons/StoreButton";
import { useState } from "react";
import { Icon } from "@iconify/react";
function Top() {
  const activeButtonColor = "bg-white text-[#02020B]";
  const [btColor, noBtColor] = useState(0);

  const activeButton = (index) => {
    noBtColor(index);
  };
  return (
    <>
      <section className="w-11/12 m-auto flex justify-between bg-primary-100 outline outline-[26px] outline-[#7C20BE33] rounded-md px-10 pt-10 mt-24">
        <div className="text-primary-200 w-3/6 mt-5 ml-5">
          <h1 className="text-xl font-bold">Seja Premium</h1>
          <p className="text-lg font-light mt-6">
            Energia infinita, ferramentas avançadas e relatórios em PDF para
            toda a família!
          </p>
          <div className="w-fit mt-14 relative pb-10">
            <PrimaryButton text={"Assinar agora!"} />
          </div>
        </div>
        <img src={CatBanner} alt="" />
      </section>

      <hr className="p-1 w-10/12 m-auto bg-[#F5F5F442] mt-20 rounded-md mb-14" />

      <section className="m-auto w-11/12">
        <div className="flex justify-between items-center mb-6">
          <div className="text-white text-base leading-[1] mr-20">
            <h1 className="font-medium">Personalize!</h1>
            <p className="font-light">Gaste vcoins!</p>
          </div>

          <div onClick={() => activeButton(0)}>
            <StoreButton
              color={`${btColor === 0 ? activeButtonColor : ""}`}
              text={"Todos"}
            >
              <Icon icon={"solar:star-shine-bold"} />
            </StoreButton>
          </div>

          <div onClick={() => activeButton(1)}>
            <StoreButton
              color={`${btColor === 1 ? activeButtonColor : ""}`}
              text={"Olhos"}
            >
              <Icon icon={"mingcute:eye-fill"} />
            </StoreButton>
          </div>

          <div onClick={() => activeButton(2)}>
            <StoreButton
              color={`${btColor === 2 ? activeButtonColor : ""}`}
              text={"Pelos"}
            >
              <Icon icon={"icon-park-outline:texture"} />
            </StoreButton>
          </div>

          <div onClick={() => activeButton(3)}>
            <StoreButton
              color={`${btColor === 3 ? activeButtonColor : ""}`}
              text={"Coleiras"}
            >
              <Icon icon={"carbon:circle-dash"} />
            </StoreButton>
          </div>

          <div onClick={() => activeButton(4)}>
            <StoreButton
              color={`${btColor === 4 ? activeButtonColor : ""}`}
              text={"Pingente"}
            >
              <Icon icon={"mdi:necklace"} />
            </StoreButton>
          </div>

          <div onClick={() => activeButton(5)}>
            <StoreButton
              color={`${btColor === 5 ? activeButtonColor : ""}`}
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

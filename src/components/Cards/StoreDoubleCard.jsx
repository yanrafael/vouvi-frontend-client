import StoreCard from "./StoreCard";
import { Icon } from "@iconify/react";

function StoreDoubleCard({
  icon1,
  icon2,
  title1,
  title2,
  text1,
  text2,
  color1,
  color2,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
}) {
  return (
    <section className="flex flex-col rounded-md bg-[#007FFF33] p-3 md:p-10 dark:bg-[#1F1F1F]">
      <div className="mb-5 flex flex-col items-center justify-between text-[20px] text-black md:flex-row md:text-[25px] lg:text-base dark:text-white">
        <div className="flex items-center font-medium">
          <Icon icon={`${icon1}`} />
          <h3 className="mx-2">{title1}</h3>
        </div>
        <p className="font-extralight">{text1}</p>
      </div>

      <div className="flex flex-wrap justify-center md:flex-nowrap md:justify-between md:overflow-x-scroll">
        <StoreCard
          color3={"bg-[#002952]"}
          color={color1}
          color2={"bg-secondary-200"}
        >
          <img className="rounded-sm" src={img1} alt="" />
        </StoreCard>
        <StoreCard
          color3={"bg-[#002952]"}
          color={"bg-white"}
          color2={"bg-secondary-200"}
        >
          <img className="rounded-sm" src={img2} alt="" />
        </StoreCard>
        <StoreCard
          color3={"bg-[#002952]"}
          color={"bg-white"}
          color2={"bg-secondary-200"}
        >
          <img className="rounded-sm" src={img3} alt="" />
        </StoreCard>
        <StoreCard
          color3={"bg-[#002952]"}
          color={"bg-white"}
          color2={"bg-secondary-200"}
        >
          <img className="rounded-sm" src={img4} alt="" />
        </StoreCard>
        <StoreCard
          color3={"bg-[#002952]"}
          color={"bg-white"}
          color2={"bg-secondary-200"}
        >
          <img className="rounded-sm" src={img5} alt="" />
        </StoreCard>
        <StoreCard
          color3={"bg-[#002952]"}
          color={color2}
          color2={"bg-secondary-200"}
        >
          <img className="rounded-sm" src={img1} alt="" />
        </StoreCard>
      </div>

      <div className="mb-5 mt-12 flex flex-col items-center justify-between text-[20px] text-black md:flex-row md:text-[25px] lg:text-base dark:text-white">
        <div className="flex items-center font-medium">
          <Icon icon={`${icon2}`} />
          <h3 className="mx-2">{title2}</h3>
        </div>
        <p className="font-extralight">{text2}</p>
      </div>

      <div className="flex flex-wrap justify-center md:flex-nowrap md:justify-between md:overflow-x-scroll">
        <StoreCard
          color3={"bg-[#002952]"}
          color={"bg-white"}
          color2={"bg-secondary-200"}
        >
          <img className="rounded-sm" src={img6} alt="" />
        </StoreCard>
        <StoreCard
          color3={"bg-[#002952]"}
          color={"bg-white"}
          color2={"bg-secondary-200"}
        >
          <img className="rounded-sm" src={img7} alt="" />
        </StoreCard>
        <StoreCard
          color3={"bg-[#002952]"}
          color={"bg-white"}
          color2={"bg-secondary-200"}
        >
          <img className="rounded-sm" src={img8} alt="" />
        </StoreCard>
        <StoreCard
          color3={"bg-[#002952]"}
          color={"bg-white"}
          color2={"bg-secondary-200"}
        >
          <img className="rounded-sm" src={img9} alt="" />
        </StoreCard>
        <StoreCard
          color3={"bg-[#002952]"}
          color={"bg-white"}
          color2={"bg-secondary-200"}
        >
          <img className="rounded-sm" src={img10} alt="" />
        </StoreCard>
        <StoreCard
          color3={"bg-[#002952]"}
          color={"bg-white"}
          color2={"bg-secondary-200"}
        >
          <img className="rounded-sm" src={img6} alt="" />
        </StoreCard>
      </div>
    </section>
  );
}
export default StoreDoubleCard;

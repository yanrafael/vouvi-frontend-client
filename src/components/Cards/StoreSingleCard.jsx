import StoreCard from "./StoreCard";

function StoreSingleCard({
  children,
  title,
  color1,
  color2,
  color3,
  color4,
  img1,
  img2,
  img3,
}) {
  return (
    <section className={`${color4} mb-20 mt-20 flex h-[600px] gap-10 rounded-md dark:bg-[#1F1F1F] p-10 max-2xl:justify-between`}>
      <div className="flex h-[490px] w-[560px] flex-none rounded-md bg-[#C4C4C47D]">
        {children}
      </div>
      <div className="flex flex-col relative">
        <h1 className="text-base font-semibold text-black dark:text-white">{title} </h1>
        <div className="mt-10 flex flex-wrap justify-center overflow-y-scroll ">
          <StoreCard color2={'bg-primary-200'} color3={'bg-[#470063]'} color={color1}>
            <img className="rounded-sm" src={img1} alt="" />
          </StoreCard>
          <StoreCard color2={'bg-primary-200'} color3={'bg-[#470063]'} color={color2}>
            <img className="rounded-sm" src={img2} alt="" />
          </StoreCard>
          <StoreCard color2={'bg-primary-200'} color3={'bg-[#470063]'} color={color3}>
            <img className="rounded-sm" src={img3} alt="" />
          </StoreCard>
        </div>
        <div className="to-transparent absolute right-0 bottom-0 h-10 w-full bg-gradient-to-t from-[#E3D3F3] dark:from-[#1F1F1F]"></div>
      </div>
    </section>
  );
}
export default StoreSingleCard;

function AiCards({ icon, text }) {
  return (
    <div className="relative left-5 flex-wrap md:flex-nowrap flex xl:flex-nowrap">
      <div className="float-left rounded-lg bg-[rgba(141,141,141,0.30)]">
        {icon}
      </div>
      <div>
        <p className="ml-5 w-2/4 xl:text-base lg:text-[24px] text-[20px] font-bold text-[#8D8D8D] leading-[1]">{text}</p>
      </div>
    </div>
  );
}

export default AiCards;

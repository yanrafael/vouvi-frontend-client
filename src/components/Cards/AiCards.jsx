function AiCards({ icon, text }) {
  return (
    <div className="relative flex flex-wrap items-center justify-center md:justify-start 2xl:left-36 lg:left-[10%] left-20">
      <div className="rounded-lg bg-[rgba(141,141,141,0.30)] p-2">{icon}</div>
      <div className="ml-5 w-full md:w-2/4">
        <p className="text-center md:text-left xl:text-base lg:text-[24px] text-[20px] font-bold text-[#8D8D8D] leading-[1]">{text}</p>
      </div>
    </div>
  );
}

export default AiCards;

function AiCards({ icon, text }) {
  return (
    <div className="relative flex items-center 2xl:left-36 lg:left-[10%]">
      <div className="rounded-lg bg-[rgba(141,141,141,0.30)] p-2">{icon}</div>
      <div className="ml-5 w-2/4">
        <p className="text-left xl:text-base text-sm sm:text-[24px] font-bold text-[#8D8D8D] leading-[1]">{text}</p>
      </div>
    </div>
  );
}

export default AiCards;

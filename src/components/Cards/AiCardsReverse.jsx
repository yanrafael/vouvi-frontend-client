function AiCards({ icon, text }) {
  return (
    <div className="relative flex justify-end items-center lg:flex-row-reverse">
      <div className="float-left rounded-lg bg-[rgba(141,141,141,0.30)]">
        {icon}
      </div>
        <p className=" ml-5 lg:ml-0 lg:mr-5 w-[150px] lg:w-2/4 xl:text-base sm:text-[24px] text-sm lg:text-right font-bold text-[#8D8D8D] leading-[1]">{text}</p>
    </div>
  );
}

export default AiCards;

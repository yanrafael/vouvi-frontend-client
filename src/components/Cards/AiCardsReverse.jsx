function AiCards({ icon, text }) {
  return (
    <div className="relative lg:right-5 flex justify-end items-center flex-row-reverse">
      <div className="float-left rounded-lg bg-[rgba(141,141,141,0.30)]">
        {icon}
      </div>
        <p className=" mr-5 w-2/4 xl:text-base text-[24px] text-right font-bold text-[#8D8D8D] leading-[1]">{text}</p>
    </div>
  );
}

export default AiCards;

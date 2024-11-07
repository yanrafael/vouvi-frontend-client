function AiCards({ icon, text }) {
  return (
    <div className="relative left-5 flex flex-wrap">
      <div className="float-left rounded-lg bg-[rgba(141,141,141,0.30)]">
        {icon}
      </div>
      <div>
        <p className="ml-5 w-2/4 text-base font-bold text-[#8D8D8D]">{text}</p>
      </div>
    </div>
  );
}

export default AiCards;

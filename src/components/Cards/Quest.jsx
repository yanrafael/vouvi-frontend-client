function Quest({ children, quest, amount, text }) {
  return (
    <div className="w-[80%] rounded-[28px_24px_24px_24px] bg-[rgba(255,255,255,0.50);] dark:bg-[#D9D9D9]">
      <div className="flex leading-[1]">
        <p className="z-[1] rounded-[24px_0px_24px_0px] bg-[#471650] px-4 py-2 xl:text-[28px] 2xl:text-[32px] text-white dark:bg-[#3D3D3D]">
          {quest}
          <strong className="text-white dark:text-[#1A1A1A]"> {amount}</strong>
        </p>
        {children}
      </div>
      <li className="ml-2 p-3 xl:text-[28px] 2xl:text-[32px] font-medium text-[#471650] dark:text-[#3D3D3D]">
        {text}
      </li>
    </div>
  );
}
export default Quest;

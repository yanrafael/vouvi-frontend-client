function InsigneModalCard({ img, title, text, color }) {
  return (
    <div
      className={`flex h-72 w-80 flex-col items-center justify-center rounded-md font-medium leading-[0.9] text-black dark:text-white ${color}`}
    >
      <img src={img} alt="" />
      <h3 className="whitespace-nowrap text-[38px] tracking-tight">{title}</h3>
      <p className="text-[24px]">{text}</p>
    </div>
  );
}
export default InsigneModalCard;

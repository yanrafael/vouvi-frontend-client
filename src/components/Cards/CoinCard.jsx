function Card({ icon, title, text, color, background }) {
  return (
    <div
      style={background}
      className={`${color} flex flex-col items-center justify-center rounded-md p-5 font-medium leading-[1] text-white xl:h-[110px] xl:w-[150px] xl:px-16 2xl:h-[150px] 2xl:w-[200px] 2xl:px-20`}
    >
      <img src={icon} alt="" />
      <h2 className="xl:text-[26px] 2xl:text-[32px]">{title}</h2>
      <p className="xl:text-[20px] 2xl:text-[24px]">{text}</p>
    </div>
  );
}
export default Card;

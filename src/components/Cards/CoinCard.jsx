function Card({ icon, title, text, color, background }) {
  return (
    <div
      style={background}
      className={`${color} flex flex-col items-center justify-center rounded-md p-5 font-medium leading-[1] sm:h-[140px] sm:w-[160px]  lg:h-[100px] lg:w-[140px] text-white xl:h-[120px] xl:w-[160px] sm:px-14 lg:px-12 xl:px-14 2xl:h-[150px] 2xl:w-[200px] 2xl:px-20`}
    >
      <img src={icon} alt="" />
      <h2 className="sm:text-[30px] lg:text-[21px] xl:text-[26px] 2xl:text-[32px]">{title}</h2>
      <p className="sm:text-[24] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]">{text}</p>
    </div>
  );
}
export default Card;

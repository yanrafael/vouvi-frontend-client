function Card({ icon, title, text, color, background }) {
  return (
    <div
      style={background}
      className={`${color} flex h-[150px] w-[200px] flex-col items-center justify-center rounded-md p-5 px-20 font-medium leading-[1] text-white`}
    >
      <img src={icon} alt="" />
      <h2 className="text-[32px]">{title}</h2>
      <p className="text-[24px]">{text}</p>
    </div>
  );
}
export default Card;

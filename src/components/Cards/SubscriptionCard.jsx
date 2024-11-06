import SecondaryButton from "../Buttons/SecondaryButton";

function Subscription({
  color,
  colorbutton,
  colortitle,
  title,
  price,
  text1,
  text2,
  text3,
  texthover,
  mes,
  bold,
}) {
  return (
    <div
      className={`${color} group flex h-[35rem] w-96 flex-col justify-between overflow-hidden rounded-md py-10 text-white`}
    >
      <div className="flex flex-col items-center">
        <h3 className={`${colortitle} text-[40px] font-bold`}>{title}</h3>
        <h2 className="text-lg font-semibold">
          {price} <strong className="text-[24px] font-medium">{mes}</strong>
        </h2>
      </div>
      <div className="ml-10 mt-10 flex w-9/12 flex-col gap-3 text-left text-[32px] font-extralight leading-[1] transition-all duration-500 group-hover:pointer-events-none group-hover:cursor-text group-hover:opacity-0">
        <div className="flex">
          <li className="w-5"></li>
          <p className={`${bold} `}>{text1}</p>
        </div>
        <div className="flex">
          <li className="w-5"></li>
          <p className={`${bold} `}>{text2}</p>
        </div>
        <div className="flex">
          <li className="w-5"></li>
          <p className={`${bold} `}>{text3}</p>
        </div>
      </div>

      <div className="pointer-events-none mx-10 flex justify-center leading-[1.3] opacity-0 transition-all duration-700 group-hover:pointer-events-auto group-hover:-translate-y-72 group-hover:opacity-100">
        <p className="absolute text-center text-[32px]">{texthover}</p>
        <SecondaryButton
          color={`absolute mt-[200px] hover:bg-opacity-100 hover:bg-white ${colorbutton}`}
          text={"Assinar Agora!"}
        />
      </div>
    </div>
  );
}
export default Subscription;

import SecondaryButton from "../Buttons/SecondaryButton"

function Subscription({color,colorbutton,colortitle,title,price,text1,text2,text3,texthover,mes,bold}) {

    return (
        <div className={`${color} w-[28%] flex justify-between flex-col text-white rounded-md py-10 group overflow-hidden`}>
            <div className="flex flex-col items-center ">
                <h3 className={`${colortitle} font-bold text-[40px]`}>{title}</h3>
                <h2 className=" font-semibold text-lg">{price} <strong className="text-[24px] font-medium">{mes}</strong></h2>
            </div>
            <div className="font-extralight text-[32px] ml-20 mt-10 flex flex-col text-left w-9/12 transition-all duration-500 group-hover:opacity-0 group-hover:cursor-text group-hover:pointer-events-none" >
                <div className="flex">
                    <li></li>
                    <p className={`${bold} `}>{text1}</p>
                </div>
                <div className="flex">
                    <li></li>
                    <p className={`${bold} `}>{text2}</p>
                </div>
                <div className="flex">
                    <li></li>
                    <p className={`${bold} `}>{text3}</p>
                </div>
            </div>

            <div className="mx-10 pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:-translate-y-72 flex justify-center  ">
                <p className="absolute text-[32px] text-center">{texthover}</p>
                <SecondaryButton color={`absolute mt-[200px] hover:bg-opacity-100 hover:bg-white ${colorbutton}`} text={"Assinar Agora!"}/>
            </div>
        </div>
    )
}
export default Subscription
function Subscription({color,colortitle,title,price,text1,text2,text3,mes,bold}) {
    return (
        <div className={`${color} w-[28%] flex flex-col text-white rounded-md`}>
            <div className="flex flex-col items-center mt-10 ">
                <h3 className={`${colortitle} font-bold text-[40px]`}>{title}</h3>
                <h2 className=" font-semibold text-lg">{price} <strong className="text-[24px] font-medium">{mes}</strong></h2>
            </div>
            <div className="font-extralight text-[32px] ml-20 mt-10 flex items-center flex-col text-left w-9/12">
                <div className="flex">
                    <li></li>
                    <p className={`${bold}`}>{text1}</p>
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
        </div>
    )
}
export default Subscription
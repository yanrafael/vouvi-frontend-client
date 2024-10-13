function Subscription({color,colortitle,title,price,text1,text2,text3,mes}) {
    return (
        <div className={`${color} w-3/12 flex flex-col text-white rounded-md`}>
            <div className="flex flex-col items-center mt-10">
                <h3 className={`${colortitle} font-bold text-[40px]`}>{title}</h3>
                <h2 className=" font-semibold text-lg">{price} <strong className="text-[24px] font-medium">{mes}</strong></h2>
            </div>
            <div className="font-extralight text-[32px] m-16">
                <li>{text1}</li>
                <li>{text2}</li>
                <li>{text3}</li>
            </div>
        </div>
    )
}
export default Subscription
function Insigne({icon,title,text}) {
    return (
        <div className="flex my-5">
            <div className="bg-[#3c3c3c] p-4 rounded-md flex-none">
                <img className="w-[116px] h-[130px]" src={icon} />
            </div>

            <div className="ml-5 leading-[1]">
                <h1 className="text-[40px] text-white font-medium">{title}</h1>
                <p className="text-[24px] text-white font-light">{text}</p>
            </div>
        </div>
    )
}
export default Insigne
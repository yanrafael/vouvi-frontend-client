function Insigne({icon,title,text}) {
    return (
        <div className="flex my-5">
            <div className="bg-[rgba(255,255,255,0.50);] dark:bg-[#3c3c3c] p-4 rounded-md flex-none">
                <img className="w-[116px] h-[130px]" src={icon} />
            </div>

            <div className="ml-5 leading-[1] text-[#471650] dark:text-white">
                <h1 className="text-[40px] font-medium">{title}</h1>
                <p className="text-[24px] ">{text}</p>
            </div>
        </div>
    )
}
export default Insigne
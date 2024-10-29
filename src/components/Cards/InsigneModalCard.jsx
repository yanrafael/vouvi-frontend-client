function InsigneModalCard({img,title,text,color}){
    return(
        <div className={`h-72 w-80 flex flex-col justify-center font-medium leading-[0.9] items-center dark:text-white text-black rounded-md ${color}`}>
            <img src={img} alt="" />
            <h3 className="text-[38px] whitespace-nowrap tracking-tight">{title}</h3>
            <p className="text-[24px] ">{text}</p>
        </div>
    )
}
export default InsigneModalCard
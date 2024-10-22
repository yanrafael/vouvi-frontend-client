function PrimaryButton({text,color}){
    return(
        <button className={`${color} text-white  bg-primary-200 relative flex justify-center m-auto items-center rounded-sm h-[70px] px-10 font-bold mt-8 transition-all duration-200 hover:bg-opacity-0 hover:outline hover:outline-[6px] hover:text-primary-200 `}>
            <p className="text-[36px] ">{text}</p>
        </button>
    )
}
export default PrimaryButton
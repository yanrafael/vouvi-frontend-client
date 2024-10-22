function SecondaryButton({text,color}){
    return(
        <button className={`${color} h-[75px] px-10 text-[32px] rounded-md flex font-bold items-center justify-center transition-all duration-200 hover:bg-opacity-0 hover:outline hover:outline-[6px]`}>
            <p>{text}</p>
        </button>
    )
}
export default SecondaryButton

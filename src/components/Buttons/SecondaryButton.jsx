function SecondaryButton({text,color}){
    return(
        <button className={`${color} bg-white  h-[75px] px-10 text-[32px] rounded-md flex font-bold items-center justify-center`}>
            <p>{text}</p>
        </button>
    )
}
export default SecondaryButton

function PrimaryButton({text}){
    return(
        <button className="bg-teal-300 relative flex justify-center m-auto items-center rounded-[20px] h-[70px] px-10 font-bold mt-8">
            <p className="text-[36px] text-white ">{text}</p>
        </button>
    )
}
export default PrimaryButton
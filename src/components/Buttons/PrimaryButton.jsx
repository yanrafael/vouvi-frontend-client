function PrimaryButton({text}){
    return(
        <button className="bg-primary-200 relative flex justify-center m-auto items-center rounded-sm h-[70px] px-10 font-bold mt-8">
            <p className="text-[36px] text-white ">{text}</p>
        </button>
    )
}
export default PrimaryButton
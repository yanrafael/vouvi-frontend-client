function StoreCards({children,color}) {
    return (
        <div className="bg-black rounded-md p-5 flex flex-col items-center w-[290px] mx-3 mb-5">
            <div className={`${color} w-full h-[230px] rounded-sm flex items-center justify-center`}>
                {children}
            </div>
            <button className={`text-[32px] w-full p-1 bg-yellow rounded-md mt-6 font-medium text-[#351D09] hover:bg-white transition-all duration-500`}>
                Comprar
            </button>
        </div>
    )
}
export default StoreCards
function Quest({ children, quest, amount, text }) {
    return (
        <div className=" w-[80%] bg-[#D9D9D9] rounded-[28px_24px_24px_24px]">
            <div className="flex">
                <p className="text-[32px] z-[1] text-white py-2 px-4 rounded-[24px_0px_24px_0px]  bg-[#3D3D3D]">{quest}<strong className="text-[#1A1A1A]"> {amount}</strong></p>
                {children}
            </div>
            <li className="text-[32px] text-[#3D3D3D] ml-2 p-3">
            {text}
            </li>
        </div>
    )
}
export default Quest
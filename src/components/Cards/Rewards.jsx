function Rewards({ xp, vicon, vcoin, gift, tgift, pad, pad2, pad3 }) {
    return (
        <div className=" ml-10 w-[330px] p-5 bg-[#D9D9D9] rounded-md text-[32px] font-bold flex justify-between">
            <div className={`${pad} bg-[#014085] flex flex-col items-center justify-center rounded-md `}>
                <div className="bg-secondary-200 rounded-xl text-[#014085] px-2">XP</div>
                <p className="text-secondary-200">{xp}</p>
            </div>

            <div className={`${pad2} bg-yellow flex flex-col items-center rounded-md justify-center`}>
                <img src={vicon} alt="" />
                <p className="text-[#FFFBDB] ">{vcoin}</p>
            </div>

            <div className={`${pad3} bg-[#81340A] flex flex-col items-center rounded-md justify-center `}>
                <div className="bg-[#D45D1B] rounded-xl p-2 px-4">{gift}</div>
                <p className="text-[#D45D1B] text-nowrap">{tgift}</p>
            </div>
        </div>
    )
}
export default Rewards
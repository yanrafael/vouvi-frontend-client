function AiCards({ icon, text }) {
    return (
        <div className="relative flex flex-wrap items-center left-36">
            <div className="rounded-lg bg-[rgba(141,141,141,0.30)]">
            {icon}
            </div>
            <div>
                <p className='text-[#8D8D8D] text-base ml-5 font-bold w-2/4'>{text}</p>
            </div>
        </div>
    )
}

export default AiCards

function AiCards({ icon, text }) {
    return (
        <div className=" relative flex flex-wrap left-5">
            <div className=" rounded-lg float-left bg-[rgba(141,141,141,0.30)]">
                {icon}
            </div>
            <div>
                <p className='text-[#8D8D8D] text-base font-bold w-2/4 ml-5'>{text}</p>
            </div>

        </div>
    )
}

export default AiCards
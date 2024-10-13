function Cards({ title, text, img, color, gradient }) {

    return (
        <div style={{
            background: gradient,
        }}
            className={`relative ${color} flex flex-col w-[26%] mx-5 items-center text-center py-14 rounded-md`}>
            <img className=" w-[140px] h-[140px]" src={img} alt="" />
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-base mt-5 font-light w-3/4">{text}</p>
        </div>
    )
}

export default Cards
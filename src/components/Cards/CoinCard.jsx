function Card({ icon, title, text, color, background }) {
    return (
        <div style={background} className={`${color} flex flex-col leading-[1] justify-center items-center rounded-md font-medium px-20 p-5 text-white w-[200px] h-[150px]`}>
            <img src={icon} alt="" />
            <h2 className="text-[32px]">{title}</h2>
            <p className="text-[24px]">{text}</p>
        </div>
    )
}
export default Card
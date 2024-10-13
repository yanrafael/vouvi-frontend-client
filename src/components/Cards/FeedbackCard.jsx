function Feedback({text,text2,color,img}) {
    return (
        <div className={`${color} flex-col text-lg flex items-center text-center justify-center m-auto mr-2.5 mx-2.5 w-6/12 h-[18vw] rounded-3xl bg-white font-medium`}>
            <p>{text}</p>
            <img src={img} alt="" />
        </div>
    )
}
export default Feedback
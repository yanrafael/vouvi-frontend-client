import StoreCard from "./StoreCard"

function StoreSingleCard({children,title,color1,color2,color3,img1,img2,img3}) {
    return (
        <section className='flex bg-[#1F1F1F] p-10 rounded-md mt-20 mb-20 flex-wrap items-center justify-center gap-10'>
            <div className="bg-[#C4C4C47D] w-[560px] h-[490px] rounded-md flex">
                {children}
            </div>
            <div className="flex flex-col mx-10 justify-center items-center">
                <h1 className="text-base text-white font-semibold">{title} </h1>
                <div className="mt-10 flex ">
                <StoreCard color={color1}>
                    <img className='rounded-sm' src={img1} alt="" />
                </StoreCard>
                <StoreCard color={color2}>
                    <img className='rounded-sm' src={img2} alt="" />
                </StoreCard>
                <StoreCard color={color3}>
                    <img className='rounded-sm' src={img3} alt="" />
                </StoreCard>
                </div>
            </div>
        </section>
    )
}
export default StoreSingleCard
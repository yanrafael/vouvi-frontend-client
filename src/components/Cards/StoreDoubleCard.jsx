import StoreCard from './StoreCard';
import { Icon } from '@iconify/react';

function StoreDoubleCard({ icon1, icon2, title1, title2, text1, text2, color1, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10 }) {
    return (
        <section className='flex flex-col bg-[#1F1F1F] p-10 rounded-md'>
            <div className='flex justify-between mb-5 text-white text-base'>
                <div className='font-medium flex items-center'>
                    <Icon icon={`${icon1}`} />
                    <h3 className='mx-2'>{title1}</h3>
                </div>
                <p className='font-extralight'>{text1}</p>
            </div>

            <div className='flex justify-between flex-wrap'>
                <StoreCard color={color1}>
                    <img className='rounded-sm' src={img1} alt="" />
                </StoreCard>
                <StoreCard color={'bg-white'}>
                    <img className='rounded-sm' src={img2} alt="" />
                </StoreCard>
                <StoreCard color={'bg-white'}>
                    <img className='rounded-sm' src={img3} alt="" />
                </StoreCard>
                <StoreCard color={'bg-white'}>
                    <img className='rounded-sm' src={img4} alt="" />
                </StoreCard>
                <StoreCard color={'bg-white'}>
                    <img className='rounded-sm' src={img5} alt="" />
                </StoreCard>
            </div>

            <div className='flex justify-between mb-5 text-white text-base mt-12'>
                <div className='font-medium flex items-center'>
                    <Icon icon={`${icon2}`} />
                    <h3 className='mx-2'>{title2}</h3>
                </div>
                <p className='font-extralight'>{text2}</p>
            </div>

            <div className='flex justify-between flex-wrap'>
                <StoreCard color={'bg-white'}>
                    <img className='rounded-sm' src={img6} alt="" />
                </StoreCard>
                <StoreCard color={'bg-white'}>
                    <img className='rounded-sm' src={img7} alt="" />
                </StoreCard>
                <StoreCard color={'bg-white'}>
                    <img className='rounded-sm' src={img8} alt="" />
                </StoreCard>
                <StoreCard color={'bg-white'}>
                    <img className='rounded-sm' src={img9} alt="" />
                </StoreCard>
                <StoreCard color={'bg-white'}>
                    <img className='rounded-sm' src={img10} alt="" />
                </StoreCard>
            </div>
        </section>
    )
}
export default StoreDoubleCard
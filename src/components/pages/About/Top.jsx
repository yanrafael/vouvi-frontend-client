import Cat from '../../../assets/images/cat-about-us.svg'
import Target from '../../../assets/images/target-about-us.svg'
function Top() {
    return (
        <>
            <section className="flex text-2xl justify-evenly m-auto text-primary-200 items-center font-medium mt-10">
                <h1>Aprenda a <br /> dominar suas <br /> finanças de <br /> forma divertida!</h1>
                <img src={Cat} alt="" />
            </section>
            <section className='bg-[#0029524D] flex flex-col rounded-[72px] w-11/12 m-auto p-20 mt-52 leading-[1]'>
                <div className='flex m-auto'>
                    <img src={Target} alt="" />
                    <div className='bg-[#0029524D] flex flex-col w-[40rem] relative p-8 h-fit rounded-md text-white mx-20'>
                        <h1 className='text-xl text-secondary-200 font-medium'>Missão</h1>
                        <p className='text-[40px] font-light mt-5'>Empoderar <strong className='text-secondary-200'>todos</strong> a conquistar um <strong className='text-primary-200'>futuro</strong> financeiro saudável por meio de educação <strong className='text-secondary-200'>acessível</strong> e <strong className='text-primary-200'>gamificada.</strong></p>
                    </div>
                </div>
                <div className='flex mt-20'>
                    <div className='bg-[#0029524D] flex flex-col w-[690px] relative p-8 h-fit rounded-md text-white '>
                        <h1 className='text-xl text-secondary-200 font-medium'>Valores</h1>
                        <p className='text-[40px] font-light mt-5'> <strong className='text-primary-200'>Transformar </strong>a educação financeira em uma <strong className='text-secondary-200'>experiência</strong> divertida e eficaz.</p>
                    </div>
                    <div className='bg-[#0029524D] flex flex-col w-[690px] relative p-8 h-fit rounded-md text-white bottom-40 left-10'>
                        <h1 className='text-xl text-secondary-200 font-medium'>Visão</h1>
                        <p className='text-[40px] font-light mt-5'> <strong className='text-primary-200'>Educação </strong>para todos, <strong className='text-secondary-200'>Inovação</strong>, <strong className='text-primary-200'>Inclusão</strong> e <strong className='text-secondary-200'>Transparência</strong>.</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Top
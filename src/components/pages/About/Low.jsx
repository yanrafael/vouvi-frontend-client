import Cat from '../../../assets/images/cat2-about-us.svg'
import PrimaryButton from '../../Buttons/PrimaryButton'
function Low() {
    return (
        <>
            <section className="mt-20 flex justify-around m-auto leading-[1] items-center">
                <div className='w-[580px] text-white'>
                    <h1 className='text-xl font-medium'>Método de Ensino</h1>
                    <p className='text-[40px] mt-20 font-light'>Utilizamos uma abordagem <strong className='text-primary-200'>prática</strong> e <strong className='text-secondary-200'>interativa</strong> que combina jogos, quadrinhos  e atividades para tornar o aprendizado sobre finanças <strong className='text-primary-200'>divertido</strong> e envolvente.</p>
                </div>
                <img src={Cat} alt="" />
            </section>

            <section className='flex w-11/12 m-auto justify-around mt-40'>
                <div className='text-white leading-[1] p-20 pb-40 w-5/12 bg-[#7C20BE33] rounded-[72px]'>
                    <h1 className='text-xl font-medium'>Nossa Equipe</h1>
                    <p className='text-[40px] font-light mt-28'>Contamos com uma equipe de especialistas em finanças, educadores e designers que trabalham juntos para criar uma experiência de aprendizado única e eficaz.</p>
                </div>
                <div className='text-white leading-[1] p-20 pb-40 w-5/12 bg-[#0029524D] rounded-[72px]'>
                    <h1 className='text-xl font-medium'>Impacto Social</h1>
                    <p className='text-[40px] font-light mt-28'>Estamos comprometidos em impactar positivamente a vida das pessoas. Oferecemos educação financeira para comunidades de baixa renda, ajudando a construir um futuro mais sustentável.</p>
                </div>
            </section>

            <section className="w-8/12 m-auto ">
                <p className={`text-base text-center mt-[200px] font-light mb-16 text-white`}>
                    Na <strong className="text-primary-200 font-bold">Vouvi</strong>, acreditamos que todos podem aprender a lidar melhor com seu dinheiro. <strong className="font-bold">Junte-se à nós e transforme sua vida financeira!</strong>
                </p>
                <PrimaryButton text={"Começar agora!"} />
            </section>
        </>
    )
}
export default Low
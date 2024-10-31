import Avatar from '../../../assets/images/avatar.svg'
import PrimaryButton from '../../Buttons/PrimaryButton'
function CreateAvatar({onClick}){
    return(
        <section className="bg-[#C9C9C8] dark:bg-[#151515] w-[600px] flex flex-col items-center py-10 rounded-md">

            <div className='w-10/12 text-center mb-8'>
                <h1 className="text-secondary-200 text-lg font-medium">Sucesso!</h1>
                <div className="bg-secondary-200 py-2 rounded-md mt-4"></div>
            </div>

            <p className='text-[32px] text-center mb-8 dark:text-white font-light leading-[1.3]'>Comece a <br/> criar seu avatar!</p>

            <div className='bg-[#7C20BE80] rounded-full w-[301px] h-[301px]'>
                <img width={'400'} src={Avatar} alt="" />
            </div>

            <PrimaryButton onClick={onClick} color={"mt-[45px]"} text={"Criar agora"}/>
        </section>
    )
}
export default CreateAvatar
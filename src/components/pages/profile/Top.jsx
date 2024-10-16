import Avatar from '../../../assets/images/avatar.svg'
import AvatarBg from '../../../assets/images/avatar-background.svg'
import ProfileTags from '../../Cards/ProfileTags'
import CoinCard from '../../Cards/CoinCard'
import Vicon from '../../../assets/images/vcoins-icon.svg'
import purpleBg from '../../../assets/images/purple-bg.svg';
import VouviLover from '../../../assets/images/vouvi-lover-md-icon.svg'

function Top() {
    const progressionbar = 19
    return (
        <section className='flex w-[90%] m-auto mt-14 border-b-2 border-[#F5F5F442] pb-16'>
            <div className='flex flex-none'>
                <div className='bg-[#7C20BE80] rounded-full w-[351px] h-[351px]'>
                    <img src={Avatar} alt="" />
                </div>
            </div>
            <div className='flex flex-col justify-evenly font-medium ml-16 text-white w-6/12'>
                <h1 className='text-lg'>Ana carolina</h1>
                <div className=' bg-blue-500 w-[70%] bg-[#014085] rounded-md px-6'>
                    <div className='flex justify-between text-[32px] font-semibold'>
                        <h2>Nivel</h2>
                        <h2 className='text-secondary-200'>Faltam 200XP</h2>
                    </div>
                    <div className=' flex m-auto w-[100%] h-[10px] bg-[#F5F5F480] rounded-md mb-2'>
                        <div style={{ width: `${progressionbar}%` }} className={` bg-white rounded-md`}></div>
                    </div>
                </div>
                <div className='w-4/6 flex flex-wrap font-medium'>
                    <ProfileTags text={"Sessão de investimentos"} />
                    <ProfileTags text={"15 Amigos"} />
                </div>
            </div>
            <hr className='relative bg-[#F5F5F442] h-96 w-[2px] right-24' />
            <div className='flex flex-col justify-center'>
                <div className='flex'>
                    <CoinCard color={"mr-10 bg-[linear-gradient(180deg,rgba(255,77,0,0.80)_0%,rgba(255,216,46,0.80)_100%);]"} icon={Vicon} title={"928"} text={"vcoins"} />
                    <CoinCard background={{ backgroundImage: `url(${purpleBg})` }} color={"bg-cover bg-center"} icon={VouviLover} title={"928"} text={"vcoins"} />
                </div>
                <div className='mt-4 bg-[#14A90033] text-[#14A900] px-4 py-2 text-[32px] font-bold justify-center flex rounded-md'>Sequência: 23 dias</div>
                <div className='mt-4 bg-[#7C20BE33] text-primary-200 px-4 py-2 text-[32px] font-bold justify-center flex rounded-md'>Especialista em economia</div>
            </div>
        </section>
    )
}
export default Top
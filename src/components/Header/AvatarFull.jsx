import Avatar from '../../assets/images/avatar-sm-icon.svg'
import Vicon from '../../assets/images/vcoins-icon.svg'
import { Link } from 'react-router-dom';
function AvatarFull({ name, xp,vcoins }) {
    return (
        <Link to='/profile'>
            <div className='flex items-center cursor-pointer transition-colors duration-300 p-[8px_16px_8px_20px] rounded-[60px] hover:bg-[#222222]/10 hover:dark:bg-[#222222]'>
                <div className='flex flex-col mr-3 leading-[1.1]'>
                    <h1 className="text-black dark:text-white text-[32px] font-medium  text-right">{name}</h1>
                    {/* Parabens voce está fu**** apenas utilize props para as paginas necessarias */}
                    <div className='text-black dark:text-white text-[24px] flex items-center'>
                        <div className='flex mr-3' >
                            <p className='text-secondary-200 font-bold mr-1'>XP</p>
                            <p>{xp}</p>
                        </div>
                        <div className='flex items-center '>
                            <img className='mr-1' src={Vicon} alt="" />
                            <p>{vcoins}</p>
                        </div>
                    </div>
                </div>
                <img src={Avatar} alt="" />
            </div>
        </Link>
    )
}
export default AvatarFull
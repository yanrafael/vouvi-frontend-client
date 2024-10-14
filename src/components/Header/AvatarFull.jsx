import Avatar from '../../assets/images/avatar-sm-icon.svg'
import Vicon from '../../assets/images/vcoins-icon.svg'

function AvatarFull({ name, xp,vcoins }) {
    return (
        <div className='flex items-center'>
            <div className='flex flex-col mr-3 leading-[1.1]'>
                <h1 className="text-white text-[32px] font-medium  text-right">{name}</h1>

                {/* Parabens voce está fu**** apenas utilize props para as paginas necessarias */}
                <div className='text-white text-[24px] flex items-center'>
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
    )
}
export default AvatarFull
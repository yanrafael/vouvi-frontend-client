import Avatar from '../../assets/images/avatar-sm-icon.svg'

function AvatarBasic({ name }) {
    return (
        <div className='flex items-center'>
            <div className='flex flex-col mr-3 leading-[1.1]'>
                <h1 className="text-white text-[32px] font-medium  text-right">{name}</h1>
            </div>
            <img src={Avatar} alt="" />
        </div>
    )
}
export default AvatarBasic
import Settings from '../../assets/images/settings-icon.svg'

function AvatarBasic() {
    return (
        <div className='flex items-center'>
            <div className='flex flex-col mr-3 leading-[1.1]'>
                <h1 className="text-[#8D8D8D] text-[32px] font-medium  text-right">Ajustes</h1>
            </div>
            <img src={Settings} alt="" />
        </div>
    )
}
export default AvatarBasic
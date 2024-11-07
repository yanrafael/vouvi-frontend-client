function AvatarTrinkets({color,children,onClick}) {
    return (
        <div onClick={onClick} className={`${color} cursor-pointer w-32 h-32 rounded-sm flex items-center justify-center mr-5 outline-4 outline-[#002952] outline dark:outline-none overflow-hidden`}>
            {children}
        </div>
    )
}
export default AvatarTrinkets
function AvatarTrinkets({color,children}) {
    return (
        <div className={`${color} w-32 h-32 rounded-sm flex items-center justify-center mr-5 outline-4 outline-[#002952] outline dark:outline-none overflow-hidden`}>
            {children}
        </div>
    )
}
export default AvatarTrinkets
function AvatarTrinkets({color,children}) {
    return (
        <div className={`${color} w-32 h-32 rounded-sm flex items-center justify-center mr-5`}>
            {children}
        </div>
    )
}
export default AvatarTrinkets
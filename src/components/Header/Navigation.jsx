function Navigation({icon,title,width}) {
    return (
        <li className={`${width} cursor-pointer mx-5 h-[54px] flex items-center bg-[rgba(0,127,255,0.40);] rounded-[360px]`}>
            {icon}
            <p className="flex mx-2 text-[32px] font-medium text-secondary-200">{title}</p>
        </li>
    )
}
export default Navigation
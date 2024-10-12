import Logo from "../../assets/images/logo-white.svg"
function LogoWhite({Name}){
    return(
        <div className="flex items-center text-[50px] font-semibold text-white">
            <img src={Logo} alt="" className=" float-left" />
            <img src={Name} alt="" className="float-left" />
        </div>
    )
}

export default LogoWhite
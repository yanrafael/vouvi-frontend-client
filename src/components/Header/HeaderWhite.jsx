import LogoWhite from "./LogoWhite"
import VouviWord from '../../assets/images/vouvi-white.svg'
import SecondaryButton from '../Buttons/SecondaryButton'

function Header(){
    return(
        <header className="flex justify-between items-center w-[88%] m-auto relative mt-10 ">
            <LogoWhite Name={VouviWord}/>
            <SecondaryButton text={"Entrar"}/>
        </header>
    )
}
export default Header
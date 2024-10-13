import PrimaryButton from "../../Buttons/PrimaryButton";
import Arrow from '../../../assets/images/arrow-down.svg';
import Cards from "../../Cards/MarketingCards";
import FireIcon from '../../../assets/images/fire-icon.svg'
import GreenIcon from '../../../assets/images/graphicgreen-icon.svg'
import HeartIcon from '../../../assets/images/heart-icon.svg'
import { Icon } from '@iconify/react';
function Top() {

    const TextGradient = "text-[transparent] bg-[linear-gradient(90deg,#F5F5F4_12.77%,#8F8F8E_86.51%)] bg-clip-text"

    return (
        <>
            <section className="flex flex-col">

                <div className="flex flex-col justify-center text-center m-auto text-white mt-[200px]">
                    <h1 className="text-[90px] font-semibold leading-[0.85]"><strong className=" text-secondary-200 font-semibold drop-shadow-[0px_0px_50px_#007FFF] ">
                        Transforme</strong> suas <strong className="text-primary-200 font-semibold">finanças</strong>
                        <br />
                        em uma <strong className="text-primary-200 font-semibold">aventura</strong></h1>
                    <p className="text-[36px] mt-7">Aprenda a fazer essa grana durar!</p>
                </div>

                <PrimaryButton text={"Começar agora!"} />

                <div className="m-auto flex flex-col justify-center items-center mt-[150px]">
                    <p className="text-white text-[36px]">Saiba mais</p>
                    <img className="relative bottom-6" src={Arrow} alt="" />
                </div>

            </section>

            <h1
                className={`flex text-2xl justify-center mt-40 mb-10 leading-[1.2] text-center ${TextGradient}`}>Educação Financeira
            </h1>

            <section className="flex justify-center">
                <Cards
                    img={FireIcon}
                    title={"Zero dívidas!"}
                    text={"Aprenda a se livrar das dívidas e manter sua conta no azul!"}
                    color="text-[#FFB515] bg-[radial-gradient(105.89%_105.89%_at_50%_105.89%,rgba(253,163,61,0.26)_0%,rgba(2,2,11,0.26)_100%)]"
                />
                <Cards
                    img={GreenIcon}
                    title={"Grana que cresce!"}
                    text={"Saber investir é fazer seu dinheiro trabalhar por você."}
                    color="text-[#14A900] bg-[radial-gradient(104.28%_104.28%_at_50.1%_104.28%,rgba(20,169,0,0.26)_0%,rgba(8,67,0,0.00)_100%)]"

                />
                <Cards
                    img={HeartIcon}
                    title={"Realize sonhos!"}
                    text={"Com planejamento, seu sonho tá logo ali na esquina!"}
                    color="text-[#FF0084] bg-[linear-gradient(0deg,rgba(255,0,132,0.26)_-8.57%,rgba(255,0,132,0.00)_100%)]"
                />
            </section>
        </>

    )
}
export default Top
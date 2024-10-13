import AiCards from '../../Cards/AiCards'
import AiCardsReverse from '../../Cards/AiCardsReverse'
import AiIcon from '../../../assets/images/ai-icon.svg'
import DatesIcon from '../../../assets/images/dates-icon.svg'
import LineTopLeft from '../../../assets/images/line-top-left.svg'
import LineTopRight from '../../../assets/images/line-top-right.svg'
import LineDownLeft from '../../../assets/images/line-down-left.svg'
import LineDownRight from '../../../assets/images/line-down-right.svg'
import Rewards from '../../../assets/images/missionsandrewards.png'
import { Icon } from '@iconify/react';

function Mid() {

    const TextGradient = "text-[transparent] bg-[linear-gradient(90deg,#F5F5F4_12.77%,#8F8F8E_86.51%)] bg-clip-text"
    
    return (

        <>
            <section className='flex flex-col items-center mt-72'>
                <h1
                    className={`text-2xl leading-[1.2] text-center ${TextGradient}`}>Planejamento inteligente
                </h1>

                <p
                    className={`text-base text-center ${TextGradient} relative top-3 text-center`}>Inteligência artificial? Aqui é pra organizar sua vida!
                </p>

                <div className='flex flex-col'>

                    <div className='flex m-auto relative items-center'>
                        <div className='flex relative top-[40px] right-3'>
                            <AiCards icon={DatesIcon} text={"Acompanhamento de Dados"} />
                            <img className='relative top-16 ' src={LineTopLeft} alt="" />
                        </div>
                        <div className='flex justify-center relative left-[100px] top-[40px]'>
                            <img className='w-[300px]' src={LineTopRight} alt="" />
                            <AiCardsReverse icon={DatesIcon} text={"Planejamento personalizável"} />
                        </div>
                    </div>

                    <div className='flex justify-center items-center'>
                        <img src={AiIcon} alt="" />
                        <p className='absolute text-[#8D8D8D] text-2xl'>IA</p>
                    </div>

                    <div className='flex m-auto relative items-center'>
                        <div className='flex relative bottom-[45px] right-[0px]'>
                            <AiCards icon={DatesIcon} text={"Dicas em Tempo Real"} />
                            <img className='w-[300px]' src={LineDownLeft} alt="" />
                        </div>
                        <div className='flex justify-center relative left-[120px] bottom-[60px] items-end'>
                            <img src={LineDownRight} alt="" />
                            <AiCardsReverse icon={DatesIcon} text={"Planejamento personalizável"} />
                        </div>
                    </div>

                </div>
            </section>

            <section className='flex flex-col items-center mt-52'>
                <h1 className={`${TextGradient} text-2xl xl:leading-[1.2] text-center`}>Domine o jogo, domine o dinheiro!</h1>
                <p className={`${TextGradient} text-base`}>Economize de verdade com cada missão completa</p>

                <div className='w-11/12 flex justify-evenly items-center m-auto bg-[#D9D9D9] rounded-md relative mt-[100px]'>
                    <img className='w-[58%]' src={Rewards} alt="" />
                    <div className='bg-[#01438A] w-[38%] rounded-md h-[29vw] flex items-center'>
                        <p className={`${TextGradient} text-xl ml-10`}>Missões e Recompensas</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Mid
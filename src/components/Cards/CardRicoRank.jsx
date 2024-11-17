import React from "react";
import primeiro from '../../../images/coroaclaro.png'
import segundo from '../../../images/prata.png'
import terceiro from '../../../images/bronzeclaro.png'
import Darkprimeiro from '../../../images/coroa.png'
import Darksegundo from '../../../images/prata.png'
import Darkterceiro from '../../../images/bronze.png'

document.body.classList.value === "dark"


const Colocacao = (props) =>{
    const textp = 'text-primeiro';
    const texts = 'text-segundo';
    const textt = 'text-terceiro';

    
    document.body.classList.contains("dark")

    return(
        <>
        <div className="flex items-end md:gap-6 lg:pt-0">
            <div className="flex items-center flex-col md:gap-2 pt-10 md:-mt-20 -mt-4 ">
                <div className="relative left-9 top-6 md:w-14 md:h-2 h-6 -mt-4">
                    <span className="lg:mr-2 flex items-center justify-center md:w-9 md:h-9 rounded-full bg-black text-white font-medium w-6 h-6 -mt-12 mr-3 md:m-4" > 
                        {props.posicao}°
                    </span>
                </div>
                {props.posicao===1
                    ?<img src={document.body.classList.value === "dark"?Darkprimeiro :primeiro} alt="" className="lg:w-[10vw] md:w-[12vw] w-[18vw] mr-6 lg:mt-5 -mt-10 md:m-4 " ></img>
                    :props.posicao===2
                    ?<img src={document.body.classList.value === "dark"?Darksegundo :segundo} alt="" className="lg:w-[8vw] md:w-[10vw] w-[13vw] mr-6 -mt-10 md:m-4 " ></img>
                    :<img src={document.body.classList.value === "dark"?Darkterceiro :terceiro} alt="" className="lg:w-[8vw] md:w-[10vw]  w-[13vw] mr-6 -mt-10 md:m-4 " ></img>}

                {props.posicao===1
                    ?<><p className={`${textp}lg:text-base font-medium text-primary-200 dark:text-[#FF9F07]  mr-5`}>{props.nome}</p>
                       <p className={`${textp}underline lg:text-base font-normal text-primary-200 dark:text-[#FF9F07]  md:mr-auto lg:mr-0 mr-5 md:text-[24px] text-[16px] text-nowrap`}>{props.xp} XP</p></>

                    :props.posicao===2
                    ?<><p className={`${texts}lg:text-base font-medium text-primary-200 dark:text-white mr-5 `}>{props.nome}</p>
                       <p className={`${texts}underline lg:text-base font-normal text-primary-200 dark:text-white md:mr-auto  lg:mr-0 mr-5 md:text-[24px] text-[16px] text-nowrap`}>{props.xp} XP</p></>

                    :<><p className={`${textt} lg:text-base font-medium text-primary-200 dark:text-[#C86B00]  mr-5 md:text-[24px] text-[16px] text-nowrap`}>{props.nome}</p>
                       <p className={`${textt} lg:text-baseunderline  font-normal text-primary-200 dark:text-[#C86B00]   md:mr-auto  lg:mr-0 mr-5 md:text-[24px] text-[14px] text-nowrap ` }>{props.xp} XP</p></>
                }  
            </div>
        </div>
      </>
    )
}

export default Colocacao;
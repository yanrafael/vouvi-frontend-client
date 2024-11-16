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
        <div className="flex items-end md:gap-6">
            <div className="flex items-center flex-col md:gap-6">
                <div className="relative left-9 top-6 md:w-14 md:h-2">
                    <span className="mr-2 flex items-center justify-center w-9 h-9 rounded-full bg-black text-white font-medium"> 
                        {props.posicao}°
                    </span>
                </div>
                {props.posicao===1
                    ?<img src={document.body.classList.value === "dark"?Darkprimeiro :primeiro} alt="" className="w-[11vw] " ></img>
                    :props.posicao===2
                    ?<img src={document.body.classList.value === "dark"?Darksegundo :segundo} alt="" className="w-[9vw] " ></img>
                    :<img src={document.body.classList.value === "dark"?Darkterceiro :terceiro} alt="" className="w-[9vw] " ></img>}

                {props.posicao===1
                    ?<><p className={`${textp} lg:text-base font-medium text-primary-200 dark:text-[#FF9F07] md:text-[30px]`}>{props.nome}</p>
                       <p className={`${textp} lg:underline text-base font-normal text-primary-200 dark:text-[#FF9F07] md:text-[22px]`}>{props.xp} XP</p></>

                    :props.posicao===2
                    ?<><p className={`${texts} lg:text-base font-medium text-primary-200 dark:text-white md:text-[28px]`}>{props.nome}</p>
                       <p className={`${texts} lg:underline text-base font-normal text-primary-200 dark:text-white md:text-[22px] `}>{props.xp} XP</p></>

                    :<><p className={`${textt} lg:text-base font-medium text-primary-200 dark:text-[#C86B00] md:text-[28px]`}>{props.nome}</p>
                       <p className={`${textt} lg:underline text-base font-normal text-primary-200 dark:text-[#C86B00] md:text-[20px]`}>{props.xp} XP</p></>
                }   
            </div>
        </div>
      </>
    )
}

export default Colocacao;
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
                <div className="relative left-12 top-9 md:w-14">
                    <span className="mr-2 flex items-center justify-center w-12 h-12 rounded-full bg-black text-white font-medium "> 
                        {props.posicao}°
                    </span>
                </div>
                {props.posicao===1
                    ?<img src={document.body.classList.value === "dark"?Darkprimeiro :primeiro} alt="" className="w-50" ></img>
                    :props.posicao===2
                    ?<img src={document.body.classList.value === "dark"?Darksegundo :segundo} alt="" className="w-50" ></img>
                    :<img src={document.body.classList.value === "dark"?Darkterceiro :terceiro} alt="" className="w-50" ></img>}

                {props.posicao===1
                    ?<><p className={`${textp} text-base font-medium text-primary-200 dark:text-[#FF9F07]`}>{props.nome}</p>
                       <p className={`${textp} underline text-base font-normal text-primary-200 dark:text-[#FF9F07]`}>{props.xp}ㅤ XP</p></>

                    :props.posicao===2
                    ?<><p className={`${texts} text-base font-medium text-primary-200 dark:text-white`}>{props.nome}</p>
                       <p className={`${texts} underline text-base font-normal text-primary-200 dark:text-white`}>{props.xp}ㅤ XP</p></>

                    :<><p className={`${textt} text-base font-medium text-primary-200 dark:text-[#C86B00]`}>{props.nome}</p>
                       <p className={`${textt} underline text-base font-normal text-primary-200 dark:text-[#C86B00]`}>{props.xp}ㅤ XP</p></>
                }   
            </div>
        </div>
      </>
    )
}

export default Colocacao;
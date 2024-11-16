import React from "react";
import primeiro from '../../../images/coroaclaro.png'
import segundo from '../../../images/prata.png'
import terceiro from '../../../images/bronzeclaro.png'
import Darkprimeiro from '../../../images/coroa.png'
import Darksegundo from '../../../images/prata.png'
import Darkterceiro from '../../../images/bronze.png'


const CardLateral = (props) =>{
    const textp = 'text-[#FF9F07]';
    const texts = 'text-[#767676]';
    const textt = 'text-[#FF9F07]';

    return(
        <>
            {props.nome === 'Usuario'
                ?<div className="flex justify-between text-segundo bg-[#002952] text-secondary-200 p-1 rounded-md mr-2 w-full items-center">
                    <div className="flex items-center">
                        <span className="mr-2 flex items-center justify-center lg:w-14 lg:h-14 bg-secondary-200 rounded-full text-md text-[#002952] text-cardVoce md:w-10 md:h-10">{props.posicao}°</span>
                        <div className=" lg:text-md font-medium md:text-[19px] md:w-18">Você</div>
                    </div>
                    <div className="lg:underline text-secondary-200 font-light mr-2 mt-3 md:w-18 md:h-8 md:text-[16px] lg:text-md">{props.vc} VC</div>
                </div>
                :props.posicao<4
                ?<div className="flex justify-between text-segundo bg-white dark:bg-[#3D3D3D] p-1 mb-2 rounded-md mr-2 w-full items-center ">
                    <div className="flex items-center ">
                        {
                            props.posicao===1?<img src={document.body.classList.value === "dark"?Darkprimeiro :primeiro} alt="" className="mr-2 flex items-center justify-center lg:w-14 lg:h-14 rounded-full bg-black text-teste md:w-12 md:h-12"/>:
                            props.posicao===2?<img src={document.body.classList.value === "dark"?Darksegundo :segundo} alt="" className="mr-2 flex items-center justify-center lg:w-14 lg:h-14 rounded-full bg-black text-teste md:text-[19px] md:w-12 md:h-12"/>:
                            <img src={document.body.classList.value === "dark"?Darkterceiro :terceiro} alt="" className="mr-2 flex items-center justify-center lg:w-14 lg:h-14 rounded-full bg-black text-teste  md:w-12 md:h-12"/>
                        }
                        
                        {
                            props.posicao===1?<div className={`${textp} lg:text-md font-medium md:text-[19px]`}>{props.nome}</div>:
                            props.posicao===2?<div className={`${texts} md:text-[19px] lg:font-medium text-md`}>{props.nome}</div>:
                            <div className={`${textt} md:text-[19px] lg:font-medium`}>{props.nome}</div>
                        }
                    </div>
                    {
                        props.posicao===1?<div className={`${textp}underline lg:text-md font-medium mr-2 md:text-[15px]`}>{props.vc}VC</div>:
                        props.posicao===2?<div className={`${texts} underline lg:text-md font-light mr-2 md:text-[15px]`}>{props.vc}VC</div>:
                        <div className={`${textt}underline lg:text-md font-light mr-2 md:text-[15px] `}>{props.vc}VC</div>
                    }

                </div>
                :<div className="lg:flex justify-between text-segundo bg-white dark:bg-[#3D3D3D] p-1 mb-2 rounded-lg mr-2 w-full items-center md:w-18 md:text[20px] ">
                    <div className="flex text-textolado text-primary-200 dark:text-[#5C5C5C] ">
                        <div className="ml-4 text-md mr-3 ">{props.posicao}°</div>
                        <div className="text-md font-medium ">{props.nome}</div>
                    </div>
                </div>
            }
        </>
    )
}

export default CardLateral;
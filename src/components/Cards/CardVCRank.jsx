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
                ?<div className="flex justify-between text-segundo bg-[#002952] text-secondary-200 p-1 rounded-md mr-2 items-center md:w-[270px] w-72 ml-4 lg:w-[350px] m-3 md:mr-0 md:ml-2 md:m-0">
                    <div className="flex items-center ">
                        <span className="lg:mr-2 flex items-center justify-center lg:w-14 lg:h-14 bg-secondary-200 rounded-full text-md text-[#002952] text-cardVoce md:w-10 md:h-10 h- w-9 ml-2">{props.posicao}°</span>
                        <div className=" lg:text-md font-medium md:text-[19px] md:w-1 text-[20px] ml-2">Você</div>
                    </div>
                    <div className="lg:text-md underline text-secondary-200 font-light mr-2 mt-3 md:w-18 md:h-8 md:text-[18px] text-[19px]  ">{props.vc} VC</div>
                </div>
                :props.posicao<4
                ?<div className=" flex justify-between text-segundo bg-white dark:bg-[#3D3D3D] p-1 mb-2 rounded-md mr-2m  items-center md:w-[270px] md:h-[65px] h-14 w-[300px] ml-2 lg:w-[350px]" >
                    <div className="flex items-center">
                        {
                            props.posicao===1?<img src={document.body.classList.value === "dark"?Darkprimeiro :primeiro} alt="" className="mr-2 flex items-center justify-center lg:w-14 lg:h-14 rounded-full bg-black text-teste md:w-12  md:h-12 w-8 h-8"/>:
                            props.posicao===2?<img src={document.body.classList.value === "dark"?Darksegundo :segundo} alt="" className="mr-2 flex items-center justify-center lg:w-12 lg:h-12 rounded-full bg-black text-teste md:text-[19px] md:w-12 md:h-12 w-8 h-8 "/>:
                            <img src={document.body.classList.value === "dark"?Darkterceiro :terceiro} alt="" className="mr-2 flex items-center justify-center lg:w-14 lg:h-14 rounded-full bg-black text-teste  md:w-12 md:h-12  w-8 h-8"/>
                        }
                        
                        {
                            props.posicao===1?<div className={`${textp} lg:text-md font-medium md:text-[23px] text-[20px]`}>{props.nome}</div>:
                            props.posicao===2?<div className={`${texts} md:text-[23px] lg:font-medium text-[20px]`}>{props.nome}</div>:
                            <div className={`${textt} md:text-[23px] lg:font-medium text-[20px]`}>{props.nome}</div>
                        }
                    </div>
                    {
                        props.posicao===1?<div className={`${textp}underline lg:text-md font-medium mr-2 md:text-[22px] text-[16px]`}>{props.vc}VC</div>:
                        props.posicao===2?<div className={`${texts} underline lg:text-md font-light mr-2 md:text-[22px] text-[16px]`}>{props.vc}VC</div>:
                        <div className={`${textt}underline lg:text-md font-light mr-2 md:text-[22px] text-[16px] `}>{props.vc}VC</div>
                    }

                </div>
                :<div className="lg:flex justify-between text-segundo bg-white dark:bg-[#3D3D3D] p-1 mb-2 rounded-lg mr-2  items-center md:w-[270px] md:h-11 md:text-sm w-[300px] ml-2 md:mb-2 lg:w-[350px]">
                    <div className="flex text-textolado text-primary-200 dark:text-[#5C5C5C]">
                        <div className="ml-4 text-md mr-3  ">{props.posicao}°</div>
                        <div className="text-md font-medium  ">{props.nome}</div>
                    </div>
                </div>
            }
        </>
    )
}

export default CardLateral;
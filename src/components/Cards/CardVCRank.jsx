import React from "react";
import primeiro from '../../../images/coroaclaro.png'
import segundo from '../../../images/prata.png'
import terceiro from '../../../images/bronzeclaro.png'


const CardLateral = (props) =>{
    const textp = 'text-[#FF9F07]';
    const texts = 'text-[#767676]';
    const textt = 'text-[#FF9F07]';

    return(
        <>
            {props.nome === 'Usuario'
                ?<div className="flex justify-between text-segundo bg-[#002952] text-secondary-200 p-1 rounded-md mr-2 w-full items-center">
                    <div className="flex items-center">
                        <span className="mr-2 flex items-center justify-center w-14 h-14 bg-secondary-200 rounded-full text-base text-[#002952] text-cardVoce">{props.posicao}°</span>
                        <div className="text-base font-medium">Você</div>
                    </div>
                    <div className="underline text-secondary-200 text-md font-light mr-2">{props.vc} VC</div>
                </div>
                :props.posicao<4
                ?<div className="flex justify-between text-segundo bg-white p-1 mb-2 rounded-md mr-2 w-full items-center">
                    <div className="flex items-center">
                        {
                            props.posicao===1?<img src={primeiro} alt="" className="mr-2 flex items-center justify-center w-14 h-14 rounded-full bg-black text-teste"/>:
                            props.posicao===2?<img src={segundo} alt="" className="mr-2 flex items-center justify-center w-14 h-14 rounded-full bg-black text-teste"/>:
                            <img src={terceiro} alt="" className="mr-2 flex items-center justify-center w-14 h-14 rounded-full bg-black text-teste"/>
                        }
                        
                        {
                            props.posicao===1?<div className={`${textp}  text-base font-medium`}>{props.nome}</div>:
                            props.posicao===2?<div className={`${texts} text-base font-medium`}>{props.nome}</div>:
                            <div className={`${textt} text-base font-medium`}>{props.nome}</div>
                        }
                    </div>
                    {
                        props.posicao===1?<div className={`${textp} underline text-md font-medium mr-2`}>{props.vc}VC</div>:
                        props.posicao===2?<div className={`${texts} underline text-md font-light mr-2`}>{props.vc}VC</div>:
                        <div className={`${textt} underline text-md font-light mr-2`}>{props.vc}VC</div>
                    }

                </div>
                :<div className="flex justify-between text-segundo bg-white dark:bg-[#3D3D3D] p-1 mb-2 rounded-lg mr-2 w-full items-center">
                    <div className="flex text-textolado text-primary-200 dark:text-[#5C5C5C]">
                        <div className="ml-4 text-base mr-3">{props.posicao}°</div>
                        <div className="text-base font-medium">{props.nome}</div>
                    </div>
                </div>
            }
        </>
    )
}

export default CardLateral;
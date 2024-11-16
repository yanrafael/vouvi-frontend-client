import React from "react";

const Card = (props) =>{
    return(
      <div className="flex justify-between items-center text-md bg-card p-2 mb-2 rounded-[20px] mr-2 text-primary-200  bg-primary-200 dark:bg-[#3D3D3D] md:h-16"> 
        <div className="flex items-center">
        <span className="mr-2 flex items-center justify-center lg:w-14 lg:h-14 rounded-full text-base bg-[#DFDFDE] dark:bg-black dark:text-white md:w-9 md:h-9 md:mx-2 md:text-[20px]"  >{props.posicao}°</span>
          <div className="lg:text-base font-medium text-[#DFDFDE] dark:text-[#B1B1B1] md:text-[20px]">{props.nome}</div>
        </div>
        <div className="flex underline text-base pr-9 text-[#DFDFDE] dark:text-[#B1B1B1]">
          <div className="lg:font-normal md:text-[20px]">{props.xp}</div>
          <div className="lg:font-light  md:text-[20px]">ㅤXP</div>
        </div>
      </div>
    )
};

export default Card;
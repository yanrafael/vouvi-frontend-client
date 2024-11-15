import React from "react";

const Card = (props) =>{
    return(
      <div className="flex justify-between items-center text-md bg-card p-2 mb-2 rounded-[20px] mr-2 text-primary-200  bg-primary-200 dark:bg-[#3D3D3D] md:h-16"> 
        <div className="flex items-center">
        <span className="mr-2 flex items-center justify-center w-14 h-14 rounded-full text-base bg-[#DFDFDE] dark:bg-black dark:text-white md:w-18 md:h-12 md:mx-2 md:text-[20px]"  >{props.posicao}°</span>
          <div className="text-base font-medium text-[#DFDFDE] dark:text-[#B1B1B1] md:text-[24px]">{props.nome}</div>
        </div>
        <div className="flex underline text-base pr-9 text-[#DFDFDE] dark:text-[#B1B1B1]">
          <div className="font-normal md:text-[30px]">{props.xp}</div>
          <div className="font-light  md:text-[30px]">ㅤ XP</div>
        </div>
      </div>
    )
};

export default Card;
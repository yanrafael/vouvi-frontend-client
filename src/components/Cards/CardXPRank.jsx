import React from "react";

const Card = (props) =>{
    return(
      <div className="flex justify-between items-center text-md bg-card p-2 mb-2 rounded-[20px] mr-2 text-primary-200  bg-primary-200 dark:bg-[#3D3D3D]"> 
        <div className="flex items-center">
        <span className="mr-2 flex items-center justify-center w-14 h-14 rounded-full text-base bg-[#DFDFDE] dark:bg-black dark:text-white">{props.posicao}°</span>
          <div className="text-base font-medium text-[#DFDFDE] dark:text-[#B1B1B1]">{props.nome}</div>
        </div>
        <div className="flex underline text-base pr-9 text-[#DFDFDE] dark:text-[#B1B1B1]">
          <div className="font-normal">{props.xp}</div>
          <div className="font-light">ㅤ XP</div>
        </div>
      </div>
    )
};

export default Card;
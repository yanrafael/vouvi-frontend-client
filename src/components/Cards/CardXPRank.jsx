import React from "react";

const Card = (props) =>{
    return(
      <div className="flex justify-between items-center lg:text-md bg-card p-2  rounded-[20px]  text-primary-200  bg-primary-200 dark:bg-[#3D3D3D] md:h-14 w-full h-10  -mt-1 mb-2  lg:items-center"> 
        <div className="flex items-center ">
        <span className="mr-2 flex items-center justify-center lg:w-12 lg:h-12 rounded-full lg:text-[24px] bg-[#DFDFDE] dark:bg-black dark:text-white md:w-9 md:h-9 md:mx-2 md:text-[20px]  w-8 h-8 text-[20px]"  >{props.posicao}°</span>
          <div className="lg:text-base font-medium text-[#DFDFDE] dark:text-[#B1B1B1] md:text-[20px] text-[14px]">{props.nome}</div>
        </div>
        <div className="flex underline text-base pr-9 text-[#DFDFDE] dark:text-[#B1B1B1]">
          <div className="lg:font-normal lg:text-[30px] md:text-[20px] text-[16px]">{props.xp}</div>
          <div className="lg:font-light lg:text-[30px]  md:text-[20px] text-[16px] pl-[2px]">XP</div>
        </div>
      </div>
    )
};

export default Card;
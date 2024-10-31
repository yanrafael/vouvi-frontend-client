import React, { useState } from "react";

const cardRank = (props) => {

    return(
        <>
            <div className="bg-[#FA7ABC]">
                <div>
                    <p>{props.posicao}</p>
                    <p>{props.nome}</p>
                </div>
                <div>
                    <p>{props.pontuacao}</p>
                    <p>xp</p>
                </div>
            </div>  
        </> 
    )
} 

export default cardRank;
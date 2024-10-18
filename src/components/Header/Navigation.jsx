import { useState } from "react";

function Navigation({ icon, title, width }) {

    // Borda ao clickar
    const Outline = 'outline outline-[10px] outline-[rgba(0,127,255,0.15);]'

    const [UseOutline, NoOutline] = useState(false)

    const ToggleOutline = () => {
        NoOutline(!UseOutline);
    };

    // Preenchimento
    const Fill = ' w-[inherit] h-[54px] ml-0 mt-0'

    const [AnimationFill, NoAnimationFill] = useState(false)

    const ToggleAnimationFill = () => {
        NoAnimationFill(!AnimationFill)
    }

     // Controle de cor do texto ao clicar
     const UseTextColor = 'text-[#003F7F]';
     const [TextColor, NoTextColor] = useState(false);
 
     const ToggleTextColor = () => {
         NoTextColor(!TextColor);
     };

    // Função que chama todos os estados
    const StateManipulation = () => {
        ToggleOutline();
        ToggleAnimationFill();
        ToggleTextColor();
    };

    return (
        <li onClick={StateManipulation} className={`${width} cursor-pointer mx-5 h-[54px] flex  bg-[rgba(0,127,255,0.40);] rounded-[360px] ${UseOutline ? Outline : ''} `}>
            <div className={`absolute m-1 h-[46px] w-[46px] bg-secondary-200 rounded-[360px] -z-[1] ${Animation} ${AnimationFill ? Fill : ''}`}></div>
            {icon}
            <p className={`flex mx-2 text-[32px] font-medium duration-300 ease-in-out transition-all group-hover:text-[#003F7F] ${TextColor ? UseTextColor : 'text-secondary-200'}`}>{title}</p>
        </li>
    )
}
export default Navigation

function Animation() {
    const Animation = 'transition-all duration-300 ease-in-out group-hover:m-0 group-hover:w-[inherit] group-hover:h-[54px] '
}

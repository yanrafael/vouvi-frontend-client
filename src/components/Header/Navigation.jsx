import { useState } from "react";

function Navigation({ icon, title, width }) {
    
    // Borda ao clicar
    const Outline = 'outline outline-[10px] outline-[rgba(0,127,255,0.15)]';
    const [useOutline, setUseOutline] = useState(false);

    // Preenchimento ao clicar
    const Fill = 'w-[inherit] h-[54px] ml-0 mt-0';
    const [animationFill, setAnimationFill] = useState(false);

    // Controle de cor do texto ao clicar
    const UseTextColor = 'text-[#003F7F]';
    const [textColor, setTextColor] = useState(false);

    // Função que chama todos os estados ao clicar
    const StateManipulation = () => {
        setUseOutline(!useOutline); // Alterna a borda
        setAnimationFill(!animationFill); // Alterna o preenchimento
        setTextColor(!textColor); // Alterna a cor do texto
    };

    
    return (
        <li
            onClick={StateManipulation}
            className={`${width} cursor-pointer mx-5 h-[54px] flex bg-[rgba(0,127,255,0.40)] rounded-[360px] ${
                useOutline ? Outline : ''
            }`}
        >
            <div
                className={`absolute m-1 h-[46px] w-[46px] bg-secondary-200 rounded-[360px] -z-[1] transition-all duration-300 ease-in-out group-hover:m-0 group-hover:w-[inherit] group-hover:h-[54px] ${
                    animationFill ? Fill : ''
                }`}
            ></div>
            {icon}
            <p
                className={`flex mx-2 text-[32px] font-medium duration-300 ease-in-out transition-all group-hover:text-[#003F7F] ${
                    textColor ? UseTextColor : 'text-secondary-200'
                }`}
            >
                {title}
            </p>
        </li>
    );
}

export default Navigation;
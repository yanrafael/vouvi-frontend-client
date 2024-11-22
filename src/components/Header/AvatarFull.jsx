import Avatar from "../../assets/images/avatar-sm-icon.svg";
import Vicon from "../../assets/images/vcoins-icon.svg";

import { Link } from "react-router-dom";
function AvatarFull({ name, xp, vcoins }) {
  return (
    <Link to="/profile">
      <div className="flex cursor-pointer items-center rounded-[60px] p-[8px_16px_8px_20px] transition-colors duration-300 hover:bg-[#222222]/10 hover:dark:bg-[#222222]">
        <div className="mr-3 flex flex-col leading-[1.1]">
          <h1 className="text-right text-[32px] font-medium text-black dark:text-white">
            {name}
          </h1>
          {/* Parabens voce está fu**** apenas utilize props para as paginas necessarias */}
          <div className="flex items-center text-[24px] text-black dark:text-white">
            <div className="mr-3 flex">
              <p className="mr-1 font-bold text-secondary-200">XP</p>
              <p>{xp}</p>
            </div>
            <div className="flex items-center">
              <img className="mr-1" src={Vicon} alt="Ícone representando Vcoins, a moeda virtual exclusiva do nosso projeto." />
              <p>{vcoins}</p>
            </div>
          </div>
        </div>
        <img src={Avatar} alt="Imagem de avatar representando o perfil do usuário." />
      </div>
    </Link>
  );
}
export default AvatarFull;

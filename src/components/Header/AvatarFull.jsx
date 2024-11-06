import Avatar from "../../assets/images/avatar-sm-icon.svg";
import Vicon from "../../assets/images/vcoins-icon.svg";

function AvatarFull({ name, xp, vcoins }) {
  return (
    <div className="flex items-center">
      <div className="mr-3 flex flex-col leading-[1.1]">
        <h1 className="text-right text-[32px] font-medium text-white">
          {name}
        </h1>

        {/* Parabens voce está fu**** apenas utilize props para as paginas necessarias */}
        <div className="flex items-center text-[24px] text-white">
          <div className="mr-3 flex">
            <p className="mr-1 font-bold text-secondary-200">XP</p>
            <p>{xp}</p>
          </div>
          <div className="flex items-center">
            <img className="mr-1" src={Vicon} alt="" />
            <p>{vcoins}</p>
          </div>
        </div>
      </div>
      <img src={Avatar} alt="" />
    </div>
  );
}
export default AvatarFull;

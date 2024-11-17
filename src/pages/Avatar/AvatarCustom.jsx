// Import Components
import AvatarColors from "./AvatarColors";
import AvatarTrinkets from "../../components/Cards/AvatarTrinkets";
import { Link } from "react-router-dom";
import SecondaryButton from "../../components/Buttons/SecondaryButton";

// Import Assets
import EyesLightBlue from "../../assets/images/eyes-light-blue.svg";
import EyesGray from "../../assets/images/eyes-gray.svg";
import EyesBrown from "../../assets/images/eyes-brown.svg";
import EyesDarkGreen from "../../assets/images/eyes-dark-green.svg";
import NecklaceLemon from "../../assets/images/necklace-lemon-chiffon.svg";
import NecklaceNaples from "../../assets/images/necklace-naples-yellow.svg";
import NecklaceVerdigris from "../../assets/images/necklace-verdigris.svg";
import NecklaceYale from "../../assets/images/necklace-yale-blue.svg";
import Pendant8Star from "../../assets/images/pendant-8-star.svg";
import PendantHearth from "../../assets/images/pendant-hearth.svg";
import PendantIndigo from "../../assets/images/pendant-indigo-v.svg";
import PendantTiffany from "../../assets/images/pendant-tiffany-star.svg";
import BgBeach from "../../assets/images/background-beach.svg";
import BgForest from "../../assets/images/background-forest.svg";
import BgSpace from "../../assets/images/background-space.svg";
import BgRoom from "../../assets/images/background-room.svg";

import { Icon } from "@iconify/react";
import { useState } from "react";

function AvatarCustom() {
  // button color
  const [BtColor, BtNoColor] = useState(0);
  const BtBg = "bg-white dark:bg-[#1F1F1F] text-black dark:text-white";
  const TextColor = "text-black dark:text-white";
  const Hidden = "hidden";
  const SetColor = (index) => {
    BtNoColor(index);
  };

  const [eyesColor, setEyesColor] = useState(null); // Estado para armazenar a cor dos olhos

  // Função para atualizar o estado de eyesColor ao clicar
  const ChangeEyes = (eyes) => {
    setEyesColor(eyes); // Define EyesBrown como o valor do estado
  };

  const [pendantColor, setPendantColor] = useState(null);

  const ChangePendant = (pendant) => {
    setPendantColor(pendant);
  };

  const [necklaceColor, setNecklaceColor] = useState(null);

  const ChangeNecklace = (necklace) => {
    setNecklaceColor(necklace);
  };

  const [textureColor, setTextureColor] = useState();

  const ChangeTexture = (texture) => {
    setTextureColor(texture);
  };

  const [backgroundColor, setBackgroundColor] = useState();

  const ChangeBackground = (texture) => {
    setBackgroundColor(texture);
  };
  return (
    <div className="flex flex-col md:flex-row lg:w-full lg:justify-evenly 2xl:w-[90%] 2xl:gap-5 md:justify-center md:max-w-[90%] w-full h-full md:h-auto">
      <AvatarColors
        Eyes={eyesColor}
        Texture={textureColor}
        Necklace={necklaceColor}
        Pendant={pendantColor}
        Background={backgroundColor}
      />

      <div className="flex lg:w-[900px] flex-col lg:rounded-md bg-[#C9C9C8] lg:p-10 dark:bg-[#151515] md:w-[510px] md:rounded-tr-md md:rounded-br-md md:p-5">
        <h1 className="hidden md:flex w-full lg:pb-10 lg:text-lg font-medium dark:text-white md:text-md md:pb-5">
          Crie seu avatar!
        </h1>
        <div className="flex md:w-auto md:justify-start justify-center">
          <button
            className={`${BtColor === 0 ? BtBg : "bg-[#F5F5F466] text-[#02020B9C] dark:bg-black dark:text-[#8D8D8D]"} flex h-10 lg:h-14 items-center justify-evenly md:rounded-t-md rounded-t-[10px] lg:p-5 lg:text-md font-medium md:text-sm md:p-[2.40%] md:h-10 p-3`}
            onClick={() => SetColor(0)}
          >
            <Icon
              className={`${BtColor === 0 ? TextColor : ""} w-8 md:w-5 lg:w-10`}
              width="34"
              icon={"mingcute:eye-fill"}
            />{" "}
            <p className="hidden md:flex">Olhos</p>
          </button>
          <button
            className={`${BtColor === 1 ? BtBg : "bg-[#F5F5F466] text-[#02020B9C] dark:bg-black dark:text-[#8D8D8D]"} flex h-10 lg:h-14 items-center justify-evenly md:rounded-t-md rounded-t-[10px] lg:p-5 lg:text-md font-medium md:text-sm md:p-[2.40%] md:h-10 md:ml-0 ml-[4px] p-3`}
            onClick={() => SetColor(1)}
          >
            <Icon
              className={`${BtColor === 1 ? TextColor : ""} w-8 md:w-5 lg:w-10`}
              width="34"
              icon={"icon-park-outline:texture"}
            />{" "}
            <p className="hidden md:flex">Pelos</p>
          </button>
          <button
            className={`${BtColor === 2 ? BtBg : "bg-[#F5F5F466] text-[#02020B9C] dark:bg-black dark:text-[#8D8D8D]"} flex h-10 lg:h-14 items-center justify-evenly md:rounded-t-md rounded-t-[10px] lg:p-5 lg:text-md font-medium md:text-sm md:p-[2.40%] md:h-10 md:ml-0 ml-[4px] p-3`}
            onClick={() => SetColor(2)}
          >
            <Icon
              className={`${BtColor === 2 ? TextColor : ""} w-8 md:w-5 lg:w-10`}
              width="34"
              icon={"carbon:circle-dash"}
            />{" "}
            <p className="hidden md:flex">Coleiras</p>
          </button>
          <button
            className={`${BtColor === 3 ? BtBg : "bg-[#F5F5F466] text-[#02020B9C] dark:bg-black dark:text-[#8D8D8D]"} flex h-10 lg:h-14 items-center justify-evenly md:rounded-t-md rounded-t-[10px] lg:p-5 lg:text-md font-medium md:text-sm md:p-[2.40%] md:h-10 md:ml-0 ml-[4px] p-3`}
            onClick={() => SetColor(3)}
          >
            <Icon
              className={`${BtColor === 3 ? TextColor : ""} w-8 md:w-5 lg:w-10`}
              width="34"
              icon={"mdi:necklace"}
            />{" "}
            <p className="hidden md:flex">Pingentes</p>
          </button>
          <button
            className={`${BtColor === 4 ? BtBg : "bg-[#F5F5F466] text-[#02020B9C] dark:bg-black dark:text-[#8D8D8D]"} flex h-10 lg:h-14 items-center justify-evenly md:rounded-t-md rounded-t-[10px] lg:p-5 lg:text-md font-medium md:text-sm md:p-[2.35%] md:ml-0 ml-[4px] md:h-10 p-3`}
            onClick={() => SetColor(4)}
          >
            <Icon
              className={`${BtColor === 4 ? TextColor : ""} w-8 md:w-5 lg:w-10`}
              width="34"
              icon={"mynaui:square-solid"}
            />{" "}
            <p className="hidden md:flex">Fundos</p>
          </button>
        </div>
        <div
          className={`${BtColor !== 0 ? Hidden : "inline"} flex md:w-full lg:h-full rounded-[0px_0px_24px_24px] bg-white md:p-5 pt-3 pl-0.5 dark:bg-[#1F1F1F] md:h-[170px] md:mb-0 h-[225px] w-[295px] m-auto`}
        >
          <AvatarTrinkets
            onClick={() => ChangeEyes(EyesBrown)}
            color={"bg-[#B5B5B5] dark:bg-white"}
          >
            <img src={EyesBrown} alt="" />
          </AvatarTrinkets>
          <AvatarTrinkets
            onClick={() => ChangeEyes(EyesDarkGreen)}
            color={"bg-[#B5B5B5] dark:bg-white"}
          >
            <img src={EyesDarkGreen} alt="" />
          </AvatarTrinkets>
          <AvatarTrinkets
            onClick={() => ChangeEyes(EyesGray)}
            color={"bg-[#B5B5B5] dark:bg-white"}
          >
            <img src={EyesGray} alt="" />
          </AvatarTrinkets>
          <AvatarTrinkets
            onClick={() => ChangeEyes(EyesLightBlue)}
            color={"bg-[#B5B5B5] dark:bg-white"}
          >
            <img src={EyesLightBlue} alt="" />
          </AvatarTrinkets>
        </div>
        <div
          className={`${BtColor !== 1 ? Hidden : "inline"} flex md:h-full md:w-full rounded-[0px_0px_24px_24px] bg-white p-5 md:p-5 pt-3 pl-0.5 dark:bg-[#1F1F1F] h-[225px] w-[295px] m-auto`}
        >
          <AvatarTrinkets
            onClick={() => ChangeTexture("white")}
            color={"bg-white"}
          ></AvatarTrinkets>
          <AvatarTrinkets
            onClick={() => ChangeTexture("#D5BAA5")}
            color={"bg-[#D5BAA5]"}
          ></AvatarTrinkets>
          <AvatarTrinkets
            onClick={() => ChangeTexture("#090909")}
            color={"bg-[#090909]"}
          ></AvatarTrinkets>
          <AvatarTrinkets
            onClick={() => ChangeTexture("#C44A07")}
            color={"bg-[#C44A07]"}
          ></AvatarTrinkets>
        </div>
        <div
          className={`${BtColor !== 2 ? Hidden : "inline"} flex md:h-full md:w-full rounded-[0px_0px_24px_24px] bg-white p-5 md:p-5 pt-3 pl-0.5 dark:bg-[#1F1F1F] h-[225px] w-[295px] m-auto`}
        >
          <AvatarTrinkets
            onClick={() => ChangeNecklace(NecklaceYale)}
            color={"bg-[#B5B5B5] dark:bg-white"}
          >
            <img src={NecklaceYale} alt="" />
          </AvatarTrinkets>
          <AvatarTrinkets
            onClick={() => ChangeNecklace(NecklaceNaples)}
            color={"bg-[#B5B5B5] dark:bg-white"}
          >
            <img src={NecklaceNaples} alt="" />
          </AvatarTrinkets>
          <AvatarTrinkets
            onClick={() => ChangeNecklace(NecklaceLemon)}
            color={"bg-[#B5B5B5] dark:bg-white"}
          >
            <img src={NecklaceLemon} alt="" />
          </AvatarTrinkets>
          <AvatarTrinkets
            onClick={() => ChangeNecklace(NecklaceVerdigris)}
            color={"bg-[#B5B5B5] dark:bg-white"}
          >
            <img src={NecklaceVerdigris} alt="" />
          </AvatarTrinkets>
        </div>
        <div
          className={`${BtColor !== 3 ? Hidden : "inline"} flex md:h-full md:w-full rounded-[0px_0px_24px_24px] bg-white p-5 md:p-5 pt-3 pl-0.5 dark:bg-[#1F1F1F] h-[225px] w-[295px] m-auto`}
        >
          <AvatarTrinkets
            onClick={() => ChangePendant(Pendant8Star)}
            color={"bg-white"}
          >
            <img src={Pendant8Star} alt="" />
          </AvatarTrinkets>
          <AvatarTrinkets
            onClick={() => ChangePendant(PendantHearth)}
            color={"bg-white"}
          >
            <img src={PendantHearth} alt="" />
          </AvatarTrinkets>
          <AvatarTrinkets
            onClick={() => ChangePendant(PendantIndigo)}
            color={"bg-white"}
          >
            <img src={PendantIndigo} alt="" />
          </AvatarTrinkets>
          <AvatarTrinkets
            onClick={() => ChangePendant(PendantTiffany)}
            color={"bg-white"}
          >
            <img src={PendantTiffany} alt="" />
          </AvatarTrinkets>
        </div>
        <div
          className={`${BtColor !== 4 ? Hidden : "inline"} flex md:h-full md:w-full rounded-[0px_0px_24px_24px] bg-white p-5 md:p-5 pt-3 pl-0.5 dark:bg-[#1F1F1F] h-[225px] w-[295px] m-auto`}
        >
          <AvatarTrinkets onClick={() => ChangeBackground(BgBeach)}>
            <img className="h-full max-w-none" src={BgBeach} alt="" />
          </AvatarTrinkets>
          <AvatarTrinkets onClick={() => ChangeBackground(BgForest)}>
            <img className="h-full max-w-none" src={BgForest} alt="" />
          </AvatarTrinkets>
          <AvatarTrinkets onClick={() => ChangeBackground(BgSpace)}>
            <img className="h-full max-w-none" src={BgSpace} alt="" />
          </AvatarTrinkets>
          <AvatarTrinkets onClick={() => ChangeBackground(BgRoom)}>
            <img className="h-full max-w-none" src={BgRoom} alt="" />
          </AvatarTrinkets>
        </div>
        <div className="md:absolute relative flex flex-row justify-between m-auto w-[296px] py-7">
        <Link className="md:hidden flex w-full" to={"/profile"}>
          <SecondaryButton
            color={"w-12/12 hover:bg-opacity-100 hover:text-primary-200 bg-white"}
            text={"Pronto!"}
          />
        </Link>
        <Link className="md:hidden flex w-full" to={"/profile"}>
          <SecondaryButton
            color={"w-[160px] hover:bg-opacity-100 hover:text-primary-200 bg-white"}
            text={"Salvar Estilo"}
          />
        </Link>
      </div>
      </div>
    </div>
  );
}
export default AvatarCustom;
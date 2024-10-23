import AvatarColors from "./AvatarColors"
import AvatarTrinkets from "../../Cards/AvatarTrinkets"
import EyesLightBlue from '../../../assets/images/eyes-light-blue.svg'
import EyesGray from '../../../assets/images/eyes-gray.svg'
import EyesBrown from '../../../assets/images/eyes-brown.svg'
import EyesDarkGreen from '../../../assets/images/eyes-dark-green.svg'
import NecklaceLemon from '../../../assets/images/necklace-lemon-chiffon.svg'
import NecklaceNaples from '../../../assets/images/necklace-naples-yellow.svg'
import NecklaceVerdigris from '../../../assets/images/necklace-verdigris.svg'
import NecklaceYale from '../../../assets/images/necklace-yale-blue.svg'
import Pendant8Star from '../../../assets/images/pendant-8-star.svg'
import PendantHearth from '../../../assets/images/pendant-hearth.svg'
import PendantIndigo from '../../../assets/images/pendant-indigo-v.svg'
import PendantTiffany from '../../../assets/images/pendant-tiffany-star.svg'
import BgBeach from '../../../assets/images/background-beach.svg'
import BgForest from '../../../assets/images/background-forest.svg'
import BgSpace from '../../../assets/images/background-space.svg'
import BgRoom from '../../../assets/images/background-room.svg'
import { Icon } from '@iconify/react';
import { useState } from "react"
function AvatarCustom(){

     // button color
     const [BtColor, BtNoColor] = useState(0)
     const BtBg = 'bg-[#1F1F1F] text-white'
     const TextColor = 'text-white'
     const Hidden = 'hidden'
     const SetColor = (index) => {
         BtNoColor(index)
     }

    return(
        <div className=" flex justify-around w-full 2xl:w-10/12">
            
                <AvatarColors />

                <div className="bg-[#151515] flex flex-col p-10 rounded-md w-7/12">
                    <h1 className="text-lg text-white font-medium pb-10">Crie seu avatar!</h1>
                    <div className="flex">
                        <button className={`${BtColor === 0 ? BtBg : 'bg-black text-[#8D8D8D]'} p-5 rounded-t-md h-14 flex items-center justify-evenly text-md font-medium`} onClick={() => SetColor(0)}>
                            <Icon className={`${BtColor === 0 ? TextColor : 'text-[#8D8D8D]'} `} width='34' icon={'mingcute:eye-fill'} /> <p>Olhos</p>
                        </button>
                        <button className={`${BtColor === 1 ? BtBg : 'bg-black text-[#8D8D8D]'} p-5 rounded-t-md h-14 flex items-center justify-evenly text-md font-medium`} onClick={() => SetColor(1)}>
                            <Icon className={`${BtColor === 1 ? TextColor : 'text-[#8D8D8D]'} `} width='34' icon={'icon-park-outline:texture'} /> <p>Pelos</p>
                        </button>
                        <button className={`${BtColor === 2 ? BtBg : 'bg-black text-[#8D8D8D]'} p-5 rounded-t-md h-14 flex items-center justify-evenly text-md font-medium`} onClick={() => SetColor(2)}>
                            <Icon className={`${BtColor === 2 ? TextColor : 'text-[#8D8D8D]'} `} width='34' icon={'carbon:circle-dash'} /> <p>Coleiras</p>
                        </button>
                        <button className={`${BtColor === 3 ? BtBg : 'bg-black text-[#8D8D8D]'} p-5 rounded-t-md h-14 flex items-center justify-evenly text-md font-medium`} onClick={() => SetColor(3)}>
                            <Icon className={`${BtColor === 3 ? TextColor : 'text-[#8D8D8D]'} `} width='34' icon={'mdi:necklace'} /> <p>Pingentes</p>
                        </button>
                        <button className={`${BtColor === 4 ? BtBg : 'bg-black text-[#8D8D8D]'} p-5 rounded-t-md h-14 flex items-center justify-evenly text-md font-mediumfont-medium`} onClick={() => SetColor(4)}>
                            <Icon className={`${BtColor === 4 ? TextColor : 'text-[#8D8D8D]'} `} width='34' icon={'mynaui:square-solid'} /> <p>Fundos</p>
                        </button>
                    </div>
                    <div className={`${BtColor !== 0 ? Hidden : 'inline'} bg-[#1F1F1F] w-full h-full rounded-[0px_24px_24px_24px] p-5 flex `}>
                        <AvatarTrinkets color={'bg-white'}>
                            <img src={EyesBrown} alt="" />
                        </AvatarTrinkets>
                        <AvatarTrinkets color={'bg-white'}>
                            <img src={EyesDarkGreen} alt="" />
                        </AvatarTrinkets>
                        <AvatarTrinkets color={'bg-white'}>
                            <img src={EyesGray} alt="" />
                        </AvatarTrinkets>
                        <AvatarTrinkets color={'bg-white'}>
                            <img src={EyesLightBlue} alt="" />
                        </AvatarTrinkets>
                    </div>
                    <div className={`${BtColor !== 1 ? Hidden : 'inline'} bg-[#1F1F1F] w-full h-full rounded-[0px_24px_24px_24px] p-5 flex `}>
                        <AvatarTrinkets color={'bg-white'}></AvatarTrinkets>
                        <AvatarTrinkets color={'bg-[#D5BAA5]'}></AvatarTrinkets>
                        <AvatarTrinkets color={'bg-[#090909]'}></AvatarTrinkets>
                        <AvatarTrinkets color={'bg-[#C44A07]'}></AvatarTrinkets>
                    </div>
                    <div className={`${BtColor !== 2 ? Hidden : 'inline'} bg-[#1F1F1F] w-full h-full rounded-[0px_24px_24px_24px] p-5 flex `}>
                        <AvatarTrinkets color={'bg-white'}>
                            <img src={NecklaceYale} alt="" />
                        </AvatarTrinkets>
                        <AvatarTrinkets color={'bg-white'}>
                            <img src={NecklaceNaples} alt="" />
                        </AvatarTrinkets>
                        <AvatarTrinkets color={'bg-white'}>
                            <img src={NecklaceLemon} alt="" />
                        </AvatarTrinkets>
                        <AvatarTrinkets color={'bg-white'}>
                            <img src={NecklaceVerdigris} alt="" />
                        </AvatarTrinkets>
                    </div>
                    <div className={`${BtColor !== 3 ? Hidden : 'inline'} bg-[#1F1F1F] w-full h-full rounded-[0px_24px_24px_24px] p-5 flex `}>
                        <AvatarTrinkets color={'bg-white'}>
                            <img src={Pendant8Star} alt="" />
                        </AvatarTrinkets>
                        <AvatarTrinkets color={'bg-white'}>
                            <img src={PendantHearth} alt="" />
                        </AvatarTrinkets>
                        <AvatarTrinkets color={'bg-white'}>
                            <img src={PendantIndigo} alt="" />
                        </AvatarTrinkets>
                        <AvatarTrinkets color={'bg-white'}>
                            <img src={PendantTiffany} alt="" />
                        </AvatarTrinkets>
                    </div>
                    <div className={`${BtColor !== 4 ? Hidden : 'inline'} bg-[#1F1F1F] w-full h-full rounded-[0px_24px_24px_24px] p-5 flex `}>
                        <AvatarTrinkets color={'bg-white'}>
                            <img className="w-fit" src={BgBeach} alt="" />
                        </AvatarTrinkets>
                        <AvatarTrinkets color={'bg-white'}>
                            <img src={BgForest} alt="" />
                        </AvatarTrinkets>
                        <AvatarTrinkets color={'bg-white'}>
                            <img src={BgSpace} alt="" />
                        </AvatarTrinkets>
                        <AvatarTrinkets color={'bg-white'}>
                            <img src={BgRoom} alt="" />
                        </AvatarTrinkets>
                    </div>
                </div>
            </div>
    )
}
export default AvatarCustom
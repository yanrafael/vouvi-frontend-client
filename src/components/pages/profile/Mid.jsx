import Quest from "../../Cards/Quest"
import Rewards from "../../Cards/Rewards"
import VcoinIcon from '../../../assets/images/vcoin-reward-icon.svg'
import VouviLover from '../../../assets/images/vouvi-lover-md-icon.svg'
import Newbie from '../../../assets/images/newbie-Insigne.svg'
import Insigne from "../../Cards/Insigne"
import { Icon } from '@iconify/react';
function Mid() {
    return (
        <section className="w-11/12 m-auto mt-20 flex justify-between">
            <div>
                <div className="bg-[rgba(124,32,190,0.50);] dark:bg-[#1e1e1e] flex justify-center w-[200px] text-[40px] text-[#471650] dark:text-white rounded-t-md font-medium">Missões</div>
                <div className="bg-[rgba(124,32,190,0.50);] dark:bg-[#1e1e1e] rounded-[0px_24px_24px] p-7 flex flex-col">
                    <div className="flex left-20 mb-10">
                        <Quest quest={"Missão Diária"} amount={"(04/05)"} text={"Anote três pequenas economias"}>
                            <div className=" relative bg-white dark:bg-[#A4A4A499] right-5 z-[0] flex items-center rounded-[0px_0px_24px_0px]"><p className="px-10 text-[32px] text-[#EA0000] font-medium">8 horas restantes</p></div>
                        </Quest>
                        <Rewards pad={"py-2 px-3 flex-1"} xp={"150"} pad2={"mx-2 "} vicon={""} vcoin={""} pad3={"py-2 px-3 flex-1 "} gift={<Icon icon='solar:gift-bold' width={38} color="#81340A" />} tgift={"1 Gift"} />
                    </div>

                    <div className="flex left-20 mb-10">
                        <Quest quest={"Missão Semanal"} amount={""} text={"Complete todas as missões diárias 02/05"}></Quest>
                        <Rewards pad={"py-2 px-3 flex-1 "} xp={"150"} pad2={"py-2 px-3 flex-1 mx-2 "} vicon={VcoinIcon} vcoin={"25"} pad3={"py-2 px-3 flex-1 "} gift={<Icon icon='solar:gift-bold' width={38} color="#81340A" />} tgift={"1 Gift"} />
                    </div>

                    <div className="flex left-20 mb-10">
                        <Quest quest={"Missão Mensal"} amount={""} text={"Compartilhe seu objetivo financeiro com um amigo"}></Quest>
                        <Rewards pad={"py-2 px-3 flex-1 "} xp={"150"} pad2={"py-2 px-3 flex-1 mx-2 "} vicon={VcoinIcon} vcoin={"25"} pad3={"py-2 px-3 flex-1"} gift={<Icon icon='solar:gift-bold' width={38} color="#81340A" />} tgift={"1 Gift"} />
                    </div>
                </div>
            </div>
            <div className="ml-5">
                <div className="bg-[rgba(124,32,190,0.50);] dark:bg-[#1e1e1e] flex justify-center w-[240px] text-[40px] text-[#471650] dark:text-white rounded-t-md font-medium">Conquistas</div>
                <div className="bg-[rgba(124,32,190,0.50);] dark:bg-[#1e1e1e] rounded-[0px_24px_24px] p-7 flex flex-col h-[92%]">
                    <Insigne icon={VouviLover} title={"Vouvi lover"} text={"Seja Premium"}/>
                    <Insigne icon={Newbie} title={"Iniciante Financeiro"} text={"Faça sua primeira aula"}/>
                </div>
            </div>
        </section>
    )
}
export default Mid
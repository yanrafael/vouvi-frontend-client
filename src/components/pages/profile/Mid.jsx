import Quest from "../../Cards/Quest";
import Rewards from "../../Cards/Rewards";
import VcoinIcon from "../../../assets/images/vcoin-reward-icon.svg";
import VouviLover from "../../../assets/images/vouvi-lover-md-icon.svg";
import Newbie from "../../../assets/images/newbie-Insigne.svg";
import Insigne from "../../Cards/Insigne";
import { Icon } from "@iconify/react";
function Mid({ openModal }) {
  return (
    <section className="m-auto mt-20 flex w-11/12 justify-between">
      <div>
        <div className="flex w-[200px] justify-center rounded-t-md bg-[rgba(124,32,190,0.50);] text-[40px] font-medium text-[#471650] dark:bg-[#1e1e1e] dark:text-white">
          Missões
        </div>
        <div className="flex flex-col rounded-[0px_24px_24px] bg-[rgba(124,32,190,0.50);] p-7 dark:bg-[#1e1e1e]">
          <div className="left-20 mb-10 flex">
            <Quest
              quest={"Missão Diária"}
              amount={"(04/05)"}
              text={"Anote três pequenas economias"}
            >
              <div className="relative right-5 z-[0] flex items-center rounded-[0px_0px_24px_0px] bg-white dark:bg-[#A4A4A499]">
                <p className="px-10 text-[32px] font-medium text-[#EA0000]">
                  8 horas restantes
                </p>
              </div>
            </Quest>
            <Rewards
              pad={"py-2 px-3 flex-1"}
              xp={"150"}
              pad2={"mx-2 "}
              vicon={""}
              vcoin={""}
              pad3={"py-2 px-3 flex-1 "}
              gift={<Icon icon="solar:gift-bold" width={38} color="#81340A" />}
              tgift={"1 Gift"}
            />
          </div>

          <div className="left-20 mb-10 flex">
            <Quest
              quest={"Missão Semanal"}
              amount={""}
              text={"Complete todas as missões diárias 02/05"}
            ></Quest>
            <Rewards
              pad={"py-2 px-3 flex-1 "}
              xp={"150"}
              pad2={"py-2 px-3 flex-1 mx-2 "}
              vicon={VcoinIcon}
              vcoin={"25"}
              pad3={"py-2 px-3 flex-1 "}
              gift={<Icon icon="solar:gift-bold" width={38} color="#81340A" />}
              tgift={"1 Gift"}
            />
          </div>

          <div className="left-20 mb-10 flex">
            <Quest
              quest={"Missão Mensal"}
              amount={""}
              text={"Compartilhe seu objetivo financeiro com um amigo"}
            ></Quest>
            <Rewards
              pad={"py-2 px-3 flex-1 "}
              xp={"150"}
              pad2={"py-2 px-3 flex-1 mx-2 "}
              vicon={VcoinIcon}
              vcoin={"25"}
              pad3={"py-2 px-3 flex-1"}
              gift={<Icon icon="solar:gift-bold" width={38} color="#81340A" />}
              tgift={"1 Gift"}
            />
          </div>
        </div>
      </div>
      <div className="ml-5">
        <div className="flex w-[240px] justify-center rounded-t-md bg-[rgba(124,32,190,0.50);] text-[40px] font-medium text-[#471650] dark:bg-[#1e1e1e] dark:text-white">
          Conquistas
        </div>
        <div className="flex h-[92%] flex-col rounded-[0px_24px_24px] bg-[rgba(124,32,190,0.50);] p-7 dark:bg-[#1e1e1e]">
          <Insigne
            icon={VouviLover}
            title={"Vouvi lover"}
            text={"Seja Premium"}
          />
          <Insigne
            icon={Newbie}
            title={"Iniciante Financeiro"}
            text={"Faça sua primeira aula"}
          />
          <div
            onClick={openModal}
            className="mx-5 mt-auto flex cursor-pointer items-center justify-center text-[#471650] dark:text-white"
          >
            <p className="mx-2 text-[32px] font-medium">Ver todos</p>
            <Icon icon="prime:sort-down-fill" width="35px" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Mid;

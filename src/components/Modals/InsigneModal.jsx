import { Icon } from "@iconify/react";
import InsigneModalCard from "../Cards/InsigneModalCard";
import VouviLover from "../../assets/images/vouvi-lover-md-icon.svg";
import Newbie from "../../assets/images/newbie-Insigne.svg";
import Unknown from "../../assets/images/insigne-unknow.svg";
function InsineModal({ closeModal }) {
  return (
    <section className="fixed left-0 top-0 z-20 flex h-full w-full items-center justify-center overflow-y-hidden bg-white/50 backdrop-blur-[25px] dark:bg-black/50">
      <div className="flex h-[750px] w-8/12 flex-col rounded-md bg-white p-6 shadow-2xl shadow-black dark:bg-[#1B1B1B]">
        <div className="flex items-center justify-between">
          <h1 className="text-right text-[32px] font-medium dark:text-white">
            Conquistas
          </h1>

          <Icon
            onClick={closeModal}
            className="relative right-[1px] cursor-pointer text-black opacity-35 dark:text-white"
            icon="carbon:close-filled"
            width="3rem"
          />
        </div>
        <div className="flex gap-5 overflow-x-scroll">
          <div className="mt-8 flex flex-col gap-5">
            <InsigneModalCard
              img={VouviLover}
              title={"Vouvi Lover"}
              text={"Seja premium"}
              color={"bg-[#7C20BE33]"}
            />
            <InsigneModalCard
              img={Unknown}
              title={"Bloqueado"}
              text={"Seja premium"}
              color={"bg-[#8D8D8D33]"}
            />
          </div>
          <div className="mt-8 flex flex-col gap-5">
            <InsigneModalCard
              img={Newbie}
              title={"Iniciante Financeiro"}
              text={"Faça sua primeira aula"}
              color={"bg-[#14A90033]"}
            />
            <InsigneModalCard
              img={Unknown}
              title={"Bloqueado"}
              text={"Seja premium"}
              color={"bg-[#8D8D8D33]"}
            />
          </div>
          <div className="mt-8 flex flex-col gap-5">
            <InsigneModalCard
              img={Unknown}
              title={"Bloqueado"}
              text={"Faça sua primeira aula"}
              color={"bg-[#8D8D8D33]"}
            />
            <InsigneModalCard
              img={Unknown}
              title={"Bloqueado"}
              text={"Seja premium"}
              color={"bg-[#8D8D8D33]"}
            />
          </div>
          <div className="mt-8 flex flex-col gap-5">
            <InsigneModalCard
              img={Unknown}
              title={"Bloqueado"}
              text={"Faça sua primeira aula"}
              color={"bg-[#8D8D8D33]"}
            />
            <InsigneModalCard
              img={Unknown}
              title={"Bloqueado"}
              text={"Seja premium"}
              color={"bg-[#8D8D8D33]"}
            />
          </div>
          <div className="mt-8 flex flex-col gap-5">
            <InsigneModalCard
              img={Unknown}
              title={"Bloqueado"}
              text={"Faça sua primeira aula"}
              color={"bg-[#8D8D8D33]"}
            />
            <InsigneModalCard
              img={Unknown}
              title={"Bloqueado"}
              text={"Seja premium"}
              color={"bg-[#8D8D8D33]"}
            />
          </div>
          <div className="mt-8 flex flex-col gap-5">
            <InsigneModalCard
              img={Unknown}
              title={"Bloqueado"}
              text={"Faça sua primeira aula"}
              color={"bg-[#8D8D8D33]"}
            />
            <InsigneModalCard
              img={Unknown}
              title={"Bloqueado"}
              text={"Seja premium"}
              color={"bg-[#8D8D8D33]"}
            />
          </div>
          <div className="mt-8 flex flex-col gap-5">
            <InsigneModalCard
              img={Unknown}
              title={"Bloqueado"}
              text={"Faça sua primeira aula"}
              color={"bg-[#8D8D8D33]"}
            />
            <InsigneModalCard
              img={Unknown}
              title={"Bloqueado"}
              text={"Seja premium"}
              color={"bg-[#8D8D8D33]"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default InsineModal;

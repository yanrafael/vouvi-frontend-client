import { Icon } from "@iconify/react";
import InsigneModalCard from "../Cards/InsigneModalCard";
import VouviLover from '../../assets/images/vouvi-lover-md-icon.svg'
import Newbie from '../../assets/images/newbie-Insigne.svg'
import Unknown from '../../assets/images/insigne-unknow.svg'
function InsineModal({ closeModal }) {
  return (
    <section className="w-full fixed dark:bg-black/50 bg-white/50 backdrop-blur-[25px] z-20 left-0 top-0 h-full flex justify-center items-center overflow-y-hidden ">
      <div className=" h-[750px] flex flex-col w-8/12 bg-white dark:bg-[#1B1B1B] p-6 rounded-md  shadow-black shadow-2xl">
        <div className="flex justify-between items-center">
          <h1 className="dark:text-white text-[32px] font-medium  text-right">
            Conquistas
          </h1>

          <Icon
            onClick={closeModal}
            className=" text-black dark:text-white right-[1px] relative opacity-35 cursor-pointer"
            icon="carbon:close-filled"
            width="3rem"
          />
        </div>
        <div className=" flex gap-5 overflow-x-scroll">
            <div className="flex flex-col gap-5 mt-8">
            <InsigneModalCard img={VouviLover} title={'Vouvi Lover'} text={'Seja premium'} color={'bg-[#7C20BE33]'}/>
            <InsigneModalCard img={Unknown} title={'Bloqueado'} text={'Seja premium'} color={'bg-[#8D8D8D33]'}/>
            </div>
            <div className="flex flex-col gap-5 mt-8">
            <InsigneModalCard img={Newbie} title={'Iniciante Financeiro'} text={'Faça sua primeira aula'} color={'bg-[#14A90033]'}/>
            <InsigneModalCard img={Unknown} title={'Bloqueado'} text={'Seja premium'} color={'bg-[#8D8D8D33]'}/>
            </div>
            <div className="flex flex-col gap-5 mt-8">
            <InsigneModalCard img={Unknown} title={'Bloqueado'} text={'Faça sua primeira aula'} color={'bg-[#8D8D8D33]'}/>
            <InsigneModalCard img={Unknown} title={'Bloqueado'} text={'Seja premium'} color={'bg-[#8D8D8D33]'}/>
            </div>
            <div className="flex flex-col gap-5 mt-8">
            <InsigneModalCard img={Unknown} title={'Bloqueado'} text={'Faça sua primeira aula'} color={'bg-[#8D8D8D33]'}/>
            <InsigneModalCard img={Unknown} title={'Bloqueado'} text={'Seja premium'} color={'bg-[#8D8D8D33]'}/>
            </div>
            <div className="flex flex-col gap-5 mt-8">
            <InsigneModalCard img={Unknown} title={'Bloqueado'} text={'Faça sua primeira aula'} color={'bg-[#8D8D8D33]'}/>
            <InsigneModalCard img={Unknown} title={'Bloqueado'} text={'Seja premium'} color={'bg-[#8D8D8D33]'}/>
            </div>
            <div className="flex flex-col gap-5 mt-8">
            <InsigneModalCard img={Unknown} title={'Bloqueado'} text={'Faça sua primeira aula'} color={'bg-[#8D8D8D33]'}/>
            <InsigneModalCard img={Unknown} title={'Bloqueado'} text={'Seja premium'} color={'bg-[#8D8D8D33]'}/>
            </div>
            <div className="flex flex-col gap-5 mt-8">
            <InsigneModalCard img={Unknown} title={'Bloqueado'} text={'Faça sua primeira aula'} color={'bg-[#8D8D8D33]'}/>
            <InsigneModalCard img={Unknown} title={'Bloqueado'} text={'Seja premium'} color={'bg-[#8D8D8D33]'}/>
            </div>
        </div>
      </div>
    </section>
  );
}
export default InsineModal;

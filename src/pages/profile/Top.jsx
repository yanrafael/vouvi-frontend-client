// Import Assets
import Avatar from "../../assets/images/avatar.svg";
import Vicon from "../../../assets/images/vcoins-icon.svg";
import purpleBg from "../../assets/images/purple-bg.svg";
import VouviLover from "../../assets/images/vouvi-lover-md-icon.svg";

// Import Components
import ProfileTags from "../../components/Cards/ProfileTags";
import CoinCard from "../../components/Cards/CoinCard";

function Top() {
  const progressionbar = 19;

  return (
    <section className="m-auto mt-14 flex w-[90%] border-b-2 border-[#252525] pb-16 dark:border-[#F5F5F442]">
      <div className="flex flex-none">
        <div className="h-[351px] w-[351px] rounded-full bg-[#7C20BE80]">
          <img src={Avatar} alt="" />
        </div>
      </div>
      <div className="ml-16 flex w-6/12 flex-col justify-center gap-2 font-medium text-[#252525] dark:text-white">
        <h1 className="text-lg">Ana carolina</h1>
        <div className="bg-blue-500 w-[70%] rounded-md bg-[#014085] px-6">
          <div className="flex justify-between text-right text-[32px] font-semibold">
            <h2 className="text-white">Nivel</h2>
            <h2 className="text-secondary-200">Faltam 200XP</h2>
          </div>
          <div className="m-auto mb-2 flex h-[10px] w-[100%] rounded-md bg-[#F5F5F480]">
            <div
              style={{ width: `${progressionbar}%` }}
              className={`rounded-md bg-white`}
            ></div>
          </div>
        </div>
        <div className="flex w-4/6 flex-wrap font-medium">
          <ProfileTags text={"Sessão de investimentos"} />
          <ProfileTags text={"15 Amigos"} />
        </div>
      </div>
      <hr className="relative right-24 h-96 w-[2px] bg-[#252525] dark:bg-[#F5F5F442]" />
      <div className="flex flex-col justify-center">
        <div className="flex">
          <CoinCard
            color={
              "mr-10 bg-[linear-gradient(180deg,rgba(255,77,0,0.80)_0%,rgba(255,216,46,0.80)_100%);]"
            }
            icon={Vicon}
            title={"928"}
            text={"vcoins"}
          />
          <CoinCard
            background={{ backgroundImage: `url(${purpleBg})` }}
            color={"bg-cover bg-center"}
            icon={VouviLover}
            title={"02/20"}
            text={"emblemas"}
          />
        </div>
        <div className="mt-4 flex justify-center rounded-md bg-[#14A90033] px-4 py-2 text-[32px] font-bold text-[#14A900]">
          Sequência: 23 dias
        </div>
        <div className="mt-4 flex justify-center rounded-md bg-[#7C20BE33] px-4 py-2 text-[32px] font-bold text-primary-200">
          Especialista em economia
        </div>
      </div>
    </section>
  );
}
export default Top;

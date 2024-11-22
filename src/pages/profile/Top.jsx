// Import Assets
import Avatar from "../../assets/images/avatar.svg";
import Vicon from "../../assets/images/vcoins-icon.svg";
import purpleBg from "../../assets/images/purple-bg.svg";
import VouviLover from "../../assets/images/vouvi-lover-md-icon.svg";

// Import Components
import ProfileTags from "../../components/Cards/ProfileTags";
import CoinCard from "../../components/Cards/CoinCard";

function Top() {
  const progressionbar = 19;

  return (
    <section className="m-auto flex flex-col lg:flex-row w-[90%] items-center border-b-2 border-[#252525] pb-16 mt-16 lg:mt-10 xl:mt-14 dark:border-[#F5F5F442]">
      <div className="flex flex-none">
        <div className="rounded-full bg-[#7C20BE80] sm:h-[300px] sm:w-[300px] lg:h-[250px] lg:w-[250px] xl:h-[300px] xl:w-[300px] 2xl:h-[350px] 2xl:w-[350px]">
          <img src={Avatar} alt="Avatar Finn" title="Avatar Finn" />
        </div>
      </div>
      <div className="flex w-full lg:w-[90%] flex-col items-center lg:items-stretch justify-center gap-2 font-medium text-[#252525] lg:ml-10 xl:ml-12 2xl:ml-14 dark:text-white">
        <h1 className="sm:text-[40px] lg:text-[30px] xl:text-base 2xl:text-lg">
          Ana carolina
        </h1>
        <div className="bg-blue-500 w-full lg:w-[80%] mt-14 lg:mt-0 rounded-md bg-[#014085] px-6">
          <div className="flex justify-between text-right font-semibold sm:text-[30px] lg:text-[21px] xl:text-[26px] 2xl:text-[32px]">
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
        <div className="flex w-full lg:w-5/6 flex-wrap font-medium">
          <ProfileTags text={"Sessão de investimentos"} />
          <ProfileTags text={"15 Amigos"} />
        </div>
      </div>
      <hr className="relative lg:right-[4.5%] m-4 lg:m-0 w-full lg:w-[2px] bg-[#252525] h-[2px] lg:h-72 xl:h-96 dark:bg-[#F5F5F442]" />
      <div
        className="flex lg:flex-col items-end lg:items-stretch gap-3 lg:gap-0"
        title="ícone da vouvi, chamado Vcoins com uma estrela em cima  "
      >
        <div className="flex gap-3 lg:gap-0">
          <CoinCard
            color={
              "lg:mr-5 xl:mr-8 2xl:mr-10 bg-[linear-gradient(180deg,rgba(255,77,0,0.80)_0%,rgba(255,216,46,0.80)_100%);]"
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
        <div className="flex flex-col">
          <div className="mt-4 flex justify-center rounded-md bg-[#14A90033] px-4 py-2 font-bold text-[#14A900] md:text-[28px] lg:text-[21px] xl:text-[26px] 2xl:text-[32px]">
            Sequência: 23 dias
          </div>
          <div className="mt-4 flex justify-center rounded-md bg-[#7C20BE33] px-4 py-2 font-bold text-primary-200 md:text-[28px] lg:text-[21px] xl:text-[26px] 2xl:text-[32px]">
            Especialista em economia
          </div>
        </div>
      </div>
    </section>
  );
}
export default Top;

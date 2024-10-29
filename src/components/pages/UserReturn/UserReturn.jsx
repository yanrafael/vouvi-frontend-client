import { Icon } from "@iconify/react";

function UserReturn () {
    return(
        <section className="w-full fixed dark:bg-black/50 backdrop-blur-[25px] z-20 left-0 top-0 h-[fill-available] flex justify-center items-center overflow-y-hidden shadow-2xl ">
        <div className=" justify-center items-center h-[600px] flex flex-col w-8/12 bg-white dark:bg-[#1B1B1B] p-6 rounded-md  dark:shadow-black shadow-2xl">
        <p className="text-[40px] text-black dark:text-[#FFFFFF]">Você voltou, sentimos sua falta!</p> <p className="text-[20px]">O que deseja fazer?</p>
        <div className=" items-center justify-around h-[400px] flex w-11/12 p-8 rounded-md
        "> 
        <div className=" flex-col justify-center items-center flex h-[250px] w-4/12  bg-secondary-200/20 dark:bg-black p-4 rounded-md shadow-black text-black dark:text-white">
        <Icon className="text-primary-200" icon="solar:home-2-bold" width="150px"/>
        <p className="text-[20px]  font-bold">Voltar a última atividade </p>
        </div> 
        <div className="flex-col justify-center items-center flex h-[250px] w-4/12  bg-secondary-200/20 dark:bg-black p-4 rounded-md shadow-black text-black dark:text-white"> 
        <Icon className="text-secondary-200" icon="solar:graph-up-bold" width="150px"/>
        <p className="text-[20px] font-bold">Atualizar finanças</p>
        </div>
        </div>
         
        </div>
      </section>
    )
}
export default UserReturn 
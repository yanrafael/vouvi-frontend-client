import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
function Top() {
    return (
        <>
        <section className="flex w-11/12 m-auto gap-2 mt-10 justify-center">

            <div className=" py-4 px-4 w-2/12 bg-[#DDDDDD] dark:bg-black dark:text-white leading-[1.1] rounded-md flex flex-col justify-center whitespace-nowrap">
                <p className="text-[36px] font-light">Saldo</p>
                <h1 className="text-[36px] font-medium">R$ 129,00</h1>
            </div>

            <div className=" leading-[1.1] text-[32px] flex flex-col gap-2">
                <div className="bg-[#84CE7A99] dark:bg-[rgba(11,85,5,0.50);] flex items-center text-[#14A900] font-medium py-3 px-4 gap-1 rounded-md">
                    <Icon icon='icon-park-solid:up-one' width='25px' />
                    <h1 className="">R$1.509</h1>
                </div>
                <div className=" flex items-center bg-[#A9000066] text-[#E30000] font-medium py-3 px-4 gap-1 rounded-md">
                    <Icon icon='icon-park-solid:down-one' width='25px' />
                    <h1 className="">R$1.509</h1>
                </div>
            </div>

            <div className="bg-[#DDDDDD] dark:bg-[#1B1B1B] flex flex-col p-2 rounded-md w-5/12">
                <p className="dark:text-white text-base p-2 font-light">Missões</p>
                <div className="bg-white text-black overflow-hidden p-2 text-[32px] rounded-md whitespace-nowrap"><p>Anote três pequenas economias que você fez hoje</p></div>
            </div>

            <div className=" leading-[1.1] text-[32px] flex flex-col gap-2 whitespace-nowrap">
                <div className="bg-[#FFB51533] flex items-center text-[#FFB515] font-medium py-3 px-4 gap-1 rounded-md">
                    <Icon icon='solar:notes-bold' className="" width='25px' />
                    <h1 className="">Anotações livres</h1>
                </div>
                <div className=" flex items-center bg-[#FF48A733] text-[#FF48A7] font-medium py-3 px-4 gap-1 rounded-md">
                    <Icon icon='iconoir:wallet-solid' width='25px' />
                    <h1 className="">Orçamento</h1>
                </div>
            </div>

        </section>
        <section>
            <div>
                <p>Planejar</p>
            </div>

            <div>

            </div>
        </section>
        </>
    )
}
export default Top
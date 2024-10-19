import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import ProgressBar from "../../Forms/ProgressBar";

function CreateAccountStep1() {
    return (
        <>
            <ProgressBar value={0} />

            {/* Área onde o usuário insere informações */}
            <div className="flex flex-col gap-5 justify-around">
                <div className="flex flex-row justify-around">
                    <span className="flex flex-col w-[40%]">
                        <label className="text-base w-fit" htmlFor="">País:</label>
                        <input className="bg-black bg-opacity-15 p-1 w-full h-fit border-b-4 border-b-black focus:outline outline-secondary-200 text-base" type="text" name="country" id="country" value="Brasil" readOnly />
                    </span>
                    <span className="flex flex-col w-[40%]">
                        <label className="text-base w-fit" htmlFor="">CEP:</label>
                        <input className="bg-black bg-opacity-15 p-1 w-full h-fit border-b-4 border-b-secondary-200 focus:outline outline-secondary-200 text-base" type="text" name="cep" id="cep" placeholder="" required />
                    </span>
                </div>

                <div className="flex flex-row justify-around">
                    <span className="flex flex-col w-[40%]">
                        <label className="text-base w-fit" htmlFor="">Estado:</label>
                        <input className="bg-black bg-opacity-15 p-1 w-full h-fit border-b-4 border-b-secondary-200 focus:outline outline-secondary-200 text-base" type="text" name="state" id="state" placeholder="" required />
                    </span>
                    <span className="flex flex-col w-[40%]">
                        <label className="text-base w-fit" htmlFor="">Cidade:</label>
                        <input className="bg-black bg-opacity-15 p-1 w-full h-fit border-b-4 border-b-secondary-200 focus:outline outline-secondary-200 text-base" type="text" name="city" id="city" placeholder="" required />
                    </span>
                </div>
            </div>

            <p className="text-center text-[16px] my-3">
                O seu local de residência é só para a gente confirmar sua identidade quando você entrar em contato. Ninguém mais vai ver isso, tá? Aqui na Vouvi, sua privacidade é prioridade!
            </p>

            {/* Botão de enviar/próximo */}
            <input className="w-full bg-primary-200 hover:bg-secondary-200 text-white hover:text-secondary-300 transition-all hover:cursor-pointer py-4 rounded-md text-base font-bold" type="button" value="Próximo" />

            <div className="w-full my-5 flex flex-row justify-center items-center gap-5">
                <span className="bg-[#BBB] h-2 w-[40%] rounded-xl"></span>
                OU
                <span className="bg-[#BBB] h-2 w-[40%] rounded-xl"></span>
            </div>

            <div className="flex flex-row justify-center items-center gap-3">
                <span className="cursor-pointer border-4 p-1 bg-white border-secondary-200 rounded-full"><Icon icon={"flat-color-icons:google"} width={"60px"} /></span>
                <span className="cursor-pointer border-4 p-1 bg-white border-secondary-200 rounded-full"><Icon icon={"ic:baseline-facebook"} width={"60px"} /></span>
                <span className="cursor-pointer border-4 p-1 bg-white border-secondary-200 rounded-full"><Icon icon={"ic:baseline-apple"} width={"60px"} /></span>
            </div>
        </>
    );
}

export default CreateAccountStep1
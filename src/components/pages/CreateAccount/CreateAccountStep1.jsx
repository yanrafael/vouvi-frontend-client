import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import ProgressBar from "../../Forms/ProgressBar";

function CreateAccountStep1() {
    return (
        <>
            <h1 className="text-lg text-center font-bold">Criar uma conta</h1>

            <ProgressBar value={0} />

            <input className="bg-black bg-opacity-15 p-1 w-full border-b-4 border-b-secondary-200 focus:outline outline-secondary-200 text-base" type="" name="" id="" placeholder="" required />

            <input className="w-full bg-primary-200 hover:bg-secondary-200 text-white hover:text-secondary-300 transition-all hover:cursor-pointer py-4 rounded-md text-base font-bold" type="submit" value="Próximo" />

            <div className="w-full my-5 flex flex-row justify-center items-center gap-5">
                <span className="bg-[#BBB] h-2 w-[40%] rounded-xl"></span>
                OU
                <span className="bg-[#BBB] h-2 w-[40%] rounded-xl"></span>
            </div>

            <div className="flex flex-row justify-center items-center gap-3">
                <span className="border-4 p-1 bg-white border-secondary-200 rounded-full"><Icon icon={"flat-color-icons:google"} width={"60px"} /></span>
                <span className="border-4 p-1 bg-white border-secondary-200 rounded-full"><Icon icon={"ic:baseline-facebook"} width={"60px"} /></span>
                <span className="border-4 p-1 bg-white border-secondary-200 rounded-full"><Icon icon={"ic:baseline-apple"} width={"60px"} /></span>
            </div>
        </>
    );
}

export default CreateAccountStep1
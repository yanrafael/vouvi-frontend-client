import { useState } from "react";
import CreateAccountStep1 from "./CreateAccountStep1";

function CreateAccount() {
    const [step, setStep] = useState(1);

    return (
        <div className="flex justify-center items-center sm:h-[850px] md:h-[750px] m-5">
            <form className="flex flex-col gap-4 bg-white bg-opacity-90 w-[600px] h-full rounded-sm p-10" action="">
                <h1 onClick={() => setStep(s => s + 1)} className="text-lg text-center font-bold">Criar uma conta</h1>

                {
                    step == 1 ? <CreateAccountStep1 /> : <p>Olá</p>
                }
            </form>
        </div>
    );
}

export default CreateAccount
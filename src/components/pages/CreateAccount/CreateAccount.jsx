import { useState } from "react";
import CreateAccountStep1 from "./CreateAccountStep1";
import CreateAccountStep2 from "./CreateAccountStep2";

function CreateAccount() {
    const [step, setStep] = useState(2);

    const verifyStep = () => {
        switch (step) {
            case 1:
                return (<CreateAccountStep1 />);
            case 2:
                return (<CreateAccountStep2 />)
            default:
                break;
        }
    }

    return (
        <div className="flex justify-center items-center sm:h-[850px] md:h-[750px] m-5">
            <form className="flex flex-col justify-around gap-4 bg-white bg-opacity-90 w-[600px] h-full rounded-sm p-10" action="">
                <h1 onClick={() => setStep(s => s + 1)} className="text-lg text-center font-bold">Criar uma conta</h1>

                {verifyStep()}
            </form>
        </div>
    );
}

export default CreateAccount
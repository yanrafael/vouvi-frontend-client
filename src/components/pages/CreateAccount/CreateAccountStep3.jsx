import Input from "../../Forms/Input";
import Label from "../../Forms/Label";
import Submit from "../../Forms/Submit";
import PreviousButton from "../../Forms/PreviousButton";
import ProgressBar from "../../Forms/ProgressBar";

function CreateAccountStep3({ setStep, username, setUsername, name, setName, lastName, setLastName }) {
    return (
        <>
            <ProgressBar value={20} />

            {/* Área onde o usuário insere informações */}
            <div className="flex flex-col gap-5 justify-around">
                <span className="grid">
                    <Label htmlFor="username">Nome de usuário:</Label>
                    <Input name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} maxLength={30} />
                    <span className="flex justify-between mt-2">
                        <p>Disponibilidade</p>
                        <div className="bg-green-200 w-20 rounded-[4px]"></div>
                    </span>
                </span>

                <span className="grid">
                    <Label htmlFor="name">Nome</Label>
                    <Input maxLength={30} value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" isRequired={true} />
                </span>

                <span className="grid">
                    <Label htmlFor="last-name">Sobrenome:</Label>
                    <Input maxLength={30} value={lastName} onChange={(e) => setLastName(e.target.value)} name="last-name" id="last-name" isRequired={true} />
                </span>
            </div>

            <p className="text-center text-[16px] my-3">
                Seu nome de usuário ficará visível para todos
            </p>

            {/* Botão de enviar/próximo */}
            <div className="flex justify-around gap-4">
                <PreviousButton setStep={setStep} />
                <Submit setStep={setStep} text={"Próximo"} />
            </div>
        </>
    );
}

export default CreateAccountStep3
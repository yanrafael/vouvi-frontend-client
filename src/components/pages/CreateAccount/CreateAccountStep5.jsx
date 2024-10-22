import ProgressBar from "../../Forms/ProgressBar";
import SubmitButton from "../../Forms/SubmitButton";

function CreateAccountStep5() {
  return (
    <>
      <ProgressBar value={60} />

      {/* Área onde o usuário insere informações */}
      <div>
        <h2>Agora é só confirmar o seu e-mail</h2>
        <div className="flex justify-center items-center gap-4">
          <input
            className="w-20 h-20 text-base text-center border-none rounded-md font-bold cursor-pointer"
            type="text"
            maxLength={1}
            required
          />
          <input
            className="w-20 h-20 text-base text-center border-none rounded-md font-bold cursor-pointer"
            type="text"
            maxLength={1}
            required
          />
          <input
            className="w-20 h-20 text-base text-center border-none rounded-md font-bold cursor-pointer"
            type="text"
            maxLength={1}
            required
          />
          <input
            className="w-20 h-20 text-base text-center border-none rounded-md font-bold cursor-pointer"
            type="text"
            maxLength={1}
            required
          />
        </div>
      </div>

      {/* Botão de enviar/próximo */}
      <SubmitButton />
    </>
  );
}

export default CreateAccountStep5;

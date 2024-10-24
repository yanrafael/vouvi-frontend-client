import ProgressBar from "../../Forms/ProgressBar";
import SubmitButton from "../../Forms/SubmitButton";
import { Link } from "react-router-dom";

function CreateAccountStep5() {
  // const inputs = document.querySelectorAll(".inputs");
  // const container = document.getElementById('input-container');

  const changeToNext = (e) => {
    const nextInput = e.target.nextElementSibling;
    const previousInput = e.target.previousElementSibling;

    if (nextInput && e.target.value.trim() !== "") {
      nextInput.focus();
    }

    if (e.code == "Backspace" && previousInput) {
      previousInput.focus();
    }
  };

  return (
    <>
      <ProgressBar value={80} />

      <h2 className="text-lg text-center">
        Agora é só
        <br />
        confirmar o seu e-mail
      </h2>

      {/* Área onde o usuário insere informações */}
      <div>
        <div
          id="input-container"
          className="flex justify-center mt-16 mb-0 items-center gap-4"
        >
          <input
            className="w-28 h-32 text-lg text-center border-b-4 border-b-secondary-200 hover:border-b-primary-200 focus:border-b-primary-200 font-bold cursor-pointer transition-all outline-none"
            type="text"
            maxLength={1}
            required
            onKeyUp={changeToNext}
          />
          <input
            className="w-28 h-32 text-lg text-center border-b-4 border-b-secondary-200 hover:border-b-primary-200 focus:border-b-primary-200 font-bold cursor-pointer transition-all outline-none"
            type="text"
            maxLength={1}
            required
            onKeyUp={changeToNext}
          />
          <input
            className="w-28 h-32 text-lg text-center border-b-4 border-b-secondary-200 hover:border-b-primary-200 focus:border-b-primary-200 font-bold cursor-pointer transition-all outline-none"
            type="text"
            maxLength={1}
            required
            onKeyUp={changeToNext}
          />
          <input
            className="w-28 h-32 text-lg text-center border-b-4 border-b-secondary-200 hover:border-b-primary-200 focus:border-b-primary-200 font-bold cursor-pointer transition-all outline-none"
            type="text"
            maxLength={1}
            required
            onKeyUp={changeToNext}
          />
        </div>
      </div>
      <p className="text-center mt-0 p-0">
        Enviamos um código de 4 digitos no seu email
      </p>

      {/* Botão de enviar/próximo */}
      <Link to="/avatar">
        <SubmitButton text={"Confirmar"} onClick={() => {}} />
      </Link>
    </>
  );
}

export default CreateAccountStep5;

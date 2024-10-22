import PropTypes from "prop-types";
import Input from "../../Forms/Input";
import PasswordInput from "../../Forms/PasswordInput";
import Label from "../../Forms/Label";
import NextButton from "../../Forms/NextButton";
import PreviousButton from "../../Forms/PreviousButton";
import ProgressBar from "../../Forms/ProgressBar";
import { useState } from "react";

function CreateAccountStep4({
  setStep,
  email,
  setEmail,
  password,
  setPassword,
}) {
  const [confirmPassword, setConfirmPasword] = useState("");

  return (
    <>
      <ProgressBar value={60} />

      {/* Área onde o usuário insere informações */}
      <div className="flex flex-col gap-5 justify-around">
        <span className="grid">
          <Label htmlFor="email">E-mail:</Label>
          <Input
            type="email"
            maxLength={40}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="email"
            isRequired={true}
          />
        </span>

        <span className="grid">
          <Label>Senha:</Label>
          <PasswordInput
            id={"password"}
            name={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <span className="flex items-center justify-between mt-2">
            <div>Intensidade da senha</div>
            <div className="bg-green-200 w-14 h-5 rounded-[4px]" />
          </span>
        </span>

        <span className="grid">
          <PasswordInput
            id={"confirm-password"}
            name={"confirm-password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPasword(e.target.value)}
            placeholder={"Confirme sua senha"}
          />
          <span className="flex justify-center mt-1">
            <p className="text-opacity-50 text-xs">
              Seu e-mail é usado quando você esquece a senha. Está seguro!
            </p>
          </span>
        </span>
      </div>

      <p className="text-center text-[16px] my-3">
        <span className="text-xs">
          Ao criar uma conta, você concorda com os
        </span>
        <br />
        <a className="underline" href="#">
          Termos de serviço
        </a>{" "}
        e{" "}
        <a className="underline" href="#">
          Política de Privacidade
        </a>
      </p>

      {/* Botão de enviar/próximo */}
      <div className="flex justify-around gap-4">
        <PreviousButton setStep={setStep} />
        <NextButton setStep={setStep} text={"Criar conta"} />
      </div>
    </>
  );
}

CreateAccountStep4.propTypes = {
  setStep: PropTypes.func,
  email: PropTypes.string,
  setEmail: PropTypes.func,
  password: PropTypes.string,
  setPassword: PropTypes.func,
};

export default CreateAccountStep4;

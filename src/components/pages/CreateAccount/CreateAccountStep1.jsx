import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import ProgressBar from "../../Forms/ProgressBar";
import Label from "../../Forms/Label";
import Input from "../../Forms/Input";
import NextButton from "../../Forms/NextButton";

function CreateAccountStep1({
  setStep,
  cep,
  setCep,
  state,
  setState,
  city,
  setCity,
}) {
  return (
    <>
      <ProgressBar value={0} />

      {/* Área onde o usuário insere informações */}
      <div className="flex flex-col gap-5 justify-around">
        <div className="grid grid-cols-2 gap-4">
          <span className="grid">
            <Label htmlFor="country">País:</Label>
            <Input name="country" id="country" value={"Brasil"} isReadOnly />
          </span>

          <span className="grid">
            <Label htmlFor="cep">CEP:</Label>
            <Input
              name="cep"
              id="cep"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              isRequired
            />
          </span>

          <span className="grid">
            <Label htmlFor="state">Estado:</Label>
            <Input
              name="state"
              id="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
              isRequired
            />
          </span>

          <span className="grid">
            <Label htmlFor="city">Cidade:</Label>
            <Input
              name="city"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              isRequired
            />
          </span>
        </div>
      </div>

      <p className="text-center text-[16px] my-3">
        O seu local de residência é só para a gente confirmar sua identidade
        quando você entrar em contato. Ninguém mais vai ver isso, tá? Aqui na
        Vouvi, sua privacidade é prioridade!
      </p>

      {/* Botão de enviar/próximo */}
      <NextButton setStep={setStep} text={"Próximo"} />

      <div className="w-full my-5 flex flex-row justify-center items-center gap-5">
        <span className="bg-[#BBB] h-2 w-[40%] rounded-xl"></span>
        OU
        <span className="bg-[#BBB] h-2 w-[40%] rounded-xl"></span>
      </div>

      <div className="flex flex-row justify-center items-center gap-3">
        <span className="cursor-pointer border-4 p-1 bg-white border-secondary-200 rounded-full">
          <Icon icon={"flat-color-icons:google"} width={"60px"} />
        </span>
        <span className="cursor-pointer border-4 p-1 bg-white border-secondary-200 rounded-full">
          <Icon icon={"ic:baseline-facebook"} width={"60px"} />
        </span>
        <span className="cursor-pointer border-4 p-1 bg-white border-secondary-200 rounded-full">
          <Icon icon={"ic:baseline-apple"} width={"60px"} />
        </span>
      </div>
    </>
  );
}

CreateAccountStep1.propTypes = {
  setStep: PropTypes.func,
  cep: PropTypes.number,
  setCep: PropTypes.func,
  state: PropTypes.string,
  setState: PropTypes.func,
  city: PropTypes.string,
  setCity: PropTypes.func,
};

export default CreateAccountStep1;

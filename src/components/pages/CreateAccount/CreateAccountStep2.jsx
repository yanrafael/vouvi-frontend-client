import ProgressBar from "../../Forms/ProgressBar";
import Label from "../../Forms/Label";
import Input from "../../Forms/Input";
import PreviousButton from "../../Forms/PreviousButton";
import NextButton from "../../Forms/NextButton";

function CreateAccountStep2({
  setStep,
  day,
  setDay,
  month,
  setMonth,
  year,
  setYear,
  age,
  setAge,
  gender,
  setGender,
  pronoum,
  setPronoum,
}) {
  return (
    <>
      <ProgressBar value={20} />

      {/* Área onde o usuário insere informações */}
      <div className="flex flex-col gap-5 justify-around">
        <div className="grid grid-cols-3 gap-4">
          <span className="grid">
            <Label htmlFor="day-of-birth">Dia:</Label>
            <Input
              type="number"
              min={1}
              max={31}
              value={day}
              onChange={(e) => setDay(e.target.value)}
              name="day-of-birth"
              id="day-of-birth"
              isRequired
            />
          </span>

          <span className="grid">
            <Label htmlFor="month-of-birth">Mês:</Label>
            <Input
              type="number"
              min={1}
              max={12}
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              name="month-of-birth"
              id="month-of-birth"
              isRequired
            />
          </span>

          <span className="grid">
            <Label htmlFor="year-of-birth">Ano:</Label>
            <Input
              type="number"
              min={1900}
              max={new Date().getFullYear()}
              value={year}
              onChange={(e) => setYear(e.target.value)}
              name="year-of-birth"
              id="year-of-birth"
              isRequired
            />
          </span>
        </div>

        <span className="flex flex-col">
          <Label htmlFor="age">Sua Idade:</Label>
          <Input
            type="number"
            min={14}
            max={110}
            value={age}
            name="age"
            id="age"
            isRequired
            isReadOnly
          />
        </span>

        <div className="grid grid-cols-2 gap-4">
          <span className="grid">
            <Label htmlFor="gender">Gênero:</Label>
            <select
              className="bg-black bg-opacity-15 p-1 w-full h-fit border-b-4 border-b-secondary-200 hover:border-b-primary-200 focus:border-b-primary-200 focus:outline-none outline-primary-200 transition-all text-base"
              name="gender"
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="select" disabled>
                Selecione
              </option>
              <option value="m">Masculino</option>
              <option value="f">Feminino</option>
              <option value="nb">Não Binário</option>
              <option value="nd">Prefiro não responder</option>
              <option value="o">Outro</option>
            </select>
          </span>

          <span className="grid">
            <Label htmlFor="pronoum">Pronome</Label>
            <select
              className="bg-black bg-opacity-15 p-1 w-full h-fit border-b-4 border-b-secondary-200 hover:border-b-primary-200 focus:border-b-primary-200 focus:outline-none outline-primary-200 transition-all text-base"
              name="pronoum"
              id="pronoum"
              value={pronoum}
              onChange={(e) => setPronoum(e.target.value)}
            >
              <option value="select" disabled>
                Selecione
              </option>
              <option value="m">Ele/Dele</option>
              <option value="f">Ela/Dela</option>
              <option value="nb">Elu/Delu</option>
            </select>
          </span>
        </div>
      </div>

      <p className="text-center text-[16px] my-3">
        Os outros usuários não verão sua idade
      </p>

      {/* Botão de enviar/próximo */}
      <div className="flex justify-around gap-4">
        <PreviousButton setStep={setStep} />
        <NextButton setStep={setStep} text={"Próximo"} />
      </div>
    </>
  );
}

export default CreateAccountStep2;

import { useEffect, useState } from "react";
import CreateAccountStep1 from "./CreateAccountStep1";
import CreateAccountStep2 from "./CreateAccountStep2";
import CreateAccountStep3 from "./CreateAccountStep3";
import CreateAccountStep4 from "./CreateAccountStep4";
import CreateAccountStep5 from "./CreateAccountStep5";

import bgVideo from "/src/assets/videos/video-background-dark.mp4";

function CreateAccount() {
  const [step, setStep] = useState(1);

  // Step 1
  const [cep, setCep] = useState(0);
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  // Step 2
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(2000);
  const [age, setAge] = useState(1);
  const [gender, setGender] = useState("select");
  const [pronoum, setPronoum] = useState("select");

  // Step 3
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  // Step 4
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Calcula a idade
  useEffect(() => {
    const date = new Date();

    if (year < 1900 || year > date.getUTCFullYear()) {
      return;
    }

    if (month < 1 || month > 12) {
      return;
    }

    if (day < 1 || day > 31) {
      return;
    }

    setAge(date.getUTCFullYear() - year);
  }, [day, month, year]);

  const verifyStep = () => {
    switch (step) {
      case 1:
        return (
          <CreateAccountStep1
            setStep={setStep}
            cep={cep}
            setCep={setCep}
            state={state}
            setState={setState}
            city={city}
            setCity={setCity}
          />
        );
      case 2:
        return (
          <CreateAccountStep2
            setStep={setStep}
            day={day}
            setDay={setDay}
            month={month}
            setMonth={setMonth}
            year={year}
            setYear={setYear}
            age={age}
            setAge={setAge}
            gender={gender}
            setGender={setGender}
            pronoum={pronoum}
            setPronoum={setPronoum}
          />
        );
      case 3:
        return (
          <CreateAccountStep3
            setStep={setStep}
            username={username}
            setUsername={setUsername}
            name={name}
            setName={setName}
            lastName={lastName}
            setLastName={setLastName}
          />
        );
      case 4:
        return (
          <CreateAccountStep4
            setStep={setStep}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
        );
      case 5:
        return <CreateAccountStep5 />;
      default:
        break;
    }
  };

  useEffect(() => {
    document.getElementById("bg-video").play();
  });

  return (
    <div className="flex justify-center items-center sm:h-[850px] md:h-[750px] m-5">
      <video
        src={bgVideo}
        className="absolute -z-10 opacity-40 left-0 top-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        id="bg-video"
      ></video>
      <form
        className="flex flex-col justify-around gap-4 bg-white bg-opacity-90 w-[600px] h-full rounded-sm p-10"
        action=""
      >
        <h1 className="text-lg text-center font-bold">Criar uma conta</h1>

        {verifyStep()}
      </form>
    </div>
  );
}

export default CreateAccount;

import PasswordInput from "../../components/Forms/PasswordInput";
import KeepConected from "../../components/Forms/Radio";
import bgVideo from "../../assets/videos/video-background-dark.mp4";

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

function Form() {
  useEffect(() => {
    document.getElementById("bg-video").play();
  });

  return (
    <div className="m-5 flex items-center justify-center sm:h-[850px] md:h-[750px]">
      <video
        src={bgVideo}     
        className="fixed left-0 top-0 -z-10 h-full w-full object-cover opacity-40"
        autoPlay
        muted
        loop
        id="bg-video"
      ></video>
      <form
        className="flex h-full w-[600px] flex-col justify-around gap-4 rounded-sm bg-white bg-opacity-90 p-10"
        action=""
      >
        <h1 className="text-center text-lg font-bold">Bem vindo de volta</h1>

        <label className="text-base" htmlFor="email">
          E-mail:
        </label>
        <input
          className="w-full border-b-4 border-b-secondary-200 bg-black bg-opacity-15 p-1 text-base transition-all hover:border-b-primary-200 focus:outline-none"
          type="email"
          name="email"
          id="email"
          placeholder="exemplo@email.com"
          autoComplete="on"
          required
        />

        <PasswordInput />

        <KeepConected />

        <input
          className="w-full rounded-md bg-primary-200 py-4 text-base font-bold text-white transition-all hover:cursor-pointer hover:bg-secondary-200 hover:text-secondary-300"
          type="submit"
          value="Entrar"
        />

        <div className="flex justify-between">
          <Link className="login-link" to="/create-account" title="clique aqui para criar uma conta">
            criar conta
          </Link>{" "}
          <Link className="login-link" to="/forget-password" title="Clique aqui para alterar a senha">
            esqueci a senha
          </Link>
        </div>

        <div className="my-5 flex w-full flex-row items-center justify-center gap-5">
          <span className="h-2 w-[40%] rounded-xl bg-[#BBB]"></span>
          OU
          <span className="h-2 w-[40%] rounded-xl bg-[#BBB]"></span>
        </div>

        <div className="flex flex-row items-center justify-center gap-3">
          <span className="rounded-full border-4 border-secondary-200 bg-white p-1">
            <Icon icon={"flat-color-icons:google"} width={"60px"} />
          </span>
          <span className="rounded-full border-4 border-secondary-200 bg-white p-1">
            <Icon icon={"ic:baseline-facebook"} width={"60px"} />
          </span>
          <span className="rounded-full border-4 border-secondary-200 bg-white p-1">
            <Icon icon={"ic:baseline-apple"} width={"60px"} />
          </span>
        </div>
      </form>
    </div>
  );
}

export default Form;

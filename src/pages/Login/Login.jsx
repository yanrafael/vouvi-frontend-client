import PasswordInput from "../../components/Forms/PasswordInput";
import KeepConected from "../../components/Forms/Radio";
import bgVideo from "../../assets/videos/video_do_login.mp4";

import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

function Form() {
  useEffect(() => {
    document.getElementById("bg-video").play();
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Usando o useNavigate para redirecionar após login bem-sucedido

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Limpa qualquer erro anterior

    try {
      const response = await axios.post("http://localhost:3000/users/login", {
        email: email,
        password: password,
      });

      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data)); // Armazenando no localStorage como exemplo
        console.log("Usuário autenticado:", response.data);

        // Redireciona para a página de perfil após login bem-sucedido
        navigate("/profile");
      }
    } catch (err) {
      // Verifica se há uma resposta do servidor, caso contrário, trata o erro de conexão
      if (err.response) {
        setError("Login falhou: email ou senha inválidos.");
      } else {
        setError(
          "Erro ao conectar com o servidor. Tente novamente mais tarde.",
        );
      }
    }
  };

  return (
    <div className="align-center mt-5 flex h-full w-screen justify-center overflow-x-hidden sm:h-[850px] md:h-[750px]">
      <video
        src={bgVideo}
        className="pointer-events-none fixed left-0 top-0 -z-10 h-full w-full object-cover opacity-100"
        autoPlay
        muted
        loop
        id="bg-video"
      ></video>
      <form
        className="flex w-[350px] flex-col justify-around gap-4 rounded-sm bg-white bg-opacity-90 p-10 sm:w-[650px] lg:w-[650px]"
        action=""
        onSubmit={handleSubmit}
      >
        <h1 className="w-full text-center text-[30px] font-bold sm:text-lg">
          Bem vindo de volta
        </h1>

        <label className="w-full text-[24px] sm:text-base" htmlFor="email">
          E-mail:
        </label>
        <input
          className="w-full border-b-4 border-b-secondary-200 bg-black bg-opacity-15 p-1 text-base transition-all hover:border-b-primary-200 focus:outline-none sm:w-full"
          type="email"
          name="email"
          id="email"
          autoComplete="on"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="w-full text-[24px] sm:text-base">Senha:</label>
        <PasswordInput
          id={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red">{error}</p>}

        <KeepConected />
        <div className="flex w-full items-center justify-center">
          <input
            className="h-full w-[200px] rounded-md bg-primary-200 text-[20px] font-bold text-white transition-all hover:cursor-pointer hover:bg-secondary-200 hover:text-secondary-300 sm:h-[64px] sm:w-full sm:py-4 sm:text-base"
            type="submit"
            value="Entrar"
          />
        </div>

        <div className="flex w-full justify-between">
          <Link
            className="login-link text-[20px] sm:text-base lg:text-base"
            to="/create-account"
            title="clique aqui para criar uma conta"
          >
            criar conta
          </Link>{" "}
          <Link
            className="login-link text-[20px] sm:text-base"
            to="/forget-password"
            title="Clique aqui para alterar a senha"
          >
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

// Import Assets
import Avatar from "../../assets/images/avatar.svg";

// Import Components
import PrimaryButton from "../../Buttons/PrimaryButton";

function CreateAvatar({ onClick }) {
  return (
    <section className="flex w-[600px] flex-col items-center rounded-md bg-[#C9C9C8] py-10 dark:bg-[#151515]">
      <div className="mb-8 w-10/12 text-center">
        <h1 className="text-lg font-medium text-secondary-200">Sucesso!</h1>
        <div className="mt-4 rounded-md bg-secondary-200 py-2"></div>
      </div>

      <p className="mb-8 text-center text-[32px] font-light leading-[1.3] dark:text-white">
        Comece a <br /> criar seu avatar!
      </p>

      <div className="h-[301px] w-[301px] rounded-full bg-[#7C20BE80]">
        <img width={"400"} src={Avatar} alt="" />
      </div>

      <PrimaryButton
        onClick={onClick}
        color={"mt-[45px]"}
        text={"Criar agora"}
      />
    </section>
  );
}
export default CreateAvatar;

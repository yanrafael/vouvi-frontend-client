import Avatar from "../../assets/images/avatar-sm-icon.svg";

function AvatarBasic({ name }) {
  return (
    <div className="flex items-center">
      <div className="mr-3 flex flex-col leading-[1.1]">
        <h1 className="text-right text-[32px] font-medium text-white">
          {name}
        </h1>
      </div>
      <img src={Avatar} alt="Imagem de avatar representando o perfil do usuário." />
    </div>
  );
}
export default AvatarBasic;

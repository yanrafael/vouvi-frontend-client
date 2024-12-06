import Avatar from "../../assets/images/avatar-sm-icon.svg";

function AvatarBasic({ name, width }) {
  return (
    <div className={`flex items-center`}>
      <div className="hidden mr-3 lg:flex flex-col leading-[1.1]">
        <h1 className="text-right text-[32px] font-medium text-white">
          {name}
        </h1>
      </div>
      <img src={Avatar} className={`${width}`} alt="Imagem de avatar representando o perfil do usuário." />
    </div>
  );
}
export default AvatarBasic;

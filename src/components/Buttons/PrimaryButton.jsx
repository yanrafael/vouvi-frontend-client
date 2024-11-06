function PrimaryButton({ text, color, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${color} relative m-auto mt-8 flex h-[70px] items-center justify-center rounded-sm bg-primary-200 px-10 font-bold text-white transition-all duration-200 hover:bg-opacity-0 hover:text-primary-200 hover:outline hover:outline-[6px]`}
    >
      <p className="text-[36px]">{text}</p>
    </button>
  );
}
export default PrimaryButton;

function SecondaryButton({ text, color }) {
  return (
    <button
      className={`${color} flex h-[75px] items-center justify-center rounded-md px-10 text-[32px] font-bold transition-all duration-200 hover:bg-opacity-0 hover:outline hover:outline-[6px]`}
    >
      <p>{text}</p>
    </button>
  );
}
export default SecondaryButton;

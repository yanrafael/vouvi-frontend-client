function SecondaryButton({ text, color }) {
  return (
    <button
      className={`${color} flext h-10 xs:h-12 sm:h-14 lg:h-[75px] items-center justify-center rounded-md px-5 xs:px-7 sm:px-10 text-[20px] sm:text-md lg:text-[32px] font-bold transition-all duration-200 hover:bg-opacity-0 hover:outline hover:outline-[6px]`}
    >
      <p>{text}</p>
    </button>
  );
}
export default SecondaryButton;

function StoreCards({ children, color, color2, color3 }) {
  return (
    <div className={`${color2} mx-3 mb-5 flex w-[290px] flex-none flex-col items-center rounded-md dark:bg-black p-5`}>
      <div
        className={`${color} flex h-[230px] w-full items-center justify-center rounded-sm`}
      >
        {children}
      </div>
      <button
        className={`mt-6 w-full rounded-md ${color3} dark:bg-yellow p-1 text-[32px] font-medium text-white hover:text-black dark:text-[#351D09] transition-all duration-500 hover:bg-white`}
      >
        Comprar
      </button>
    </div>
  );
}
export default StoreCards;

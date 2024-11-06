function StoreCards({ children, color }) {
  return (
    <div className="mx-3 mb-5 flex w-[290px] flex-none flex-col items-center rounded-md bg-black p-5">
      <div
        className={`${color} flex h-[230px] w-full items-center justify-center rounded-sm`}
      >
        {children}
      </div>
      <button
        className={`mt-6 w-full rounded-md bg-yellow p-1 text-[32px] font-medium text-[#351D09] transition-all duration-500 hover:bg-white`}
      >
        Comprar
      </button>
    </div>
  );
}
export default StoreCards;

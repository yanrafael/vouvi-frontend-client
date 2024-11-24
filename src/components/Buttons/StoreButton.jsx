function StoreButton({ children, text, color }) {
  return (
    <div
      className={`${color} flex cursor-pointer items-center rounded-[16px] lg:rounded-md px-4 py-3 text-base font-medium`}
    >
      {children}
      <p className="mx-2 hidden lg:block">{text}</p>
    </div>
  );
}
export default StoreButton;

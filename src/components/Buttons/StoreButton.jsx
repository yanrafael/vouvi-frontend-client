function StoreButton({ children, text, color }) {
  return (
    <div
      className={`${color} flex cursor-pointer items-center rounded-md px-4 py-3 text-base font-medium`}
    >
      {children}
      <p className="mx-2">{text}</p>
    </div>
  );
}
export default StoreButton;

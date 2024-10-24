function StoreButton({ children, text, color }) {
  return (
    <div
      className={`${color} text-base py-3 px-4 rounded-md flex items-center font-medium cursor-pointer `}
    >
      {children}
      <p className="mx-2">{text}</p>
    </div>
  );
}
export default StoreButton;

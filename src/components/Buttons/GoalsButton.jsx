function GoalsButton({ text, color }) {
  return (
    <div
      className={`${color} text-base p-2 rounded-2xl flex items-center font-light cursor-pointer `}
    >
      <p className="mx-2">{text}</p>
    </div>
  );
}
export default GoalsButton;

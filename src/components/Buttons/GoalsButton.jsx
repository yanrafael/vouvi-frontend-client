function GoalsButton({ text, color }) {
  return (
    <div
      className={`${color} flex cursor-pointer items-center rounded-2xl p-2 text-base font-light`}
    >
      <p className="mx-2 whitespace-nowrap">{text}</p>
    </div>
  );
}
export default GoalsButton;

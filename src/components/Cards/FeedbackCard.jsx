function Feedback({ text, color, img }) {
  return (
    <div
      className={`${color} m-auto mx-2.5 mr-2.5 flex h-[18vw] w-6/12 flex-col items-center justify-center rounded-3xl text-center text-lg font-medium`}
    >
      <p>{text}</p>
      <img src={img} alt="" />
    </div>
  );
}
export default Feedback;

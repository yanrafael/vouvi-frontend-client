function AvatarTrinkets({ color, children, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`${color} lg:mr-5 flex lg:h-32 lg:w-32 md:w-14 md:h-14 md:mr-7 cursor-pointer items-center justify-center overflow-hidden lg:rounded-sm md:rounded-[10px] outline lg:outline-4 md:outline-3 outline-[#002952] dark:outline-none`}
    >
      {children}
    </div>
  );
}
export default AvatarTrinkets;

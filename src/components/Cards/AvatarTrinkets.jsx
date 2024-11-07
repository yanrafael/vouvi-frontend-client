function AvatarTrinkets({ color, children, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`${color} mr-5 flex h-32 w-32 cursor-pointer items-center justify-center overflow-hidden rounded-sm outline outline-4 outline-[#002952] dark:outline-none`}
    >
      {children}
    </div>
  );
}
export default AvatarTrinkets;

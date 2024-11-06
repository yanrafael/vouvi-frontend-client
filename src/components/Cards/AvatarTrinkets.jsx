function AvatarTrinkets({ color, children }) {
  return (
    <div
      className={`${color} mr-5 flex h-32 w-32 items-center justify-center overflow-hidden rounded-sm outline outline-4 outline-[#002952] dark:outline-none`}
    >
      {children}
    </div>
  );
}
export default AvatarTrinkets;

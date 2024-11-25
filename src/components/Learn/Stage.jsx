import { Icon } from "@iconify/react";
import propTypes from "prop-types";

function Stage({ icon, iconWidth, top, left, finished }) {
  return (
    <button
      className={`absolute flex ${icon ? "h-28 w-28" : "h-10 w-10"} group items-center justify-center rounded-full border-white transition-all duration-200 ${finished ? "bg-[#002952] hover:border-4 hover:bg-secondary-200 dark:bg-[#D6EBFF]" : "bg-[#D6EBFF] dark:bg-[#002952]"}`}
      style={{ top: `${top}px`, left: `${left}px` }}
    >
      <Icon
        icon={icon}
        width={iconWidth}
        className={
          finished
            ? "text-[#D6EBFF] group-hover:text-[#D6EBFF] dark:text-[#002952]"
            : "text-[#002952] dark:text-[#D6EBFF]"
        }
      />
    </button>
  );
}

Stage.propTypes = {
  icon: propTypes.string,
  iconWidth: propTypes.number,
  top: propTypes.number.isRequired,
  left: propTypes.number.isRequired,
  finished: propTypes.bool.isRequired,
};

export default Stage;

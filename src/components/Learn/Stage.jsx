import { Icon } from "@iconify/react";
import propTypes from "prop-types";

function Stage({ icon, iconWidth, top, left }) {
  return (
    <button
      className={`absolute flex ${icon ? "h-20 w-20" : "h-10 w-10"} items-center justify-center rounded-full bg-[#002952]`}
      style={{ top: `${top}px`, left: `${left}px` }}
    >
      <Icon icon={icon} width={iconWidth} color="#D6EBFF" />
    </button>
  );
}

Stage.propTypes = {
  icon: propTypes.string,
  iconWidth: propTypes.number,
  top: propTypes.number.isRequired,
  left: propTypes.number.isRequired,
};

export default Stage;

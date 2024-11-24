import { Icon } from "@iconify/react";
import propTypes from "prop-types";

function Stage({ icon, iconWidth, top, left }) {
  return (
    <button
      className={`absolute flex h-20 w-20 items-center justify-center rounded-full bg-[#002952]`}
      style={{ top: `${top}px`, left: `${left}px` }}
    >
      <Icon icon={icon} width={iconWidth} color="#D6EBFF" />
    </button>
  );
}

Stage.propTypes = {
  icon: propTypes.string.isRequired,
  iconWidth: propTypes.number.isRequired,
  top: propTypes.number,
  left: propTypes.number,
};

export default Stage;

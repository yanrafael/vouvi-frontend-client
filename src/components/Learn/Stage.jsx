import { Icon } from "@iconify/react";
import propTypes from "prop-types";

function Stage({ icon, iconWidth }) {
  return (
    <button
      className={`absolute flex h-20 w-20 items-center justify-center rounded-full bg-[#002952]`}
    >
      <Icon icon={icon} width={iconWidth} color="#D6EBFF" />
    </button>
  );
}

Stage.propTypes = {
  icon: propTypes.string.isRequired,
  iconWidth: propTypes.number.isRequired,
};

export default Stage;

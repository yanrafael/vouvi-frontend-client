import PropTypes from "prop-types";
function Navigation({ icon, title, width, fill }) {
  return (
    <li
      className={`${width} mx-5 flex h-[54px] cursor-pointer rounded-[360px] bg-[rgba(0,127,255,0.40)]`}
    >
      <div
        className={`absolute -z-[1] m-1 h-[46px] w-[46px] rounded-[360px] bg-secondary-200 transition-all duration-300 ease-in-out group-hover:m-0 group-hover:h-[54px] group-hover:w-[inherit] ${fill} `}
      ></div>
      {icon}
      <p
        className={`mx-2 flex text-[32px] font-medium text-[#003F7F] transition-all duration-300 ease-in-out group-hover:text-[#003F7F] dark:text-secondary-200`}
      >
        {title}
      </p>
    </li>
  );
}

Navigation.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  width: PropTypes.string,
  fill: PropTypes.string,
};

export default Navigation;

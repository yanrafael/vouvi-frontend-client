import PropTypes from "prop-types";
function Navigation({ icon, title, width, fill }) {


    return (
        <li
            className={`${width} cursor-pointer mx-5 h-[54px] flex bg-[rgba(0,127,255,0.40)] rounded-[360px] `}
        >
            <div
                className={`absolute m-1 h-[46px] w-[46px] bg-secondary-200 rounded-[360px] -z-[1] transition-all duration-300 ease-in-out group-hover:m-0 group-hover:w-[inherit] group-hover:h-[54px] ${fill} `}
            ></div>
            {icon}
            <p
                className={`flex mx-2 text-[32px] font-medium duration-300 ease-in-out transition-all group-hover:text-[#003F7F] `}
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
}

export default Navigation;
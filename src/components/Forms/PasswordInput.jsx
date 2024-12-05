import { Icon } from "@iconify/react";
import { useState } from "react";
import PropTypes from "prop-types";

function PasswordInput({
  id = "",
  name = "",
  value = "",
  onChange,
  placeholder = "Digite sua senha",
}) {
  const [icon, setIcon] = useState("mdi:eye-off");

  const showPassword = () => {
    setIcon(icon === "mdi:eye" ? "mdi:eye-off" : "mdi:eye");
    const password = document.getElementById(id);
    password.type = password.type === "password" ? "text" : "password";
  };

  return (
    <>
      <div className="relative flex h-fit w-full flex-row items-center border-b-4 border-b-secondary-200 bg-black bg-opacity-15 p-1 text-base outline-primary-200 transition-all focus-within:outline-none hover:border-b-primary-200">
        <input
          className="bg-white bg-opacity-0 focus:outline-none"
          type="password"
          name={name}
          id={id}
          value={value}
          onChange={onChange || (() => console.log("Hello"))}
          autoComplete="current-password"
          placeholder={placeholder}
          required
        />
        <div
          className="absolute right-5 hover:cursor-pointer"
          onClick={showPassword}
        >
          <Icon tabIndex="0" icon={icon} />
        </div>
      </div>
    </>
  );
}

PasswordInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default PasswordInput;

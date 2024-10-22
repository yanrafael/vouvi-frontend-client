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
      <div className="flex flex-row relative items-center bg-black bg-opacity-15 p-1 w-full h-fit border-b-4 border-b-secondary-200 hover:border-b-primary-200 text-base focus-within:outline-none transition-all outline-primary-200">
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
          className="hover:cursor-pointer absolute right-5"
          onClick={showPassword}
        >
          <Icon icon={icon} />
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

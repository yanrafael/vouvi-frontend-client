import { Icon } from '@iconify/react'
import { useState } from 'react'

function PasswordInput() {
    const [icon, setIcon] = useState("mdi:eye-off");

    const showPassword = () => {
        setIcon(icon === "mdi:eye" ? "mdi:eye-off" : "mdi:eye");
        const password = document.getElementById("password");
        password.type = password.type === "password" ? "text" : "password"
    }

    return (
        <div>
            <label className="text-base" htmlFor="password">Senha:</label>
            <div className="flex flex-row relative items-center bg-black bg-opacity-15 p-1 w-full border-b-4 border-b-secondary-200 text-base focus-within:outline outline-secondary-200">
                <input className="bg-white bg-opacity-0 focus:outline-none" type="password" name="password" id="password" autoComplete="current-password" pattern="[A-Za-z0-9](8,)" placeholder='8 digitos' required />
                <div className='hover:cursor-pointer absolute right-5' onClick={showPassword}><Icon icon={icon} /></div>
            </div>
        </div>
    );
}

export default PasswordInput
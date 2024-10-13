import { Icon } from '@iconify/react'
import { useState } from 'react'

function KeepConected() {
    const [icon, setIcon] = useState('fluent:radio-button-24-regular')
    const [keepConected, setKeepConected] = useState(false);

    const changeKeepConected = () => {
        setIcon(icon === "fluent:radio-button-24-filled" ? "fluent:radio-button-24-regular" : "fluent:radio-button-24-filled");

        setKeepConected(!keepConected);
    }

    return (
        <div className='flex items-center'>
            <span className='text-primary-200' onClick={changeKeepConected}><Icon icon={icon} width={"30px"} /></span>
            <input className='hidden' type="radio" name="keepconected" id="keepconected" value={keepConected} />
            <label className='text-md' htmlFor="keepconected">Mantenha-me conectado</label>
        </div>
    );
}

export default KeepConected
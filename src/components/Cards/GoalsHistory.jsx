import React from 'react';
import { Icon } from '@iconify/react';
const GoalsHistory = () => {
    return (
        <div className='flex justify-between bg-black rounded-[18px] py-4 px-6'>
            <div className="flex gap-2 items-center">
                <div className={`bg-orange-200 rounded-full w-fit h-fit p-4 flex-none`}>
                    <Icon icon="fa6-solid:house" width="36px" className="text-white" />
                </div>
                <p className="text-[#878787] text-base">Casa</p>
            </div>

            <div className="flex flex-col items-center">
                <p className="text-[#878787] text-[32px]">+R$260,00</p>
                <p className="text-[#87878799] text-md">01 de Outubro</p>
            </div>
        </div>
    );
};

export default GoalsHistory;
import Friends from '../../Cards/FriendCards'
import { Icon } from '@iconify/react';
function Low({ friends, openModal }) {
    return (
        <section className="w-11/12 m-auto mt-20 dark:text-white text-[40px] font-medium">
            <div className="bg-[rgba(124,32,190,0.50);] dark:bg-[#1e1e1e] rounded-md p-5 flex flex-col">
                <div className='flex justify-between text-[#471650] dark:text-white'>
                    <h1>Amigos: {friends}</h1>
                    <div className='flex text-[32px] px-2 items-center border-4 rounded-xl border-[#471650] dark:border-white cursor-pointer'>
                        <Icon icon='typcn:plus' />
                        <p className='mx-3'>Adicionar amigo</p>
                    </div>
                </div>
                <div>
                    <Friends icon={"red"} name={"Wesley rocha"} level={"15"} xp={"7.000"} vcoin={"5.000"} />
                    <Friends icon={"blue"} name={"Wesley rocha"} level={"15"} xp={"7.000"} vcoin={"5.000"} />
                    <Friends icon={"green"} name={"Wesley rocha"} level={"15"} xp={"7.000"} vcoin={"5.000"} />
                </div>
                <div className='flex justify-end mx-5 mt-3 items-center text-[#471650] dark:text-white cursor-pointer'>
                    <p onClick={openModal} className='font-medium text-[32px] mx-2'>Ver todos</p>
                    <Icon icon='prime:sort-down-fill' />
                </div>
            </div>
        </section>
    )
}
export default Low
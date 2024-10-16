import Incriment from '../../../assets/images/addition-icon.svg'
import Friends from '../../Cards/FriendCards'
import { Icon } from '@iconify/react';
function Low({ friends }) {
    return (
        <section className="w-11/12 m-auto mt-20 text-white text-[40px] font-medium">
            <div className="bg-[#1e1e1e] rounded-md p-5 flex flex-col">
                <div className='flex justify-between'>
                    <h1>Amigos: {friends}</h1>
                    <div className='flex text-[32px] items-center'>
                        <p className='mx-3'>Adicionar amigo</p>
                        <img src={Incriment} alt="" />
                    </div>
                </div>
                <div>
                    <Friends icon={"red"} name={"Wesley rocha"} level={"15"} xp={"7.000"} vcoin={"5.000"} />
                    <Friends icon={"red"} name={"Wesley rocha"} level={"15"} xp={"7.000"} vcoin={"5.000"} />
                    <Friends icon={"red"} name={"Wesley rocha"} level={"15"} xp={"7.000"} vcoin={"5.000"} />
                </div>
                <div className='flex justify-end mx-5 mt-3 items-center'>
                    <p className='font-extralight text-[32px] mx-2'>Ver todos</p>
                    <Icon icon='prime:sort-down-fill' />
                </div>
            </div>
        </section>
    )
}
export default Low
import WhiteCat from '../../../assets/images/cat-white.svg'
import EyesGreen from '../../../assets/images/eyes-green.svg'
import EyesRed from '../../../assets/images/eyes-red.svg'
import EyesBlue from '../../../assets/images/eyes-blue.svg'
import EyesBlack from '../../../assets/images/eyes-black.svg'
import EyesPink from '../../../assets/images/eyes-pink.svg'
import EyesYellow from '../../../assets/images/eyes-yellow.svg'
import NecklaceRed from '../../../assets/images/necklace-red.svg'
import NecklaceViolet from '../../../assets/images/necklace-violet.svg'
import NecklaceGreen from '../../../assets/images/necklace-green.svg'
import NecklaceBrown from '../../../assets/images/necklace-brown.svg'
import NecklaceGray from '../../../assets/images/necklace-gray.svg'
import NecklaceFrelet from '../../../assets/images/necklace-frelet.svg'
import BgOrangeCity from '../../../assets/images/background-orange-city.svg'
import BgDarkCity from '../../../assets/images/background-dark-city.svg'
import BgDesert from '../../../assets/images/background-desert.svg'
import BgDayCity from '../../../assets/images/background-day-city.svg'
import PendantGreen from '../../../assets/images/pendant-green.svg'
import PendantYYPurple from '../../../assets/images/yy-purple.svg'
import PendantYYBlack from '../../../assets/images/yy-black.svg'
import Sun from '../../../assets/images/sun.svg'
import Thunder from '../../../assets/images/thunder.svg'
import StoreSingleCard from "../../Cards/StoreSingleCard"
import StoreDoubleCard from "../../Cards/StoreDoubleCard"
function Mid() {
    return (
        <section className="w-11/12 m-auto">
            <StoreDoubleCard
                icon1={'solar:star-shine-bold'}
                title1={'Em promoção!'}
                text1={'Por tempo limitado!'}
                color1={'bg-[#84CE7A]'}
                icon2={'mingcute:eye-fill'}
                title2={'Olhe intensamente!'}
                text2={'Os melhores olhos de gatinhos'}
                img2={EyesGreen} img3={NecklaceFrelet} img4={PendantGreen} img5={BgOrangeCity} img6={EyesRed} img7={EyesBlue} img8={EyesBlack} img9={EyesPink} img10={EyesYellow}
            />

            <StoreSingleCard title={'Customize com pelagem única, seu avatar merece! '} color1={'bg-yellow'} color2={'bg-[#E28A93]'} color3={'bg-[#8D8D8D]'}>
                <img src={WhiteCat} alt="" />
            </StoreSingleCard>

            <StoreDoubleCard
                icon1={'carbon:circle-dash'}
                title1={'Coleiras: Elegância e proteção'}
                text1={'Seu avatar mais incrível!'}
                color1={'bg-white'}
                icon2={'mdi:necklace'}
                title2={'Pingentes: Detalhe de poder!'}
                text2={'Complete seu look com um toque!'}
                img1={NecklaceRed} img2={NecklaceViolet} img3={NecklaceGreen} img4={NecklaceBrown} img5={NecklaceGray} img6={PendantGreen} img7={PendantYYPurple} img8={PendantYYBlack} img9={Sun} img10={Thunder}
            />

            <StoreSingleCard title={'Customize com pelagem única, seu avatar merece! '} img1={BgOrangeCity} img2={BgDarkCity} img3={BgDesert}>
                <div style={{ backgroundImage: `url(${BgDayCity})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='flex w-full'>
                    <img src={WhiteCat} alt="" />
                </div>
            </StoreSingleCard>
        </section>
    )
}
export default Mid
import HeaderWhite from '../../Header/HeaderWhite'
import Footer from "../../Footer/Footer";
import Top from "./Top"
import Mid from "./Mid"
import Low from "./Low"
function Home(){
    return(
        <main className=' overflow-x-hidden'>
            <HeaderWhite/>
            <Top/>
            <Mid/>
            <Low/>
            <Footer/>
        </main>
    )
}
export default Home
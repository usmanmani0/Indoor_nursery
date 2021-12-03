import Header from "../Components/Header/Header";
import BackgroungImage from "../Components/BackgroundImage/BackgroungImage";
import Buy from "../Components/Buy/Buy";
import Guides from "../Components/Guides/Guides";
import SignUp from "../Components/SignUp/SignUp";
import Cards from "../Components/Cards/Cards";
import Carousel from '../Components/Carousel/Carousel'
import Propogation from "../Components/Propogation/Propogation";
import Footer from "../Components/Footer/Footer";
function Home (){
    return(
        <>
        <Header />
        <BackgroungImage />
        <Buy />
        <Guides />
        <SignUp />
        <Cards />
        <Carousel />
        <Propogation />
        <Footer />
       
        </>
    )
}

export default Home;
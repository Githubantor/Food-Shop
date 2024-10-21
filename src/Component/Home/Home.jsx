import AboutUs from "../AboutUs/AboutUs";
import Bannar from "../Bannar/Bannar";
import Descrip from "../Descrip/Descrip";
import Footer from "../Footer/Footer";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import Package from "../Package/Package";


const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
           <div className="bg-white">
           <Descrip></Descrip>
            <WhyChooseUs></WhyChooseUs>
            <Package></Package>
            <AboutUs></AboutUs>
            <Footer></Footer>
           </div>
        </div>
    );
};

export default Home;
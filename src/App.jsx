import About  from "./components/about/About"; 
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Work from "./components/work/Work";
import ContactMe from "./components/contactMe/ContactMe";
import Footer from "./components/footer/Footer";
import Toggle from "./components/toggle/Toggle";
const App = () => {
    return(
        <div style= {{backgroundColor:"#white " ,    }}>
        <Intro />
        <About />
        <ProductList/>
        <Work/>
        <ContactMe/>
        <Footer/>
        <Toggle/>
         
         
        </div>
    );
};
     
export default App; 
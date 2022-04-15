import About  from "./components/about/About"; 
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Work from "./components/work/Work";
import ContactMe from "./components/contactMe/ContactMe";
const App = () => {
    return<div>
        <Intro />
        <About />
        <ProductList/>
        <Work/>
        <ContactMe/>
         
         
        </div>
}
     
export default App; 
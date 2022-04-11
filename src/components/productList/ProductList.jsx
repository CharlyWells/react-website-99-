import "./ProductList.css"
import Product from "../product/Product"

const ProductList= ()=>  {
    return (
        <div className="ProductList">
        <div className="ProductList-texts">
            <h1 className="ProductList-title">Create& Inspire.It's Lama</h1>
           <p className="ProductList-desc">
           Lama is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
           </p>
        </div>
        <div className="ProductList-list">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>

        </div>
        </div>
    );
};

export default ProductList; 
import "./ProductList.css"  


const ProductList= ()=>  {
    return (
        <div className="ProductList">
        <div className="ProductList-texts">
        <div className="ProductList-card-bg"> 
        </div>
            <h1 className="ProductList-title">What am I good at?</h1>
            
        </div>
        <div className="ProductList-left">
                
        <div className="ProductList-card">
                    <img src=" https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80 " alt="Picture Of A Web development Work Area"  className="aboutMe-img" />
                </div>
             
            <div className="ProductList-right">
            <h1 className="ProductList-title-t">Front-End Web Development</h1>
         
        <p className="ProductList-description">
        I use React for Frontend-Web development.   
        </p>
        </div>
         </div>
         </div>
       
       
            
    
         
        
        
    );

};
 

export default ProductList; 
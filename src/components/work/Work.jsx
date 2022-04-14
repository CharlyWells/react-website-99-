import "./Work.css"  


const work= ()=>  {
    return (
        <div className="Work">
        <div className="Work-texts">
        <div className="Work-card bg"></div>
            <h1 className="Work-title">What am I good at?</h1>
           <p className="Work-desc">
           I have listed my abilities are below
           </p>
        </div>
        <div className="Work-left">
                
        <div className="Work-card">
                    <img src=" https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80 " alt="Picture Of A Web development Work Area"  className="aboutMe-img" />
                </div>
             
            <div className="Work-right">
            <h1 className="Work-title-t">Front-End Web Development</h1>
         
        <p className="Work-description">
        I use React for Frontend-Web development.   
        </p>
        </div>
         </div>
         </div>
       
            
    
         
        
        
    );

};
 

export default work; 
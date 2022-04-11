import "./About.css";
 
const About = ( ) => {
    return(
        <div className= "aboutMe" >
             
            <div className="aboutMe-left">
                <div className="aboutMe-card bg"></div>
                <div className="aboutMe-card">
                    <img src=" https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?cs=srgb&dl=pexels-pixabay-39284.jpg&fm=jpg " alt="Picture Of A Web development Work Area"  className="aboutMe-img" />
                </div>
            </div>
            <div className="aboutMe-right">
            <h1 className="aboutMe-title">About Me</h1>
         
        <p className="aboutMe-desc">
          A front-end web developer primarily doing  React. I am  also experienced in Java .
        </p>
        
         
         </div>
            </div>
            
           
           
    ) ;
} ; 

export default About;
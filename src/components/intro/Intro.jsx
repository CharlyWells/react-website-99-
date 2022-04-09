import "./intro.css"
import Me from "../../img/Me.png"
const Intro = ( ) => {
    return(
        <div className= "i">
           <div className="i-left"> 
               <div className="i-left-wrapper">
                   <h2 className="i-intro">Hello,My name is</h2>
                   <h1 className="i-name">Charlotte Wellington</h1>
                   <div className="i-title">
                       <div className="i-title-wrapper">
                           <div className="i-title-item">Web Developer</div>
                           <div className="i-title-item">Content Creator</div>
                           <div className="i-title-item">Software Engineer</div>
                           <div className="i-title-item">Student</div>
                           </div>
                   </div>
                       <p className="i-desc">
                           I develop for customers of all sizes,specializing in creating stylish,mordern website,web services and online stores.
                       </p> 
               </div> 
               <svg
                  width="75"
                  height="75"
                  viewBox="0 0 75 75"
                  fill="none"
                  stroke="black"
                  className="i-scroll"
                  xmlns="http://www.ws.org/200/svg">

                  <g id="scroll">
                      <path></path>
                      </g>    
                      

               </svg>
           </div>
           <div className="i-right">
               <div className="i-bg"></div>
               <img src={Me}  alt=""  className="i-img"/>
           </div>
        </div>
    )
}

export default Intro

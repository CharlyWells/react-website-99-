import "./ContactMe.css";
import  {useRef} from "react";
 
const ContactMe = ( ) => {

    const formRef = useRef();

    const handleSubmit = (e) =>
    {
        e.preventDefault();
    }
    return(
        <div className= "contactme" >
             
            <div className="contactme-left">
                <div className="contactme-card bg"></div>
                
            </div>
            <div className="contactme-right">
            <h1 className="contactme-title">Contact Me</h1>
            
         
         </div>
       
         <div className="container-form">
                <form ref= {formRef}  onSubmit = {handleSubmit}>
                    
                   <input type="text" placeholder="Name" name="user_name" /><br/>

                       
                   <input type="text" placeholder="Email" name="user_email" /><br/>


                     
                   <input type="text" placeholder="Subject"  name="user_subject" /><br/>

                       
                   <textarea rows="5" placeholder="Message"  name="user_message" /><br/>
 
                    <button>Submit</button> 



                </form>
         </div>
            </div>
            
           
           
    ) ;
} ; 

export default ContactMe;
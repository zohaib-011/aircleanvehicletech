import '../App.css'; 
 
const Footer=()=>{
return (
    <>
     <div className='footHeader'>
           
         <div id='img' style={{textAlign:"center"}}><img id='img' src="/images/logo.png" width={100} alt="" />
         <hr id='hr' /></div>
           
        </div>  
     
    
     
    <div  style={{textAlign:"center"}}>
      <h4>Our Locarion</h4>
    <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.8839054510627!2d73.90859490909239!3d32.768814884299054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391fa10039b8fdc3%3A0xa862640ee6da4f42!2sNASTP%20Kharian%20-%20National%20Aerospace%20Science%20%26%20Technology%20Park!5e0!3m2!1sen!2s!4v1728027829807!5m2!1sen!2s"  height="300"   allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    </div>
     
    <div>
     
   
         <div className='footerContainer'>  
         
        
          <div className='socialContainer'> 
          
            <li>
            
                <a href="https://www.instagram.com/aircleanvehicletech" target="_blank" rel="noopener noreferrer"><img src="/images/instagram.png" alt="Google" width="40"   /> </a>
            </li>
            <li>
           
                <a href="https://www.facebook.com/profile.php?id=61562537243335&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"> <img src="/images/facebook.png" alt="Google" width="60"   /></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/aircleanvehicle-tech-2185a6319utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><img src="/images/linkedin.png" alt="Google" width="40"   /> </a>
            </li>
            <li>
            
                <a href="https://youtube.com/@aircleanvehicletech?si=SAZSn5Gu3IqZxbg0" target="_blank" rel="noopener noreferrer"><img src="/images/youtube.png" alt="Google" width="50"   /> </a>
            </li>
            <li>
              <link rel="icon" href="/images/google.png" />
            </li>
            </div> 
            <div>
            <li  >
            &copy;  Air Clean Vehicle Tech 2024 .All Rights Reserved
            </li>
         </div>
        </div>
       
      </div>  
</>

);
}
export default Footer;
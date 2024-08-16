import '../App.css'; 
 
const Footer=()=>{
return (
    <>
     <div className='footHeader'>
           
         <div id='img'><img id='img' src="/images/logo.png" width={100} alt="" />
         <hr id='hr' /></div>
           
        </div>  
     
    
     
    <div>
    <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d891.055776938211!2d74.16064113754757!3d32.636493203608886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f0305330a618f%3A0xfc87388a04fa11d0!2sBusiness%20Incubation%20Center%20BIC!5e0!3m2!1sen!2s!4v1719314845749!5m2!1sen!2s"  height="300"   allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    </div>
     
    <div>
     
   
        <div className='footerContainer'>
         <div className='navigationCont'>
            <li ><a  href="/home">Home</a></li>
            <li><a href="/contact">Contact us</a></li>
         </div>
         <div>
            <li  >
                Air Clean Vehicle Tech 2024 .All Rights Reserved
            </li>
         </div>
          <div className='socialContainer'> <li>
            
                <a href="https://www.instagram.com/aircleanvehicletech" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-square-instagram"></i> </a>
            </li>
            <li>
           
                <a href="https://www.facebook.com/profile.php?id=61562537243335&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"> <i class="fa-brands fa-square-facebook"></i></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/aircleanvehicle-tech-2185a6319utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i> </a>
            </li>
            <li>
            
                <a href="https://youtube.com/@aircleanvehicletech?si=SAZSn5Gu3IqZxbg0" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-youtube"  ></i> </a>
            </li>
            </div> 
        </div>
    </div>
</>

);
}
export default Footer;
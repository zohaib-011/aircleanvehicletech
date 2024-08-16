import App from '../App.css'; 
import ContactItem from './ContactItem';
const Contact=()=>{
return (
    <div >
     
    <div className='container2' style={{paddingTop:'100px' , backgroundColor:"#119683"}}>
      <ContactItem url="/images/zohaib.jpg" title="CEO" name="Zohaib Suleman" phoneNo="+92 343 0637931" email="zohaibch03756@gmail.com"/>  
      <ContactItem url="/images/sikandar.jpg" title="Cheif Marketing Officer" name="Sikandar Tariq" phoneNo="+92 318 7370673" email="chaudharysikandar022@gmail.com"/> 
      <ContactItem url="/images/tayyaba.jpg" title="Research Coardinator" name="Tayyaba Zaman" phoneNo="+92 341 4142316" email="tayyabazaman734@gmail.com"/> 
    </div>
    </div>
)
}
export default Contact
  
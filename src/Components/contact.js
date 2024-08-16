import App from '../App.css'; 
import ContactItem from './ContactItem';
const Contact=()=>{
return (
    <div >
     
    <div className='container2' style={{paddingTop:'100px' , backgroundColor:"#119683"}}>
      <ContactItem url="/images/founder.jpg" title="CEO" name="Aqsa Maryam" phoneNo="+92 325 6164321" email="aircleanvehicletech@gmail.com"/>  

      <ContactItem url="/images/sikandar.jpg" title="Cheif Marketing Officer" name="Sikandar Tariq" phoneNo="+92 318 7370673" email="chaudharysikandar022@gmail.com"/> 
      <ContactItem url="/images/tayyaba.jpg" title="Research Coordinator" name="Tayyaba Zaman" phoneNo="+92 341 4142316" email="tayyabazaman734@gmail.com"/> 
      <ContactItem url="/images/zohaib.jpg" title="Web Developer" name="Zohaib Suleman" phoneNo="+92 343 0637931" email="zohaibch03756@gmail.com"/> 
    </div>
    </div>
)
}
export default Contact
  
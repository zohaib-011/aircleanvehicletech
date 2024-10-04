import App from '../App.css'; 
import ContactItem from './ContactItem';
import { ContactUs } from './contactUs';
const Contact=()=>{
return (
    <div >
     
    <div className='container2' style={{paddingTop:'100px' , backgroundColor:"#119683"}}>
      <ContactItem url="/images/zohaib.jpg" title="CEO" name="Zohaib Suleman" phoneNo="+92 343 0637931" email="aircleanvehicletech@gmail.com"/>  

      <ContactItem url="/images/sikandar.jpg" title="Chief Marketing Officer" name="Sikandar Tariq" phoneNo="" email=""/> 
      <ContactItem url="/images/tayyaba.jpg" title="Research Coordinator" name="Tayyaba Zaman" phoneNo="" email=""/> 
      <ContactItem url="/images/hanzala.jpg" title="Product Manager" name="Hanzala Shakir" phoneNo="" email=""/> 
      
    </div>
    
    </div>
)
}
export default Contact
  
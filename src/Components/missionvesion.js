import   '../App.css'; 
import MsnVsnItem from './MsnVsnItem'
const Container=()=>{
return(
    <div style={{"background":"#ddaf26"}}>
        <h2 style={{textAlign:"center" , fontSize:"40px"}}>Our Mission And Vision</h2>
    
    <div  className='panelContainer container2' >
        
    <MsnVsnItem width="18rem" clas='' title="Our Vision" description="Air Clean Vehicle Tech envisions a future with zero-emission vehicles, leading the industry in innovative emissions control solutions. We aim to transform harmful pollutants into non-toxic substances, enhancing global air quality and promoting environmental sustainability."/>
    <MsnVsnItem width="18rem" clas='' title="Our Mission" description="Our mission is to develop and deploy advanced catalytic filter technologies that effectively reduce harmful vehicle emissions. We are dedicated to improving air quality and supporting sustainable practices, making a significant positive impact on the environment."/>
    <MsnVsnItem width="18rem" clas='' title="Core Values" description="Innovation: Driving progress with cutting-edge emissions control technologies.
Sustainability: Committing to environmentally friendly solutions for a cleaner planet.
Integrity: Upholding transparency and ethical standards in all our operations.
Customer Focus: Providing exceptional service and tailored solutions to meet our clients' needs."/>
           </div>
           </div>
)
}
export default Container;
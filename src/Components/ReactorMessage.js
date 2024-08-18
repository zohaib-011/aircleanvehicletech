import   '../App.css'; 
import MsnVsnItem from './MsnVsnItem'
const msg=()=>{
return (
    <div className='container2' style={{backgroundColor:"#119683"}}>
    <div  className='panelContainer'>
<MsnVsnItem clas='msgItem' title="Reactor's Message" width="400px" description="Welcome to Air Clean Vehicle Tech! We are dedicated to revolutionizing vehicle emissions through innovative technologies that pave the way for a cleaner, healthier future. Thank you for joining us on our journey to create sustainable solutions for a better planet."/>
<div><img src="/images/founder.jpg" style={{height:'300px'}} alt="" />
<p id="founderTitle">Founder</p>
</div>
    </div>
    </div>
)

}
export default msg;
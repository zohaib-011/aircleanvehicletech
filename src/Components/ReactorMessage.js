import   '../App.css'; 
import MsnVsnItem from './MsnVsnItem'
const msg=()=>{
return (
    <div className='container2' style={{backgroundColor:"#119683"}}>
    <div  className='panelContainer'>
<MsnVsnItem clas='msgItem' title="Reactor's Message" width="400px" description="It gives me immense pleasure to welcome you to SkillShaks, an innovative e-learning and live learning platform dedicated to transforming the way individuals achieve their personal and professional goals. As the head of this forward-thinking institution, I am committed to advancing our mission, ensuring an engaging and supportive environment that fosters creativity, adaptability, and a strong sense of responsibility towards our global community of learners."/>
<div><img src="/images/zohaib.jpg" style={{height:'300px'}} alt="" />
<p>Co founder</p>
</div>
    </div>
    </div>
)

}
export default msg;
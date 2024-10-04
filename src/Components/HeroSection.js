import React, { Component } from 'react'
import App from '../App.css'; 
import ImageSliderLoader from './imageSliderLoader'
export class Navbar extends Component {
    render() {
       return (
        <div className='heroContainer'>
<div className='heroItem'>
 <img style={{height:"90vh"}} src="/images/heroImg.jpg"  alt="er" />
 
</div>
<ImageSliderLoader/>
 
{/* 
<div className='heroForm heroItem'>
    <h4>Registry Requests</h4>
<form action="" class="heroFormBox">
 <input className='formItem' type="text" />   
 <input className='formItem' type="text" />
 <input className='formItem' type="text" />
 <input className='formItem'  type="text" />
 <button id="submit">Submit</button>
</form>
</div> */}
        </div>
    )
}
}

export default Navbar;
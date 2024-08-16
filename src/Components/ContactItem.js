 
import React, { Component } from 'react'
import App from '../App.css'; 
 
export class contactItem extends Component {
    render() {
        let {title,name,phoneNo,email,url}=this.props;
       return (
         
        <div class="card" style={{width: "18rem"}}>
        <img src={url} class="card-img-top" style={{height:"350px"}} alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
        
          <div class="dropdown">
  <button  class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Contact Detail
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">{name}</a></li>
    <li><a class="dropdown-item" href="#">{phoneNo}</a></li>
    <li><a class="dropdown-item" href="#">{email}</a></li>
  </ul>
   
</div>
          
        </div>
      </div>
       
     
    )
}
}

export default contactItem;
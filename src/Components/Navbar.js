import React, { Component } from 'react';
import { Link } from 'react-router-dom';
  // Corrected import path for CSS

export class Navbar extends Component { 
  handleFormSubmit = (event) => {
    event.preventDefault();
    // Implement your search logic here
     
    // You can also navigate to a search results page or perform a search action
  };
  render() {
  
    return (
      <nav  className="nav navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <div> <img src="/images/logo.png" width={90} alt="Logo" /> 
        </div> 
        <div>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link style={{color:"#119683"}}  className="nav-link" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technalogy">Technology</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Our Team</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/faqs">FAQs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pitch">Pitch</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/article">Article</Link>
              </li>
            </ul>
            
           
            <form className="d-flex" role="search" onSubmit={this.handleFormSubmit}>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;

import React, { Component } from 'react'
import App from '../App.css'; 
export class Navbar extends Component {
    render() {
       return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
        <img src="/images/logo.png" width={50} alt="" /> 
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link  " aria-current="page" href="/home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">About us</a>
              </li>
               
              <li class="nav-item">
                <a class="nav-link"  href='/product'>Product</a>
              </li>
              <li class="nav-item">
                <a class="nav-link  " href='/technalogy'>Technology</a>
              </li>
              <li class="nav-item">
                <a class="nav-link  "  href='/contact'>Contact us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link  "  href='/faqs'>FAQS</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      )
    }
  }
  
  export default Navbar;
  
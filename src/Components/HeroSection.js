import React, { Component } from 'react';

import ImageSliderLoader from './imageSliderLoader';

export class Navbar extends Component {
  render() {
    return (
      <div className='heroContainer'>
        <div className='heroItem' style={{ position: 'relative' }}>
          <img style={{ height: "90vh", width: "100%" }} src="/images/heroImg.jpg" alt="er" />
          
          {/* Absolute positioned welcome text with unique ID and class */}
          <div className='uniqueWelcomeText' id='uniqueWelcomeTextId'>
            <h1 id='welcomeTitle'><h1 id='welcomeTitle'>Welcome to </h1><span className='companyName'>Air Clean Vehicle Tech</span></h1>
          </div>
        </div>
        
        <ImageSliderLoader />
      </div>
    );
  }
}

export default Navbar;

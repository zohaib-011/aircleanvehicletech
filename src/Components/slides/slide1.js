import React from 'react';
 // Make sure to create and import the CSS file for styling

const Slide1 = () => {
  return (
    <div className="slide1-container">
      <div className="text-section">
        <div className="line-and-title">
          <div className="vertical-line"></div>
          <div className="title-section">
            <h1 className="title-yellow">AIR CLEAN VEHICLE</h1>
            <h1 className="title-green"> TECH</h1>
          </div>
        </div>
        <p className="email">aircleanvehicletech@gmail.com</p>
      </div>
      <div className="logo-section">
        <div className="logo-wrapper">
          <img src="/images/logo.png" alt="Air Clean Vehicle Tech Logo" className="logo" />
        </div>
      </div>
    </div>
  );
};

export default Slide1;

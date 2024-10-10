import React from 'react';
  // Ensure this is the CSS specific to Slide3

const Slide3 = () => {
  return (
    <div id="slide3" className="slide3-container">
      <div className="slide3-left-section">
        <img src="path_to_your_image.jpg" alt="People working" className="slide3-image-section" />
      </div>
      <div className="slide3-right-section">
        <img src="path_to_logo.png" alt="Air Clean Vehicle Tech Logo" className="slide3-logo" />
        <div className="slide3-text-content">
          <h1 className="slide3-heading">Problem Statement</h1>
          <p className="slide3-paragraph">
            Air pollution in Pakistan, largely caused by vehicle emissions, is worsening. Traditional solutions like current catalytic converters are either
            <ul className="slide3-list">
              <li>too expensive or</li>
              <li>not effective enough,</li>
            </ul>
            leaving the air full of harmful gases that impact everyone’s health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide3;

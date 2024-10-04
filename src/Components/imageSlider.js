import React, { useState, useEffect } from 'react';
  // Import the CSS file

const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Manually move forward or backward (for arrow buttons)
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    // Function to handle clicking on a side image
    const handleImageClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="slider">
            <div className="slider-wrapper">
                {/* Left side image */}
                <img
                    src={images[(currentIndex - 1 + images.length) % images.length]}
                    alt="Left side image"
                    className="slider-side-image"
                    onClick={() => handleImageClick((currentIndex - 1 + images.length) % images.length)}
                />
                {/* Main image */}
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex}`}
                    className="slider-image"
                />
                {/* Right side image */}
                <img
                    src={images[(currentIndex + 1) % images.length]}
                    alt="Right side image"
                    className="slider-side-image"
                    onClick={() => handleImageClick((currentIndex + 1) % images.length)}
                />
            </div>

            <button className="arrow left-arrow" onClick={prevSlide}>&lt;</button>
            <button className="arrow right-arrow" onClick={nextSlide}>&gt;</button>
              {/* Small Moving Slider Indicator */}
              <div className="moving-slider">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;

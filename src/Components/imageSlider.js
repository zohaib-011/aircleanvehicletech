// ImageSlider.js
import React, { useState, useEffect } from 'react';
 

const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
    const [progress, setProgress] = useState(0); // Track progress

    // Automatically move slider forward or backward
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                // Move forward
                if (direction === 1) {
                    if (prevIndex === images.length - 1) {
                        setDirection(-1); // Change direction to backward
                        return prevIndex - 1;
                    } else {
                        return prevIndex + 1;
                    }
                }
                // Move backward
                else {
                    if (prevIndex === 0) {
                        setDirection(1); // Change direction to forward
                        return prevIndex + 1;
                    } else {
                        return prevIndex - 1;
                    }
                }
            });
        }, 3000); // Adjust the speed (3000ms = 3 seconds)

        return () => clearInterval(interval);
    }, [direction, images.length]);

    // Update progress bar
    useEffect(() => {
        const percentage = (currentIndex / (images.length - 1)) * 100;
        setProgress(percentage);
    }, [currentIndex, images.length]);

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

    return (
        <div className="slider">
            <button className="arrow left-arrow" onClick={prevSlide}>&lt;</button>
            <img 
                src={images[currentIndex]} 
                alt={`Slide ${currentIndex}`} 
                className="slider-image" 
                style={{ width: '100%', maxHeight: '500px', objectFit: 'contain' }} 
            />
            <button className="arrow right-arrow" onClick={nextSlide}>&gt;</button>

            {/* Progress Bar */}
            <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
        </div>
    );
};

export default ImageSlider;

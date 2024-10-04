// App.js or wherever you want to use the slider
import React from 'react';
import ImageSlider from './imageSlider'; 

const ImageSliderLoader = () => {
    const images = [
        '/images/slider/revolution.jpg',
        '/images/slider/summarize.jpg',
        '/images/slider/what.jpg',
        '/images/slider/benefits.jpg',
        '/images/slider/catalytic point.jpg',
        // Add more images as needed
    ];

    return (
        <div id='imageLoader'>
            
            <ImageSlider images={images} />
        </div>
    );
};

export default ImageSliderLoader;

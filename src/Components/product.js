import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Product = () => {
    useEffect(() => {
        // Animate the product image and details on scroll into view
        gsap.fromTo(
            "#productImgDetail",
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#productImgDetail",  // Trigger animation when the product section comes into view
                    start: "top 80%",              // Animation starts when the top of the element is at 80% of the viewport height
                    end: "top 20%",                // Ends when the top of the element is at 20% of the viewport height
                    toggleActions: "play none none reverse", // Play on scroll down, reverse on scroll up
                }
            }
        );

        gsap.fromTo(
            ".productDetail",
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".productDetail",  // Trigger animation when the product details section comes into view
                    start: "top 80%",           // Start when 80% of the section is visible
                    end: "top 20%",             // End when 20% of the section is visible
                    toggleActions: "play none none reverse", // Play when scrolling down, reverse when scrolling up
                }
            }
        );
    }, []);

    return (
        <div>
            <h5 style={{ fontSize: "50px", textAlign: "center" }}>Our Product</h5>
            <div id='productImgDetail'>
                <img 
                    className='productImg'
                    src="/images/filter.png" 
                    alt="Exhaust Air Filter" 
                />
                <div className='productDetail text-left'>
                    <p style={{ fontSize: "30px", textAlign: "center" }}>
                        <i className="fas fa-filter"></i> Description for Exhaust Air Filter
                    </p>
                    <li>
                        <strong><i className="fas fa-cogs"></i> Material Selection:</strong>
                        <ul>
                            <li><i className="fas fa-check"></i> Material: Pure copper metal sheet.</li>
                            <li><i className="fas fa-check"></i> Initial Plate Dimensions: 3 inches wide, 3.5 inches long, and 1 cm thick.</li>
                        </ul>
                    </li>
                    <li>
                        <strong><i className="fas fa-ruler-combined"></i> Marking the Centre of the Plate:</strong>
                        <ul>
                            <li><i className="fas fa-info-circle"></i> Purpose: The centre of the plate is marked to provide a reference point for subsequent operations.</li>
                            <li><i className="fas fa-tools"></i> Tool Used: Centre punch.</li>
                            <li><i className="fas fa-wrench"></i> Process:
                                <ul>
                                    <li><i className="fas fa-check-circle"></i> Place the rectangular copper plate on a flat surface.</li>
                                    <li><i className="fas fa-check-circle"></i> Measure and mark the centre of the plate (1.5 inches from one edge and 1.75 inches from the other).</li>
                                    <li><i className="fas fa-check-circle"></i> Use the centre punch to make a small indentation at the centre mark. This helps in positioning the caliper for drawing the circle and also aligns the lathe chuck.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    {/* Continue with the rest of your steps */}
                </div>
            </div>
        </div>
    );
}

export default Product;

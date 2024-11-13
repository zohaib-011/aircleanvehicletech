import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export class MsnVsnItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false
        };
    }

    componentDidMount() {
        // GSAP animation for scroll-triggered fade in and slide-up effect
        gsap.fromTo(
            this.cardRef,
            { opacity: 0, y: 100 }, // Start position: invisible and 100px down
            {
                opacity: 1,         // End position: visible
                y: 0,               // Move to original position
                duration: 1,        // Duration of the animation
                ease: 'power3.out', // Smooth easing
                scrollTrigger: {
                    trigger: this.cardRef,   // Trigger animation when card comes into view
                    start: 'top 80%',         // Start the animation when the top of the card reaches 80% of the viewport
                    end: 'top 20%',           // End the animation when the top of the card reaches 20% of the viewport
                    toggleActions: 'play none none reverse', // Play on scroll down, reverse on scroll up
                }
            }
        );
    }

    toggleExpand = () => {
        this.setState(prevState => ({
            isExpanded: !prevState.isExpanded
        }));
    }

    render() {
        const { clas, title, description, width } = this.props;
        const { isExpanded } = this.state;
        const maxLength = 100; // Set the max length for description

        return (
            <div className={clas} style={{ width: width }}>
                <div className="card" ref={(el) => (this.cardRef = el)}>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">
                            {isExpanded ? description : `${description.substring(0, maxLength)}${description.length > maxLength ? '...' : ''}`}
                        </p>
                        {description.length > maxLength && (
                            <Link to="" onClick={this.toggleExpand} className="btn btn-primary" style={{ backgroundColor: "#ddaf26", border: "none" }}>
                                {isExpanded ? 'Read Less' : 'Read More'}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default MsnVsnItem;

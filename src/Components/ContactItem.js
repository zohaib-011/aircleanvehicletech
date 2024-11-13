import React, { Component } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../App.css';

gsap.registerPlugin(ScrollTrigger);

export class ContactItem extends Component {
  componentDidMount() {
    gsap.fromTo(
      this.cardRef,
      { opacity: 0, y: 200 }, // Start from 300px below and invisible
      {
        opacity: 1,           // End with full opacity
        y: 0,                 // Move to the original position (0px)
        duration: 1,          // Animation duration
        ease: 'power3.out',   // Ease for smooth transition
        scrollTrigger: {
          trigger: this.cardRef,
          start: 'top 80%',    // Start animation when the card is 80% visible
          end: 'top 20%',      // End animation when card is 20% visible
          toggleActions: 'play none none reverse', // Play on scroll down and reverse on scroll up
        },
      }
    );
  }

  render() {
    const { title, name, phoneNo, email, url } = this.props;
    return (
      <div
        className="card"
        style={{ width: '18rem' }}
        ref={(el) => (this.cardRef = el)}
      >
        <img src={url} className="card-img-top" style={{ height: '350px' }} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className="dropdown">
            <button
              style={{ backgroundColor: '#ddaf26' }}
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Team Detail
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">{name}</a>
              </li>
              {/* Uncomment to add phone number and email details */}
              {/* <li><a className="dropdown-item" href="#">{phoneNo}</a></li>
              <li><a className="dropdown-item" href="#">{email}</a></li> */}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactItem;

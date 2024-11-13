import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../App.css';
import MsnVsnItem from './MsnVsnItem';

gsap.registerPlugin(ScrollTrigger);
const Msg = () => {
    const panelRef = useRef(null);
    const imgRef = useRef(null);
  
    useEffect(() => {
      // Panel animation from left to center
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, x: '-100vw' },
        {
          opacity: 1,
          x: '0',
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: panelRef.current,
            start: 'top 80%', // Trigger animation when the top of the element hits 80% of the viewport height
            toggleActions: 'play none none reverse',
          },
        }
      );
  
      // Image animation from right to center
      gsap.fromTo(
        imgRef.current,
        { opacity: 0, x: '100vw' },
        {
          opacity: 1,
          x: '0',
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imgRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, []);
  
    return (
      <div style={{ backgroundColor: "#119683", textAlign: "center", padding: "2vh 2vw" }}>
        <h4 style={{ fontSize: '4vw', color: '#fff' }}>Founder Message</h4>
        <div className="panelContainer" ref={panelRef}>
          <MsnVsnItem
            clas="msgItem"
            title="Reactor's Message"
            width="80vw"
            description="Welcome to Air Clean Vehicle Tech! We are dedicated to revolutionizing vehicle emissions through innovative technologies that pave the way for a cleaner, healthier future. Thank you for joining us on our journey to create sustainable solutions for a better planet."
          />
          <div>
            <img ref={imgRef} src="/images/zohaib.jpg" style={{ height: '30vh', borderRadius: '50%' }} alt="Founder" />
            <p id="founderTitle">Founder</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Msg;
  
  
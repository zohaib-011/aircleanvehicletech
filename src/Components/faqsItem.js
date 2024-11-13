import React, { useEffect } from "react";
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const FaqItem = (props) => {
  const { no, question, answer } = props;

  useEffect(() => {
    // Select the accordion button to animate on open/close
    const accordionButton = document.querySelector(`#accordionButton${no}`);
    const accordionCollapse = document.querySelector(`#collapse${no}`);
    
    // Add GSAP animation when the accordion is toggled
    accordionButton.addEventListener('click', () => {
      const isCollapsed = accordionCollapse.classList.contains('collapse');
      if (!isCollapsed) {
        gsap.fromTo(accordionCollapse, 
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
        );
      } else {
        gsap.to(accordionCollapse, { opacity: 0, y: -20, duration: 0.3, ease: "power3.in" });
      }
    });
  }, [no]);

  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button 
            style={{backgroundColor: "#ddaf26"}} 
            className="accordion-button" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target={`#collapse${no}`} 
            aria-expanded="true" 
            aria-controls={`collapse${no}`} 
            id={`accordionButton${no}`}
          >
            <strong>{question}</strong> 
          </button>
        </h2>
        <div id={`collapse${no}`} className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <p>{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;

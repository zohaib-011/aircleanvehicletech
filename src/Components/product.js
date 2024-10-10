import React from 'react';
  // Assuming you have a separate CSS file for custom styling
 
const Product = () => {
    return (
        <div>
            <h5 style={{fontSize:"50px" ,color:""}}>Our Product</h5>
            <div id='productImgDetail'>
  <img 
    className='productImg'
    src="/images/filter.png" 
    alt="Exhaust Air Filter" 
  />

  <div className='productDetail'>
    <p><i className="fas fa-filter"></i> Description for Exhaust Air Filter</p>
    
      <li>
        <strong><i className="fas fa-cogs"></i> Material Selection:</strong>
        <ul style={{   }}>
          <li><i className="fas fa-check"></i> Material: Pure copper metal sheet.</li>
          <li><i className="fas fa-check"></i> Initial Plate Dimensions: 3 inches wide, 3.5 inches long, and 1 cm thick.</li>
        </ul>
      </li>
      <li>
        <strong><i className="fas fa-ruler-combined"></i> Marking the Centre of the Plate:</strong>
        <ul style={{  }}>
          <li><i className="fas fa-info-circle"></i> Purpose: The centre of the plate is marked to provide a reference point for subsequent operations.</li>
          <li><i className="fas fa-tools"></i> Tool Used: Centre punch.</li>
          <li><i className="fas fa-wrench"></i> Process:
            <ul style={{  }}>
              <li><i className="fas fa-check-circle"></i> Place the rectangular copper plate on a flat surface.</li>
              <li><i className="fas fa-check-circle"></i> Measure and mark the centre of the plate (1.5 inches from one edge and 1.75 inches from the other).</li>
              <li><i className="fas fa-check-circle"></i> Use the centre punch to make a small indentation at the centre mark. This helps in positioning the calliper for drawing the circle and also aligns the lathe chuck..</li>
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

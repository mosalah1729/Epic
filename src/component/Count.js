import React from 'react';
import './css/Count.css'; 

function Count() {
  return (
    <div className="count-container">
    
      <div className="column">
        <div className="large-text">5M</div>
        <div className="small-text">Daily User<br/> Engagements</div>
      </div>
      <div className="column">
        <div className="large-text">$500K</div>
        <div className="small-text">Revenue Surge for an Platform</div>
      </div>
      <div className="column">
        <div className="large-text">10X</div>
        <div className="small-text">ROAS on all our marketing campaigns</div>
      
    </div>
    </div>
  );
}

export default Count;

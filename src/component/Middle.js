import React from 'react';
import './css/Middle.css';

function Middle() {
  return (
    <div className="image-gallery">
      <div  className="image-row">
      <div>
  <div style={{ position: 'relative' }}>
    <img src="1.png" alt="Image 1" className="gallery-image" style={{ width: '347px', height: '347px', position: 'absolute', top: '0', left: '-650px' }} />
    <div className="image-description" style={{ width: '347px', height: '66px', position: 'absolute', top: '360px', left: '-600px', textAlign: 'center' }}>Explore large, destructible environments where no two games are ever the same.</div>
  </div>

  <div style={{ position: 'relative' }}>
    <img src="2.png" alt="Image 2" className="gallery-image" style={{ width: '347px', height: '347px', position: 'absolute', top: '0', left: '-250px' }} />
    <div className="image-description" style={{ width: '347px', height: '66px', position: 'absolute', top: '360px', left: '-200px', textAlign: 'center' }}>Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale.</div>
  </div>

  <div style={{ position: 'relative' }}>
    <img src="3.png" alt="Image 3" className="gallery-image" style={{ width: '347px', height: '347px', position: 'absolute', top: '0', left: '150px' }} />
    <div className="image-description" style={{ width: '347px', height: '66px', position: 'absolute', top: '360px', left: '200px', textAlign: 'center' }}>Discover even more ways to play across thousands of creator-made game genres.</div>
  </div>
</div>

</div>

      
    
      
    </div>




  );
}

export default Middle;


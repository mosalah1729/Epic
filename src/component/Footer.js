import React from 'react';
import './css/Footer.css'; 

function Footer() {
  return (
    <div className="footer">
      <div className="box">
      <div className="footer-text1">Interested In Delving Deeper Into The Project?</div>
      <div className="footer-text2">
        If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at  <span style={{fontWeight: 510}}>hello@abc.com </span>or give us a call at <span style={{fontWeight: 510}}>+91 480 20802730</span>.
      </div>
      <div className="footer-buttons">
        <button className="footer-button1">Ring on Skype</button>
        <button className="footer-button2">Contact us</button>
      </div>
    </div>

    <div className="copyright" >
     © 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved
    </div>
    </div>
  );
}

export default Footer;

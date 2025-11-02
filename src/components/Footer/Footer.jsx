import React, { useState } from 'react';
import linkedin from '../../assets/linkedin.png'
import insta from '../../assets/Insta.png'
import payment from '../../assets/payment-app.png'
import usd from '../../assets/usd.png'
import './Footer.css';

const Footer = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <footer className='footer-container'>
      <div className='footer-top'>
        <div className='top-left-footer'>
          <h3 className='newsletter-heading'>BE THE FIRST TO KNOW</h3>
          <p className='newsletter-text'>Sign up for updates from mettā muse.</p>
          <div className='newsletter'>
            <input type='text' placeholder='Enter your e-mail' className='newsletter-input' />
            <button className='newsletter-btn'>Subscribe</button>
          </div>
        </div>

        <div className='top-right-footer'>
          <div className='contact-us'>
            <h3>CONTACT US</h3>
            <div className='contact-info'>
              <p className='phone'>+44 221 133 5360</p>
              <p className='email'>customercare@mettamuse.com</p>
            </div>
          </div>
          <div className='currency-container'>
            <h3 className='currency-heading'>CURRENCY</h3>
            <img src={usd} alt='USD Flag' className='currency-image' />
            <p className='currency-text'>
              Transactions will be completed in Euros and a currency reference is available on hover.
            </p>
          </div>
        </div>
      </div>
     <div className='footer-bottom'>

        <div className='bottom-section'>
          <div className='footer-heading'>
            <h3>mettā muse</h3>
            <span
              className={`toggle-icon ${activeSection === 'metta' ? 'rotated' : ''}`}
              onClick={() => toggleSection('metta')}
            >
              ˅
            </span>
          </div>
          <ul className={`footer-links ${activeSection === 'metta' ? 'show' : ''}`}>
            <li>About us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliance Docs</li>
          </ul>
        </div>

        <div className='bottom-section'>
          <div className='footer-heading-container'>
            <h3 className='footer-heading'>QUICK LINKS</h3>
            <span
              className={`toggle-icon ${activeSection === 'quick' ? 'rotated' : ''}`}
              onClick={() => toggleSection('quick')}
            >
              ˅
            </span>
          </div>
          <ul className={`footer-links ${activeSection === 'quick' ? 'show' : ''}`}>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className='bottom-section-follow'>
          <div className='footer-heading-follow'>
            <h3>FOLLOW US</h3>
            <span
              className={`toggle-icon ${activeSection === 'follow' ? 'rotated' : ''}`}
              onClick={() => toggleSection('follow')}
            >
              ˅
            </span>
          </div>

          <div className={`follow-us ${activeSection === 'follow' ? 'show' : ''}`}>
            <div className='social-icons'>
              <img src={insta} alt='Instagram' />
              <img src={linkedin} alt='LinkedIn' />
            </div>
          </div>

          <div className='accepts'>
            <h3 className='accepts-text'>metta muse ACCEPTS</h3>
            <img src={payment} alt='Visa' className='payment-images' />
          </div>
        </div>
      </div>

      <div className='footer-copyright'>
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

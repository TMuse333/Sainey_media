import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
      
        
       
        <div className="quick-links">
          <Link to="/company"
          className='link'
          >About Company
          </Link>
          <Link to="/ceo"
          className='link'>Work with us</Link>
          <Link to="/portfolio"
          className='link'>Portfolio</Link>
          <Link to="/about"
          className='link'>About us
          </Link>
        </div>
   
       
      </div>

      <p>Q3 Visuals 2023</p>
    
    </footer>
  );
};

export default Footer;
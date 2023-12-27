import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css'
import logo from ;

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
      
        
       <p className='description-text'>Sainey Media</p>

        <div className="quick-links">
          <Link to="/company"
          className='link'
          >About Company
          </Link>
          <Link to="/ceo"
          className='link'>About CEO</Link>
          <Link to="/portfolio"
          className='link'>Portfolio</Link>
          <Link to="/about"
          className='link'>Contact
          </Link>
        </div>
   
       
      </div>

      <p>Q3 Visuals 2023</p>
    
    </footer>
  );
};

export default Footer;
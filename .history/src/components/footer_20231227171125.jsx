import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css'
import logo from '../media/black-sainey-logo.png'
import ig from '../media/instagram-logo.svg.png'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
      
        
       {/* <p className='description-text'>Sainey Media</p> */}

       <img src={logo}
       className='footer-logo'/>

       <div className='social-media'>

        <img src={ig}/>
        <a href=

       </div>

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
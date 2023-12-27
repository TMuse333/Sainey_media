import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css'
import logo from '../media/black-sainey-logo.png'
import ig from '../media/instagram-logo.svg.png'
import yt from '../media/red-youtube-logo-social-media-logo_197792-1803.jpg.avif'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
      
        
       {/* <p className='description-text'>Sainey Media</p> */}



       <div className='social-media'>


        <a href='https://www.instagram.com'>
        <img src={ig}/>
        </a>

        <a href='https://www.youtube.com'>
        <img src={yt}/>
        </a>

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
    
    </footer>
  );
};

export default Footer;
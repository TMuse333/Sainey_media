import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css'
import logo from '../media/black-sainey-logo.png'
import ig from '../media/instagram-logo.svg.png'
import yt from '../media/red-youtube-logo-social-media-logo_197792-1803.jpg.avif'

const Footer = ({links,gradientBack}) => {
  return (
    <footer>
      <div className="footer-container">
      
        
       {/* <p className='description-text'>Sainey Media</p> */}





        <div className="quick-links">
        {links.map((link,index) => (
          <Link to={link.dest}
          className='link'>
            {link.name}
          </Link>
        ))}
        </div>

        <div className='social-media'>


<a href='https://www.instagram.com'>
<img src={ig}/>
</a>



</div>

        <p className='description-text'>
          2024 Sainey Media
        </p>

        {/* <img src={logo}
       className='footer-logo'/> */}
   
       
      </div>
    
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css'
import logo from '../media/black-sainey-logo.png'
import ig from '../media/instagram-logo.svg.png'


const Footer = ({links,gradientBackground}) => {
  return (
    <footer>
      <div 
      className=
      { gradientBackground ? "footer-container gradient" : 'footer-container'}
      >
      
        
       {/* <p className='description-text'>Sainey Media</p> */}





        <div className="quick-links">
        {links.map((link,index) => (
          <Link to={link.dest}
          className='link'
          key={index}>
            {link.name}
          </Link>
        ))}
        </div>

        <div className='social-media'>


<a href='https://www.instagram.com/saineymedia/'>
<img src={ig}/>
</a>



</div>

        <p className='description-text'
        style={{
          color:'#BE9F5B'
        }}>
          2024 Sainey Media
        </p>
   
       
      </div>
    
    </footer>
  );
};

export default Footer;
import React, { useEffect, useRef, useState } from 'react';
import '../styles/packages.css';
import Footer from './footer';
import ParticlesComponent from './particle';
import Navbar from './navbar';
import Booking from './booking';
import { Link } from 'react-router-dom';

const Packages = () => {
  const links = [
    {
      dest: '/about-ceo',
      name: 'About CEO',
    },
    {
      dest: '/',
      name: 'Home',
    },
    {
      dest: '/portfolio',
      name: 'Our work',
    },
  ];

  const [package1Visible, setPackage1Visible] = useState(false);
  const [package2Visible, setPackage2Visible] = useState(false);

  const package1Ref = useRef();
  const package2Ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const checkVisibility = (ref, setState) => {
        const elementTop = ref.current.getBoundingClientRect().top;
        const elementBottom = ref.current.getBoundingClientRect().bottom;
        const offset = 175;

        if (elementTop < window.innerHeight - offset && elementBottom > offset) {
          setState(true);
        }
      };

      checkVisibility(package1Ref, setPackage1Visible);
      checkVisibility(package2Ref, setPackage2Visible);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [package1Ref, package2Ref]);

  return (
    <>
      
      <Navbar links={links} />
      <div className='packages-container'>
        <div className='package-intro'>
          <h1 className='title-text'>Elevate Your Social Presence with Sainey Media</h1>
          <p className=''>
            At Sainey Media, we understand that every client is unique, and that's why we offer two tailored packages
            designed to meet your specific needs. Whether you're a budding creator or an established brand looking to
            take your social media game to the next level, we have the perfect solution for you.
          </p>
        </div>
        <div className='packages-box'>
          <div className='package-1' id='package-1' ref={package1Ref}>
            <h1 className='title-text'>Content Catalyst</h1>
            <ul className='package-list'>
              <li>7 High-Quality Videos per Week for Daily Posting</li>
              <li>Personalized 1-on-1 Content Consultation</li>
              <li>Weekly Researched Hooks for Effortless Idea Generation</li>
            </ul>
            <p className='package-offer bold'>Exclusive 3-Month Trial Offer: $499 USD/month</p>
            <p className='package-offer'>
              After the trial period, continue to elevate your content with Sainey Media for a year at just $649
              USD/month.
            </p>
          </div>
          <div className='package-2' id='package-2' ref={package2Ref}>
            <h1 className='title-text'>Influence Amplifier</h1>
            <ul className='package-list'>
              <li>14 High-Quality Videos per Week for Maximum Impact</li>
              <li>Tailored 1-on-1 Content Consultation</li>
              <li>Weekly Researched Hooks for Seamless Content Creation</li>
            </ul>
            <p className='package-offer bold'>Exclusive 3-Month Trial Offer: $975 USD/month</p>
            <p className='package-offer'>
              After the trial period, unleash your full potential with Sainey Media for a year at just $1,249 USD/month.
            </p>
          </div>
        </div>
        <div className='package-outro'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ab saepe nisi sequi praesentium corporis
            dolorem officia quae, voluptate tenetur? <Booking altColor={true} />
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Want to see these packages in action? <br />
          </p>
          <Link to='/about-company'>
            <button className='button'>Click Here</button>
          </Link>
        </div>
        <Footer links={links} gradientBackground={false} />
      </div>
    </>
  );
};

export default Packages;

import react from 'react'
import {Link} from 'react-router-dom'
import '../'

const Paragraph = () => {


    return (
        <div className='paragraph-container'>
            <p className='description-text'>
            At Sainey Media, we're not just another marketing agency; we are your dedicated allies in the digital world. With a passion for creativity and a commitment to delivering results, we strive to empower businesses of all sizes with affordable and impactful marketing solutions. Our mission is simple: to help businesses thrive in today's competitive landscape by providing top-notch marketing services tailored to their unique needs. We believe that every business deserves the opportunity to succeed, and we're here to make that vision a reality.
            </p>
            <Link to='about-company'>
                                    <button className="button">Our services</button>
                                </Link>
        </div>
    )
}

export default Paragraph
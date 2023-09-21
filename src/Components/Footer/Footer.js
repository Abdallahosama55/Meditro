import React from 'react'
import './Footer.css'

import Logo from '../../assets/Images/logo.png'
import Facebook from '../../assets/Images/facebook.png'
import Twitter from '../../assets/Images/twitter.png'
import Instagram from '../../assets/Images/instagram.png'
import Linkein from '../../assets/Images/linkein.png'
import Motion01 from '../../assets/Images/motion01.png'
import Motion02 from '../../assets/Images/motion02.png'
import bgimg03 from '../../assets/Images/bg03.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className='footer text-center text-md-start'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-6'>
              <div className='box01'>
                <Link to="/"><img src={Logo} alt='Logo' className='img-fluid'/></Link>
                <p>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.</p>
                <div className='icon-text'>
                  <div className="icon-container"><FontAwesomeIcon icon={faPhone} className='iconphone'/></div>
                  <div className='textContact'>
                    <h2>Contact Us</h2>
                    <span>+01 123 456 7890</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='box ml-50'>
                <h3>Quick Links</h3>
                <ul>
                  <Link to='/aboutus'><li>About Us</li></Link>
                  <Link to='/services'><li>Services</li></Link>
                  <Link to='/#'><li>Booking</li></Link>
                  <Link to='/#'><li>Faq's</li></Link>
                  <Link to='/#'><li>Blogs</li></Link>
                  <Link to='/#'><li>Out Team</li></Link>
                </ul>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='box'>
                <h3>Our Service</h3>
                <ul>
                <Link to='/#'><li>Dental Care</li></Link>
                <Link to='/#'><li>Cardiac Clinic</li></Link>
                <Link to='/#'><li>Massege Therapy</li></Link>
                <Link to='/#'><li>Cardiology</li></Link>
                <Link to='/#'><li>Precise Diagnosis</li></Link>
                <Link to='/#'><li>Abmbulance Services</li></Link>
                </ul>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='box'>
                <h3>Subcribe</h3>
                <form>
                  <input placeholder='Email Address' required/>
                  <button className='btn'>Subscribe Now</button>
                </form>
                <div className='social-media'>
                  <ul>
                    <li><a href='#/'><img src={Facebook} alt='Facebook'/></a></li>
                    <li><a href='#/'><img src={Twitter} alt='Twitter'/></a></li>
                    <li><a href='#/'><img src={Instagram} alt='Instagram'/></a></li>
                    <li><a href='#/'><img src={Linkein} alt='Linkein'/></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='Copyright'>
            <p>Copyright © 2023 Design & Developed by Abdallah Osama</p>
          </div>
          <div className='img-bg'>
            <img src={Motion01} alt='img' className='img01'/>
            <img src={Motion01} alt='img' className='img01 img0101'/>
            <img src={Motion02} alt='img' className='img02'/>
            <img src={bgimg03} alt='img' className='img03'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer

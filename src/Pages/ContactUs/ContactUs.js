import React, { useState } from 'react';
import './ContactUs.css'
import ItemContactUs from './ItemContactUs/ItemContactUs'
import Banner from '../../Components/Banner/Banner'
import Social from '../../Components/Social/Social';
import Navbar from '../../Components/Nav/Navbar';
import Footer from '../../Components/Footer/Footer';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop ';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocationDot, faEnvelopeOpenText, faGlobe} from '@fortawesome/free-solid-svg-icons'


import ImgCont1 from '../../assets/Images/cont01.png'
import ImgCont2 from '../../assets/Images/cont02.png'
import ImgCont3 from '../../assets/Images/cont03.png'


const ContactUs = () => {

  const boxesData = [
    {
      img: ImgCont1,
      title: 'Contact Number',
      info01: '+001 123 456 790',
      info02: '+002 3424 44 00'
    },
    {
      img: ImgCont2,
      title: 'Email Address',
      info01: 'info@yourdomain.com',
      info02: 'example@support.com'
    },
    {
      img: ImgCont3,
      title: 'Address',
      info01: '2005 Stokes Isle Apt. 896, Venaville 10010, USA',
    },
  ];

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [department, setDepartment] = useState('option1');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };


  return (
    <>
      <Navbar />
      <Banner title="Contact Us"/>
      <div className='secform'>
        <div className='container'>
          <div className='cous-form'>
            <div className='row'>
              <div className='col-lg-5'>
                <div className='box boxform'>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      placeholder='Your Name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <input
                      type="email"
                      placeholder='Email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <input
                      type="number"
                      placeholder='Phone Numbers'
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                    <select
                      id="selectOption"
                      name="option"
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                    >
                      <option value="option1">Select Department</option>
                      <option value="option2">One</option>
                      <option value="option3">Two</option>
                      <option value="option4">Three</option>
                    </select>
                    <textarea
                      placeholder='Type Message'
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <button type="submit" className='btn btnsubmit'>Submit</button>
                  </form>
                </div>
              </div>
              <div className='col-lg-5'>
                <div className='overlay'>
                  <div className='info'>
                    <h2>Contact Us For Any Informations</h2>
                    <div className='cont'>
                      <h6><FontAwesomeIcon icon={faMapLocationDot} /> Location</h6>
                      <p>2005 Stokes Isle Apt. 896,<br /> Venaville 10010, USA</p>
                    </div>
                    <div className='cont'>
                      <h6><FontAwesomeIcon icon={faEnvelopeOpenText} /> Email & Phone</h6>
                      <p>info@yourdomain.com <br /> (+68) 120034509</p>
                    </div>
                    <div className='cont'>
                      <h6><FontAwesomeIcon icon={faGlobe} /> Follow Us</h6>
                      <Social />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='contitem'>
        <div className='container'>
          <div className='row'>
            {boxesData.map((box, index) => (
              <ItemContactUs
                key={index}
                img={box.img} 
                title={box.title}
                info01={box.info01}
                info02={box.info02}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default ContactUs

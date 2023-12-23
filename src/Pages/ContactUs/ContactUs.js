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
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import {
  fetchData,
  fetchDataSuccess,
  fetchDataStart,
  fetchDataFailure,
} from '../../Redux/ReduxContactus/apiSlice';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'; // Import SweetAlert2 React Content
import { unwrapResult } from '@reduxjs/toolkit';


const MySwal = withReactContent(Swal); 

const ContactUs = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.apicontact_us.data);
  const loading = useSelector((state) => state.apicontact_us.loading);
  const error = useSelector((state) => state.apicontact_us.error);
  const [formattedDateTime, setFormattedDateTime] = useState('');

  useEffect(() => {
    dispatch(fetchDataStart());
    dispatch(fetchData())
      .then(unwrapResult)
      .then((data) => {
        dispatch(fetchDataSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchDataFailure(error.message));
      });
  }, [dispatch]);
  const formik = useFormik({
    initialValues: {
      name: '',
      phone:'',
      email: '',
      message: '',
     
    },
    onSubmit: async (values) => {
      // Ensure the date field is set to the formatted date
      values.date = formattedDateTime;

      try {
        const response = await dispatch(fetchData(values)); // Dispatch your Redux action with the form data

        MySwal.fire({
          icon: 'success',
          title: data.message || 'Data Sent Successfully!',
          text: 'Thank you for your submission.',
        });
      } catch (error) {
        MySwal.fire({
          icon: 'error',
          title: data.message ||'Data Submission Failed',
          text: 'There was an error while submitting the data. Please try again later.',
        });
      }
    },
  });

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
              <h1>ContactUs</h1>
                <div className='box boxform'>
                  <form onSubmit={formik.handleSubmit}>
                    <input
                      type="text"
                      placeholder='Your Name'
                      name='name'
                      value={formik.values.name}
                     onChange={formik.handleChange}
                  
                      required
                    />
                    <input
                      type="email"
                      placeholder='Email'
                      name='email'
                     
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      
                      required
                    />
                    <input
                      type="tel"
                      name='phone'
                      placeholder='Phone Numbers'
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      required
                    
                    />
             
                    <textarea
                      placeholder='Type Message'
                      name='message'
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      required
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

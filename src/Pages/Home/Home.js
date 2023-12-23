import React, { useEffect } from 'react'
import './Home.css'
import Aboutus from './AboutUs/Aboutus'

import Works from './works/works'
import BookAppointment from './BookAppointment/BookAppointment'
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import Services from './Services/Services'
import Testimonial from './Testimonial/Testimonial'
import News from './News/News'
import Navbar from '../../Components/Nav/Navbar';
import Footer from '../../Components/Footer/Footer'
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop '
import Categories from './Categories/Categories';
import Slider from "react-slick";
import { useState } from 'react'
import ImgPerson from '../../assets/Images/logo.png'
import bgimg01 from '../../assets/Images/bg01.png'
import bgimg02 from '../../assets/Images/bg02.png'
import bgimg03 from '../../assets/Images/bg03.png'
import bgimg04 from '../../assets/Images/bg04.png'
import bgimg05 from'../../assets/Images/about03.jpg'
import { Container } from 'react-bootstrap';
import BannerAds from './BannerAds/BannerAds'

const Home = () => {
  const [backgroundImagee, setBackgroundImage] = useState(bgimg05);




  return (
    <>
      <Navbar />
      
  <BannerAds/>
       
      <Container className='mt-3 gy-4'>
      <div className='mt-3 gy-4'>
      <Categories/>
      <div className='mt-5'>
  
  
      
      
      </div>
   
      </div>
      
      
      </Container>
     
      <Aboutus />
      <Works />
      <BookAppointment />
      <Services/>
      <Testimonial />
   
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default Home

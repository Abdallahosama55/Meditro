import React from 'react'
import './AboutUs.css'


import Banner from '../../Components/Banner/Banner'
import Aboutus from '../Home/AboutUs/Aboutus'
import BoxNumber from '../../Components/BoxNumber/BoxNumber'
import Doctor from '../../Components/ItemDoctor/Doctor'
import Testimonial from '../Home/Testimonial/Testimonial'
import News from '../Home/News/News'
import Navbar from '../../Components/Nav/Navbar'
import Footer from '../../Components/Footer/Footer'
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop '


const AboutUs = () => {
  return (
    <>
      <Navbar />
      <Banner title="About Us"/>
      <Aboutus />
      <BoxNumber />
      <Doctor />
      <Testimonial />
      <News />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default AboutUs

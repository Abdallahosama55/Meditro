import React from 'react'
import './Home.css'
import Aboutus from './AboutUs/Aboutus'
import Works from './works/works'
import BookAppointment from './BookAppointment/BookAppointment'
import Services from './Services/Services'
import Testimonial from './Testimonial/Testimonial'
import News from './News/News'
import Navbar from '../../Components/Nav/Navbar';
import Footer from '../../Components/Footer/Footer'
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop '


import ImgPerson from '../../assets/Images/person-header.png'
import bgimg01 from '../../assets/Images/bg01.png'
import bgimg02 from '../../assets/Images/bg02.png'
import bgimg03 from '../../assets/Images/bg03.png'
import bgimg04 from '../../assets/Images/bg04.png'


const Home = () => {
  return (
    <>
      <Navbar />
      <div className='header'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-7 col-md-6 col-sm-7'>
              <h6>We Provide All Health Care Solution</h6>
              <h1>Protect Your Health And Take Care To Of Your Health</h1>
              <a href='/#' className='btn-read'>Read More</a>
            </div>
            <div className='col-lg-5 col-md-6 col-sm-5'>
              <img src={ImgPerson} alt='Img' className='img-fluid img-vertical-move'/>
            </div>
          </div>
          <div className='img-bg'>
            <img src={bgimg01} alt='img' className='img01'/>
            <img src={bgimg02} alt='img' className='img02'/>
            <img src={bgimg03} alt='img' className='img03'/>
            <img src={bgimg04} alt='img' className='img04'/>
          </div>
        </div>
      </div>
      <Aboutus />
      <Works />
      <BookAppointment />
      <Services />
      <Testimonial />
      <News />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default Home

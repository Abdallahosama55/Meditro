import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Testimonial.css'
import TitleBasic from '../../../Components/TitleBasic/TitleBasic'
import ItemTestimonial from './ItemTestimonial';


import bgTestimonial from '../../../assets/Images/bgTestimonial.png'
import person01 from '../../../assets/Images/person01.jfif'
import person02 from '../../../assets/Images/person02.jfif'
import person03 from '../../../assets/Images/person03.jfif'
import person04 from '../../../assets/Images/person04.jfif'
import person05 from '../../../assets/Images/person05.jfif'
import person06 from '../../../assets/Images/person06.jfif'
import Motion01 from '../../../assets/Images/bgtestimonial01.png'
import Motion02 from '../../../assets/Images/bg02.png'





const Testimonial = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  const boxesData = [
    {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida.',
      doctor: 'John Deo',
      patient: 'mohammed',
    },
    {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida.',
      doctor: 'John Hed',
      patient: 'Ali',
    },
    {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida.',
      doctor: 'Gala Ted',
      patient: 'Noor',
    },
  ];

  return (
    <>
      <div className='testimonial'>
        <div className='container'>
          <div className='titlemain'>
              <TitleBasic title = 'Testimonial'/>
              <h2>See What Are The Patients Saying About us</h2>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='box thumb-wraper'>
                <img src={bgTestimonial} alt='img' className='img-fluid'/>
                <ul>
                  <li><a href='#/'><img src={person01} alt='img' className='person01'/></a></li>
                  <li><a href='#/'><img src={person02} alt='img' className='person02'/></a></li>
                  <li><a href='#/'><img src={person03} alt='img' className='person03'/></a></li>
                  <li><a href='#/'><img src={person04} alt='img' className='person04'/></a></li>
                  <li><a href='#/'><img src={person05} alt='img' className='person05'/></a></li>
                  <li><a href='#/'><img src={person06} alt='img' className='person06'/></a></li>
                </ul>
              </div>
            </div>
            <div className='col-lg-6'>
              <Slider {...settings}>
                      {boxesData.map((box, index) => (
                        <ItemTestimonial
                          key={index}
                          description={box.description}
                          doctor={box.doctor} 
                          patient={box.patient}
                        />
                        ))}
                    </Slider>
            </div>
            <div className='img-bg'>
              <img src={Motion01} alt='img' className='img01'/>
              <img src={Motion02} alt='img' className='img02'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial

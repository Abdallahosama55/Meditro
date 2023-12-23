import {React,useState,useEffect} from 'react'
import Slider from 'react-slick';
import { useSelector, useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { fetchData, fetchDataStart, fetchDataSuccess, fetchDataFailure } from '../../../Redux/ReduxTestimonials/apiSlice';
import { PropagateLoader } from "react-spinners";

import 'slick-carousel/slick/slick.css';
// Import Swiper React components
// import required modules
import { EffectCards } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'slick-carousel/slick/slick-theme.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules



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
import { Container } from 'react-bootstrap';
import { Avatar } from '@mui/material';





const Testimonial = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  const data = useSelector((state) => state.apitestimonials.data);

      const loading = useSelector((state) => state.apitestimonials.loading);
      const error = useSelector((state) => state.apitestimonials.error);
      const dispatch = useDispatch();
    
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


  return (
    <>
    {loading ? (
      <div className=" d-flex justify-content-center align-items-center">
      <PropagateLoader color="#36d7b7"></PropagateLoader>
      
      
      </div>
     ) : error ? (
       ``
     ) : data.length === 0 ? (
       ''
     ) : (
      <div className='testimonial'>
        <div className='container'>
          <div className='titlemain'>
              <TitleBasic title = 'Testimonial'/>
              <h2>See What Are The Customers Saying About us</h2>
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
            <div className='col-lg-5  col-sm-12'>
              <div className=' row justify-content-center align-items-center'>

            <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwipe w-75  ms-md-5 mt-5"
          >
          {data.data?.map((item, index) => (
            <SwiperSlide  key={index}>
            <Container>
              <div className='d-flex flex-column align-items-center justify-content-center  py-2' >
                <div className='text-center '>
        <Avatar src={item.Avatar}  />
      </div>
                <div className=' text-center'>
                  <h4>{item.name}</h4>
                </div>
                <div className=' text-center'>
                  <p className='text-white'>{item.content}</p>
                </div>
              </div>
            </Container>
          </SwiperSlide>
          
          ))}
          </Swiper>
          </div>
            </div>
            <Container>
            
         
            
            
            </Container>
            <div className='img-bg'>
              <img src={Motion01} alt='img' className='img01'/>
              <img src={Motion02} alt='img' className='img02'/>
            </div>
          </div>
        </div>
      </div>
      )}
    
    </>
  )
}

export default Testimonial

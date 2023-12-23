import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Link } from "react-router-dom";
import { useEffect } from "react";
import'./BannerAds.css'
import { useSelector, useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { fetchData, fetchDataStart, fetchDataSuccess, fetchDataFailure } from '../../../Redux/ReduxADS/apiSlice';
import { PropagateLoader } from "react-spinners";
import { BsTag } from "react-icons/bs";
import img_icon from '../../../assets/Images/ads.svg';

import bgimg02 from '../../../assets/Images/bg02.png'
import bgimg03 from '../../../assets/Images/bg03.png'
import bgimg04 from '../../../assets/Images/bg04.png'
import Slider from 'react-slick';
function BannerAds() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
       
        prevArrow: null, // Hide the previous arrow
        nextArrow: null, // Hide the next arrow
      };
      
      const data = useSelector((state) => state.apiAds.data);
    
      const loading = useSelector((state) => state.apiAds.loading);
      const error = useSelector((state) => state.apiAds.error);
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

    <div>
    {loading ? (
        <div className=" d-flex justify-content-center align-items-center">
        <PropagateLoader color="#36d7b7"></PropagateLoader>
        
        
        </div>
       ) : error ? (
         ``
       ) : data.length === 0 ? (
         ''
       ) : (

        <div className='header'>
        <div className='container'>
          <div className='row'>
          <div>
    <Slider {...settings}>
    {data.data?.map((item, index) => (
    <div className='background-container' key={index}>
  
    <img src={item.image} alt='Background Image' className='background-image' />
    <div className=''>
    <div className='row justify-content-center'>
    <div className='col-7 banner-text  '> 
    <h1>{item.title}</h1>
    <p>{item.description}</p>
    </div>
    <div className='col-3'>  

    <div className="container mt-5">



    <div className="d-flex justify-content-center">
        <div >
            <div className="content badge bg-danger  rounded-circle p-4">
            <BsTag  size={25}/> 
            <br/>
          <span className=' fw-semibold fs-1'>  {item.discount} </span>
            </div>
        </div>
    </div>

</div>



  
  
  </div>
   
    </div>
     
    </div>
  </div>

  ))}
  
     
  
 



     
   
    </Slider>
    </div>
    </div>
    <div className='img-bg'>
      <img src={bgimg02} alt='img' className='img02'/>
      <img src={bgimg03} alt='img' className='img03'/>
      <img src={bgimg04} alt='img' className='img04'/>
    </div>
  </div>
</div>
       )}
       
    
    </div>
  )
}

export default BannerAds
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, fetchDataStart, fetchDataSuccess, fetchDataFailure } from '../../../Redux/ReduxProduct/apiSlice';
import { AiOutlineArrowRight } from "react-icons/ai";
import { PropagateLoader } from "react-spinners";
import './Services.css'
import ItemOne from '../../../Components/ItemOne/ItemOne';

import TitleBasic from '../../../Components/TitleBasic/TitleBasic';

import Motion01 from '../../../assets/Images/motion03.png'
import Motion02 from '../../../assets/Images/motion01.png'
import { unwrapResult } from '@reduxjs/toolkit';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = () => {
  const truncate = (description, words) => {
    const wordArray = description.split(' ');
    if (wordArray.length <= words) {
      return description;
    }
    const truncatedArray = wordArray.slice(0, words);
    return truncatedArray.join(' ');
  };
  

  const settings = {
    infinite: true,
  
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
     responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1.1,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1.1,
              slidesToScroll: 1
            }
          }
        ]
  };



  const data = useSelector((state) => state.apiProduct.data);

  const loading = useSelector((state) => state.apiProduct.loading);
  const error = useSelector((state) => state.apiProduct.error);
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
       ` `
     ) : data.length === 0 ? (
       ' '
     ) : (
      <div className='Services'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-12'>
              <div className='box info'>
                <TitleBasic title='Products'/>
                <h2>We Cover A Big Variety Of Medical Products</h2>
                <p>We provide the special tips and advice’s of heath care treatment and high level of best.</p>
                <button className='btn'>All Product</button>
              </div>
            </div>
            <div className='col-lg-12'>
            <div className="slider-container">
            <Slider {...settings}>
              {data.data?.map((item, index) => (
                <ItemOne
                  key={index}
                  icon={item.main_image}
                  title={truncate(item.name,3)}
                  description={truncate(item.description, 20)} 
                  id={item.id}
                />
              ))}
            </Slider>
          </div>
            </div>
            
            <Container className="mt-5">
      
            <Link to="AllProduct" className=" mt-5 py-5">
            
            <h5 className=''>  View more Products   <AiOutlineArrowRight size={25}/></h5>
          
            
            
         </Link>
            </Container>
            <div className='img-bg'>
              <img src={Motion01} alt='img' className='img01'/>
              <img src={Motion02} alt='img' className='img02'/>
            </div>
          </div>
        </div>
      </div>
    )}
    </div>
  )
}

export default Services

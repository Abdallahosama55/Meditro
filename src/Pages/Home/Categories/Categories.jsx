import Slider from "react-slick";
import React, { Fragment } from 'react'
import './Categories.css'
import { unwrapResult } from '@reduxjs/toolkit';
import { Link } from "react-router-dom";
import { useEffect } from "react";

import { useSelector, useDispatch } from 'react-redux';
import { fetchData, fetchDataStart, fetchDataSuccess, fetchDataFailure } from '../../../Redux/ReduxCategorey/apiSlice';
import { AiOutlineArrowRight } from "react-icons/ai";
import { PropagateLoader } from "react-spinners";
import { Container } from "react-bootstrap";

function Categories() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
       
        autoplaySpeed: 1000,
        dots: true,
       
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
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
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };



      const data = useSelector((state) => state.apiCatgorey.data);

      const loading = useSelector((state) => state.apiCatgorey.loading);
      const error = useSelector((state) => state.apiCatgorey.error);
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
            <div className="d-flex justify-content-center align-items-center">
              <PropagateLoader color="#36d7b7"></PropagateLoader>
            </div>
          ) : error ? (
            null  // Return null in case of an error
          ) : data.length === 0 ? (
            null  // Return null when data length is 0
          ) : (
            <div>
              <h2>{data.name}</h2>
              <h2>Categories</h2>
              <Slider {...settings}>
                {data.data?.map((item, index) => (
                  <div key={index}>
                    <img src={item.image} className="w-100" alt={`Image ${index}`} />
                    <h4 className="text-center">{item.name}</h4>
                  </div>
                ))}
              </Slider>
            </div>
          )}
          
          {/* Only render the "View more" link if there is no error and data length is not 0 */}
          {!error && data.length !== 0 && (
            <Container className="mt-5">
              <Link to="category" className="mt-5 py-3">
                <h5>View more Categories <AiOutlineArrowRight size={25}/></h5>
              </Link>
            </Container>
          )}
        </div>
      );
          }

export default Categories
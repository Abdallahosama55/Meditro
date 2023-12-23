import { Link } from "react-router-dom";
import { useEffect } from "react";

import { useSelector, useDispatch } from 'react-redux';
import { fetchData, fetchDataStart, fetchDataSuccess, fetchDataFailure } from '../../../Redux/ReduxPriceplan/apiSlice';

import { PropagateLoader } from "react-spinners";
import { Container } from "react-bootstrap";


import './works.css'
import WorksItem from './WorksItem'
import TitleBasic from '../../../Components/TitleBasic/TitleBasic'
import Slider from "react-slick";

import {AiOutlineArrowRight} from 'react-icons/ai';

import Motion01 from '../../../assets/Images/bg03.png'
import Motion02 from '../../../assets/Images/motion02.png'


import { unwrapResult } from '@reduxjs/toolkit';

const works = () => {


  const data = useSelector((state) => state.apiprice_plans.data);




  const loading = useSelector((state) => state.apiprice_plans.loading);
  const error = useSelector((state) => state.apiprice_plans.error);
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

      <div className='works'>
        <div className='container'>
          <div className='main-title'>
            <TitleBasic title='Get Price'/>
            <h2>Get Our Price Plan</h2>
          </div>
          <div className='row'>
          {data.data?.map((item, index) => (
            ( index < 3) ? (
              <WorksItem
                key={index}
                number={index + 1}
                title={index}
                description={item.description}
              />
            ) : null
          ))}
          

          </div>
          
          
          <div className='img-bg'>
              <img src={Motion01} alt='img' className='img01'/>
              <img src={Motion02} alt='img' className='img02'/>
            </div>
        </div>
      </div>

      )}


{/* Only render the "View more" link if there is no error and data length is not 0 */}
{!error && data.length !== 0 && (
  <Container className="">
    <Link to="category" className=" ">
      <h5>View more Price plan <AiOutlineArrowRight size={25}/></h5>
    </Link>
  </Container>
)}
</div>
);
}
export default works

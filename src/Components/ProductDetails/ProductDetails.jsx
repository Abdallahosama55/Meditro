import React, { Fragment, useEffect } from 'react';
import Navbars from '../Nav/Navbar';
import Footer from '../Footer/Footer';
import { Container, Figure } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Slider from "react-slick";
import { useDispatch, useSelector } from 'react-redux';
import { PropagateLoader } from 'react-spinners';
import {
  fetchData,
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
} from '../../Redux/ReduxProductDetails/apiSlice';


function ProductDetails() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.apiProductDetails.data);
  const loading = useSelector((state) => state.apiProductDetails.loading);
  const error = useSelector((state) => state.apiProductDetails.error);

  useEffect(() => {
    // Dispatch the fetchData action with the 'id' parameter
    dispatch(fetchData(id));
  }, [dispatch, id]);

  return (
    <Fragment>
      <Navbars />
      <Container>
        {loading && (
          <div className="d-flex justify-content-center align-items-center">
            <PropagateLoader color="#36d7b7" />
          </div>
        )}
        {error && <p>Error: {error.message}</p>}
        {data && (
          <div className="container py-5 shadow mt-5 mb-5">
            <div className="row">
              <div className="col-md-3 col-sm-12">
              <Slider {...settings}>
              <div>
                <Figure className='w-100' >
                <img src={data.data?.main_image}  className=' w-100'/>
                </Figure>
              </div>

                   {data.data?.other_images.map((image, index) => (
                    <div key={index}>
                    <Figure className=' w-100'>
                    
                    <img src={image.url} alt={`Image ${index + 1}`} className=' w-100' />
                    
                    </Figure>
                      
                    </div>
                  ))}
              
              
            </Slider>
              </div>
              <div className="col-md-9 col-sm-12 mt-5">
                <h2> {data.data?.name}</h2>
                <p className="text-muted p-2">Product Description: {data.data?.description}</p>
                <p className=' text-end me-5'>{data.data?.price} EGP</p>
                
              </div>
            </div>
          </div>
        )}
      </Container>
      <Footer />
    </Fragment>
  );
}

export default ProductDetails;

import React , { useEffect, useState ,useRef} from 'react'
import './Doctor.css'

import TitleBasic from '../TitleBasic/TitleBasic'
import ItemDoctor from './ItemDoctor/ItemDoctor'

import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../Redux/ReduxOurteam/apiSlice'; // Import your fetchData action
import Navbars from '../../Components/Nav/Navbar';
import Footer from '../../Components/Footer/Footer';

import {PropagateLoader} from 'react-spinners'
import Banner from '../../Components/Banner/Banner';
import { Container } from 'react-bootstrap'


const Doctor = () => {
  const dispatch = useDispatch();
  const headerRef = useRef(null); // Reference to the Meet with Our Team header

  const { data, loading, error } = useSelector((state) => state.apiourteam); // Replace 'apiCatgorey' with your slice name
  const [page, setPage] = useState(1); // Initialize the current page
  const [per_page, setperPage] = useState(6); // Initialize the current page

  // Function to handle page change
  const handlePageChange = (newPage) => {
    setPage(newPage);
    
    headerRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Fetch data based on the current page
    const params = {
      page: page.toString(), // Convert page to a string
      per_page:per_page
      // Other optional parameters
    };
    dispatch(fetchData(params));
  }, [dispatch, page,per_page]);

  if (loading) {
    // Handle loading state
    return <div>
    
    <div className=' d-flex justify-content-center align-items-center mt-5 py-5'>
    
    
    <PropagateLoader color="#36d7b7"></PropagateLoader>
    
    
    </div>
    
    
    
    </div>;
  }

  if (error) {
    // Handle error state
    return <div>{" "}</div>;
  }
if(data.length === 0){

  return <div>{" "}</div>;
}
  // Render your data

 
  
  return (
    <>
      <div className='ourdoctor'>
        <div className='container' ref={headerRef}>
        
          <div className='ourdomaintitle p-0' >
            <TitleBasic title='Our Team'/>
            <h2> Meet with Our Team</h2>
          </div>
          <Container className='p-0'>
          <div className='row p-5'>
        
            {data.data?.map((item, index) => (
                <div className='col-lg-4 col-md-6'>
                  <ItemDoctor
                    key={index}
                    image={item.teamMemberPhoto} 
                    name={item.name}
                    job={item.section.title}
                    iconFacebook={item.facebook}
                    iconLinkenin={item.linkedin}
                    iconInstagram={item.instagram}
                    iconTwitter={item.twitter}
                  />
                </div>
                    ))}
          </div>
          </Container>
        </div>
        
      {/* Pagination controls */}
      <div className=' d-flex justify-content-center align-items-center mt-3 py-5 '>
      <button
        onClick={() => handlePageChange(1)}
        disabled={page === 1}
        className='btn-pagination btn me-1  rounded-2'
      >
        First
      </button>
      <button
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
        className=' btn-pagination btn'
      >
        Previous 
      </button>
      <span className='m-2'>Page {page}</span>
      <button
        onClick={() => handlePageChange(page + 1)}
        disabled={page === data.meta?.last_page}
        className='btn-pagination btn me-2'
      >
        Next
      </button>
      <button
      className='btn-pagination btn me-2'
        onClick={() => handlePageChange(data.meta.last_page)}
        disabled={page === data.meta?.last_page}
      >
        Last
      </button>
    </div>
      </div> 
    </>
  )
}

export default Doctor

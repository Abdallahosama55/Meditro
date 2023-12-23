import React, { useEffect, useState ,useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../Redux/ReduxCategorey/apiSlice'; // Import your fetchData action
import Navbars from '../../Components/Nav/Navbar';
import Footer from '../../Components/Footer/Footer';
import './Categorey.css'
import {PropagateLoader} from 'react-spinners'
import Banner from '../../Components/Banner/Banner';
function MyComponent() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.apiCatgorey); // Replace 'apiCatgorey' with your slice name
  const [page, setPage] = useState(1); // Initialize the current page
  const [per_page, setperPage] = useState(12); // Initialize the current page
  const headerRef = useRef(null); // Reference to the Meet with Our Team header

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
      // Other optional parameters
      per_page:per_page
    };
    dispatch(fetchData(params));
  }, [dispatch, page,per_page]);

  if (loading) {
    // Handle loading state
    return <div>
    
    <div className=' d-flex justify-content-center align-items-center mt-5 py-5' >
    
    
    <PropagateLoader color="#36d7b7"></PropagateLoader>
    
    
    </div>
    
    
    
    </div>;
  }


  
  // Render your data
  return (
    <div  ref={headerRef}>
    
      <Navbars />
      
        <div className='catgorey-data'>
          <Banner title="Categories"/>
        </div>
     
      {data.data && data.data.length > 0 && (
        <div>
      <div className='container mt-5'>
        <div className='row justify-content-center align-items-center'>
          {data.data?.map((item, idx) => (
            <div className='col-md-3 col-sm-3 col-6' key={idx}>
              <div className='card p-4 rounded shadow shadow-lg'>
                <img src={item.image} alt={`Category ${item.name}`} />
                <br />
                <hr />
                <h4 className='text-center text-card py-3'>{item.name}</h4>
              </div>
            </div>
          ))}
        </div>
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
      )}
      <Footer />
    </div>
  );
}

export default MyComponent;

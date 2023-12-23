import React,{useRef,useState,useEffect} from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './News.css'
import TitleBasic from '../../../Components/TitleBasic/TitleBasic'
import ItemNews from './ItemNews';


import img01 from '../../../assets/Images/about04.jpg'
import img02 from '../../../assets/Images/news02.jpg'
import img03 from '../../../assets/Images/news01.jpg'
import persong01 from '../../../assets/Images/person01.jfif'
import persong02 from '../../../assets/Images/person02.jfif'
import persong03 from '../../../assets/Images/person03.jfif'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../../Redux/ReduxPartners/apiSlice'


import {PropagateLoader} from 'react-spinners'

const News = () => {
  const dispatch = useDispatch();
  const headerRef = useRef(null); // Reference to the Meet with Our Team header

  const { data, loading, error } = useSelector((state) => state.apipartners); // Replace 'apiCatgorey' with your slice name
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

  const settings = {
    infinite: true,
    slidesToShow: 3.1,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2, 
                slidesToScroll: 1, 
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1, 
                slidesToScroll: 1, 
            },
        },
    ],
};
  

if (loading) {
  // Handle loading state
  return (
    <div className='d-flex justify-content-center align-items-center mt-5 py-5'>
      <PropagateLoader color="#36d7b7"></PropagateLoader>
    </div>
  );
}

if (error || data.length === 0) {
 
  return null;
}

  return (
    <>
        <div className='news mb-3 pb-3'>
        <div className='container'>
          <div className='titlemain p-0'>
              <TitleBasic title = 'Latest News'/>
              <h2>Our Latest partners</h2>
          </div>
          <div className='row  p-0'>
                <Slider {...settings}>
                  {data.data.map((item, index) => (
                    <ItemNews
                      key={index}
                      image={item.logo}
                      description={item.description}
                      date={item.date}
                      title={item.name}
                      link={item.link}
                    />
                    ))}
                </Slider>
            {/* <div className='img-bg'>
              <img src={Motion01} alt='img' className='img01'/>
              <img src={Motion02} alt='img' className='img02'/>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default News

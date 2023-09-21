  import React, { useEffect, useState } from 'react'
  import './ScrollToTop.css'
  import { animateScroll as scroll } from 'react-scroll';

  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faChevronUp } from '@fortawesome/free-solid-svg-icons'


  const ScrollToTop  = () => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const scrollToTop = () => {
      scroll.scrollToTop();
    };
  
    useEffect(() => {
      window.addEventListener("scroll", toggleVisibility);
      return () => {
        window.removeEventListener("scroll", toggleVisibility);
      };
    }, []);

    return (
      <>
        <div className={`scroll-button ${isVisible ? 'visible' : ''}`}>
          <button className='btnscroll' onClick={scrollToTop}><FontAwesomeIcon icon={faChevronUp} /></button>
        </div>
      </>
    )
  }

  export default ScrollToTop 

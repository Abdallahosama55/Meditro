import React from 'react'
import './Banner.css'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse} from '@fortawesome/free-solid-svg-icons'

import Motion01 from '../../assets/Images/motion01.png'
import Motion02 from '../../assets/Images/motion02.png'

const Banner = (props) => {
  return (
    <>
      <div className='banner'>
        <div className='container'>
          <div className='cous-banner'>
            <h2>{props.title}</h2>
            <div className='links'>
              <Link to="/"><FontAwesomeIcon icon={faHouse} /> </Link>
              <p>Home / {props.title}</p>
            </div>
          </div>
          <div className='img-bg'>
              <img src={Motion01} alt='img' className='img01'/>
              <img src={Motion02} alt='img' className='img02'/>
            </div>
        </div>
      </div>
    </>
  )
}

export default Banner

import React from 'react'
import './ItemNews.css'

import MainButton from '../../../Components/MainButton/MainButton'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'


const ItemNews = (props) => {
  return (
    <>
      <div className='col-lg-12'>
        <div className='box'>
          <div className='itemnews'>
            <img src={props.image} alt='img' className='img-fluid image01'/>
            <div className='namedate'>
              <img src={props.imgperson} alt='img' className='img-fluid imgperson'/>
              <h6>{props.nameperson}</h6>
              <FontAwesomeIcon icon={faCalendarDays} />
              <span className='date'>{props.date}</span>
            </div>
            <h5 className='title'>{props.title}</h5>
            <MainButton buttonText="Read More"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemNews

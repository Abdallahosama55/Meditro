import React from 'react'
import './ItemNews.css'

import MainButton from '../../../Components/MainButton/MainButton'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const ItemNews = (props) => {
  return (
    <>
      <div className='col-lg-11 '>
        <div className='box'>
          <div className='itemnews'>
            <img src={props.image} alt='img' className='img-fluid image01 w-100 p-3'/>
            <h5 className='title'>{props.title}</h5>
            <p className=' text-muted'>{props.description}</p>
        
            <a href={props.link}>
            <MainButton buttonText="Read More"/>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemNews

import React from 'react'
import './ItemTestimonial.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'


const ItemTestimonial = (props) => {
  return (
    <>
      <div className='infoitem'>
          <p>{props.description}</p>
          <h3>{props.doctor}</h3>
          <h4>{props.patient}</h4>
          <FontAwesomeIcon icon={faQuoteLeft} className='faQuoteLeft'/>
          <FontAwesomeIcon icon={faQuoteRight} className='faQuoteRight'/>
      </div>
    </>
  )
}

export default ItemTestimonial

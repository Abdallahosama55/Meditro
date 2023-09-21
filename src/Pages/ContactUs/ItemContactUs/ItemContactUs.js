import React from 'react'
import './ItemContactUs.css'

const ItemContactUs = (props) => {
  return (
    <>
      <div className='col-lg-4 col-md-6 col-sm-6'>
        <div className='box'>
          <img alt='img' className='img-fluid' src={props.img}/>
          <h2>{props.title}</h2>
          <p>{props.info01}</p>
          <p>{props.info02}</p>
        </div>
      </div>
    </>
  )
}

export default ItemContactUs

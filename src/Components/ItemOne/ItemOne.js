import React from 'react'
import './ItemOne.css'

const ItemOne = (props) => {
  return (
    <>
        <div className='boxitem'>
          <span>{props.icon}</span>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <button className='btn'>View More</button>
        </div>
    </>
  )
}

export default ItemOne

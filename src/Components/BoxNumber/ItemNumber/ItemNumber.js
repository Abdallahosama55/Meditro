import React from 'react'
import './ItemNumber.css'


const ItemNumber = (props) => {
  return (
    <>
        <div className='boxitemnumber'>
          <span>{props.number}</span>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
    </>
  )
}

export default ItemNumber

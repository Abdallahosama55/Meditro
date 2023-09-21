import React from 'react'
import './ItemDoctor.css'
import Social from '../../../Components/Social/Social'


const ItemDoctor = (props) => {
  return (
    <>
      <div className='itemdoctor'>
        <div className='imgdoctor'>
          <img src={props.image} alt='img-doctor' className='img-fluid'/>
        </div>
        <h2>{props.name}</h2>
        <h5>{props.job}</h5>
        <Social />
      </div>
    </>
  )
}

export default ItemDoctor

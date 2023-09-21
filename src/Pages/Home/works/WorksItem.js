import React from 'react'
import './WorksItem.css'
import MainButton from '../../../Components/MainButton/MainButton'


const WorksItem = (props) => {
  return (
    <>
      <div className='col-lg-4 col-md-6 col-sm-12'>
        <div className='box'>
          <h2 className='number'>{props.number}</h2>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <MainButton buttonText="View More"/>
        </div>
      </div>  
    </>
  )
}

export default WorksItem

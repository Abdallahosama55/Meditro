import React from 'react'
import './MainButton.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'


const MainButton = (props) => {
  return (
    <>
      <button className='mainBtn'>
        {props.buttonText}
        <span className='span-arr'>
          <FontAwesomeIcon icon={faAngleRight} />
        </span>
      </button>
    </>
  )
}

export default MainButton

import React,{useRef,useEffect} from 'react'
import './ItemOne.css'
import { Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const ItemOne = (props) => {

 
  return (
    
    <>
    
        <div className='boxitem'>

        <Container>
        <div className='row'>
        <img src={props.icon } className='w-75'></img>
        </div>
        <div className='row p-0'> 
        
         <h3 className='p-0'>{props.title}</h3>
         <p className=' text-dark p-0'>{props.description}</p>
      </div>
       
          <div className=''>
          <button className='btn' >
          <Link to={`/product/${props.id}`} >
              View More
            </Link>
          
       </button>
        </div>
        </Container>
          
      
        </div>
        
    </>
  )
}

export default ItemOne

import React from 'react'
import './Doctor.css'


import img01 from '../../assets/Images/person01.jfif'
import img02 from '../../assets/Images/person02.jfif'
import img03 from '../../assets/Images/person03.jfif'
import TitleBasic from '../TitleBasic/TitleBasic'
import ItemDoctor from './ItemDoctor/ItemDoctor'



const Doctor = () => {

  const boxesDataDoctor = [
    {
      image: img01,
      name: 'Dr. Addition Smith',
      job: 'Dentist',
    },
    {
      image: img02,
      name: 'Dr. Mahfuz Riad',
      job: 'Chiropractor',
    },
    {
      image: img03,
      name: 'Dr. David Benjamin',
      job: 'Cardiologist',
    },
  ];
  
  return (
    <>
      <div className='ourdoctor'>
        <div className='container'>
          <div className='ourdomaintitle'>
            <TitleBasic title='Our Doctor'/>
            <h2>Meet Best Doctors</h2>
          </div>
          <div className='row'>
            {boxesDataDoctor.map((box, index) => (
                <div className='col-lg-4 col-md-6'>
                  <ItemDoctor
                    key={index}
                    image={box.image} 
                    name={box.name}
                    job={box.job}
                  />
                </div>
                    ))}
          </div>
        </div>
      </div> 
    </>
  )
}

export default Doctor

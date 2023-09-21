import React from 'react'
import './BoxNumber.css'
import ItemNumber from './ItemNumber/ItemNumber';


const BoxNumber = () => {

  const boxesDataNumber = [
    {
      number: 120,
      title: 'Diagnostics',
      description: 'Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.',
    },
    {
      number: 500,
      title: 'Awards',
      description: 'Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.',
    },
    {
      number: 700,
      title: 'Doctors',
      description: 'Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.',
    },
    {
      number: 800,
      title: 'Satisfied Client',
      description: 'Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.',
    },
  ];

  return (
    <>
      <div className='sectwo'>
        <div className='container'>
          <div className='row'>
            {boxesDataNumber.map((box, index) => (
                <div className='col-lg-3 col-md-6'>
                  <ItemNumber
                    key={index}
                    number={box.number} 
                    title={box.title}
                    description={box.description}
                  />
                </div>
                    ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default BoxNumber

import React from 'react'
import './works.css'
import WorksItem from './WorksItem'
import TitleBasic from '../../../Components/TitleBasic/TitleBasic'

import Motion01 from '../../../assets/Images/bg03.png'
import Motion02 from '../../../assets/Images/motion02.png'

const works = () => {

  const boxesData = [
    {
      number: '01',
      title: 'Make Appointmnet',
      description: 'It is a long established fact that a reader will be distracted by the readable content of.      ',
    },
    {
      number: '02',
      title: 'Take Treatment',
      description: 'It is a long established fact that a reader will be distracted by the readable content of.      ',
    },
    {
      number: '03',
      title: 'Registration',
      description: 'It is a long established fact that a reader will be distracted by the readable content of.      ',
    },
  ];

  return (
    <>
      <div className='works'>
        <div className='container'>
          <div className='main-title'>
            <TitleBasic title='Working Process'/>
            <h2>How we works?</h2>
          </div>
          <div className='row'>
            {boxesData.map((box, index) => (
            <WorksItem
              key={index}
              number={box.number} 
              title={box.title}
              description={box.description}
            />
          ))}
          </div>
          <div className='img-bg'>
              <img src={Motion01} alt='img' className='img01'/>
              <img src={Motion02} alt='img' className='img02'/>
            </div>
        </div>
      </div>
    </>
  )
}

export default works

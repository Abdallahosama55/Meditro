import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './News.css'
import TitleBasic from '../../../Components/TitleBasic/TitleBasic'
import ItemNews from './ItemNews';


import img01 from '../../../assets/Images/about04.jpg'
import img02 from '../../../assets/Images/news02.jpg'
import img03 from '../../../assets/Images/news01.jpg'
import persong01 from '../../../assets/Images/person01.jfif'
import persong02 from '../../../assets/Images/person02.jfif'
import persong03 from '../../../assets/Images/person03.jfif'

const News = () => {

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2, 
                slidesToScroll: 1, 
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1, 
                slidesToScroll: 1, 
            },
        },
    ],
};
  
    const boxesData = [
      {
        image: img01,
        imgperson: persong01,
        nameperson: 'Joh Dev',
        date: '21 July 2021',
        title: 'Can you get a diflucan prescription online?',
      },
      {
        image: img02,
        imgperson: persong02,
        nameperson: 'Red Has',
        date: '25 July 2021',
        title: 'In this hospital there are special surgeon',
      },
      {
        image: img03,
        imgperson: persong03,
        nameperson: 'Dec Lia',
        date: '10 July 2021',
        title: 'Why Is Skin Surgeon Considered Underrated',
      },
      {
        image: img01,
        imgperson: persong01,
        nameperson: 'Joh Dev',
        date: '21 July 2021',
        title: 'Can you get a diflucan prescription online?',
      },
      {
        image: img02,
        imgperson: persong02,
        nameperson: 'Red Has',
        date: '25 July 2021',
        title: 'In this hospital there are special surgeon',
      },
      {
        image: img03,
        imgperson: persong03,
        nameperson: 'Dec Lia',
        date: '10 July 2021',
        title: 'Why Is Skin Surgeon Considered Underrated',
      },
    ];

  return (
    <>
        <div className='news'>
        <div className='container'>
          <div className='titlemain'>
              <TitleBasic title = 'Latest News'/>
              <h2>Our Latest News</h2>
          </div>
          <div className='row'>
                <Slider {...settings}>
                  {boxesData.map((box, index) => (
                    <ItemNews
                      key={index}
                      image={box.image}
                      imgperson={box.imgperson}
                      nameperson={box.nameperson}
                      date={box.date}
                      title={box.title}
                    />
                    ))}
                </Slider>
            {/* <div className='img-bg'>
              <img src={Motion01} alt='img' className='img01'/>
              <img src={Motion02} alt='img' className='img02'/>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default News

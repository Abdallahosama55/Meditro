import React from 'react'
import './Blog.css'

import Banner from '../../Components/Banner/Banner'
import ItemNews from '../Home/News/ItemNews'
import Navbar from '../../Components/Nav/Navbar'
import Footer from '../../Components/Footer/Footer'
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop '

import img01 from '../../assets/Images/about04.jpg'
import img02 from '../../assets/Images/news02.jpg'
import img03 from '../../assets/Images/news01.jpg'
import persong01 from '../../assets/Images/person01.jfif'
import persong02 from '../../assets/Images/person02.jfif'
import persong03 from '../../assets/Images/person03.jfif'

const Blog = () => {

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
      <Navbar />
      <Banner  title="Blog Grid 3"/>
      <div className='secblog'>
        <div className='container'>
          <div className='row'>
            {boxesData.map((box, index) => (
              <div className='col-lg-4 col-md-6'>
                <ItemNews
                  key={index}
                  image={box.image}
                  imgperson={box.imgperson}
                  nameperson={box.nameperson}
                  date={box.date}
                  title={box.title}
                />     
              </div>
                  ))}
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  )
}
export default Blog

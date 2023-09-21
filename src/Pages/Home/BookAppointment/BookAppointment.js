import React from 'react'
import './BookAppointment.css'
import img from '../../../assets/Images/imgappointment.png'
import imgperson from '../../../assets/Images/imgappointmentperson.png'
import img01 from '../../../assets/Images/imgappointment01.png'
import img02 from '../../../assets/Images/imgappointment02.png'
import img03 from '../../../assets/Images/imgappointment03.png'

const BookAppointment = () => {
  return (
    <>
      <div className='appointment'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5'>
              <div className='box boxform'>
                <h2>Book Appointment</h2>
                <form>
                  <select id="selectOption" name="option">
                    <option value="option1">Selecty Department</option>
                    <option value="option2">One</option>
                    <option value="option3">Two</option>
                    <option value="option4">Three</option>
                  </select>
                  <select id="selectOption" name="option">
                    <option value="option1">Select Doctor</option>
                    <option value="option2">One</option>
                    <option value="option3">Two</option>
                    <option value="option4">Three</option>
                  </select>
                  <input type="text" placeholder='Your Name' required/>
                  <input type="number" placeholder='Phone Numbers' required/>
                  <input type="date" required/>
                  <button className='btn btnsubmit'>Appointment Now</button>
                </form>
              </div>
            </div>
            <div className='col-lg-6'>
              <img src={img} alt='img' className='img-fluid'/>
              <div className='img-bg'>
                <img src={imgperson} alt='img' className='img-fluid imgperson'/>
                <img src={img01} alt='img' className='img01'/>
                <img src={img02} alt='img' className='img02'/>
                <img src={img03} alt='img' className='img03'/>
              </div>
            </div>

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

export default BookAppointment

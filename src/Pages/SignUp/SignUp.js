import React from 'react'
import '../Login/LoginSignup.css'

import { Link } from 'react-router-dom'
import Logo from '../../assets/Images/logo.png'

const SignUp = () => {
  return (
    <>
        <div className='loginsignup d-flex align-items-center justify-content-center'>
        <div className='boxlog p-4'>
          <Link to='/'><img src={Logo} alt='logo' className='img-fluid logologin'/></Link>
          <form className="mb-3">
            <input type='text' placeholder='Name' className="form-control" required />
            <input type='email' placeholder='ُEmail' className="form-control" required />
            <input type='text' placeholder='Username' className="form-control" required />
            <input type='password' placeholder='Password' className="form-control mt-2" required />
            <button type='submit' className="btn btn-primary btnsubmit">Register Now</button>
          </form>
          <p className="mt-4">Already have an account?</p>
          <Link to='/login'><button className="btn btn-secondary btnregister">Login</button></Link>
        </div>
      </div>
    </>
  )
}

export default SignUp

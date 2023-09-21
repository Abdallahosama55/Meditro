import React from 'react'
import './LoginSignup.css'
import { Link } from 'react-router-dom'

import Logo from '../../assets/Images/logo.png'

const Login = () => {
  return (
    <>
      <div className='loginsignup d-flex align-items-center justify-content-center'>
        <div className='boxlog p-4'>
          <Link to='/'><img src={Logo} alt='logo' className='img-fluid logologin'/></Link>
          <form className="mb-3">
            <input type='text' placeholder='Username' className="form-control" required />
            <input type='password' placeholder='Password' className="form-control mt-2" required />
            <button type='submit' className="btn btn-primary btnsubmit">Login</button>
          </form>
          <Link to='#'>Forgot Password</Link>
          <p className="mt-4">Don't have an account?</p>
          <Link to='/signup'><button className="btn btn-secondary btnregister">Register</button></Link>
        </div>
      </div>
    </>
  )
}

export default Login

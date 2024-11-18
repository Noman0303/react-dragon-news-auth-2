import logo from '../../../assets/logo.png'
import React from 'react'
import moment from 'moment';

const Header = () => {
  return (
    <div className='text-center justify-center'>
        <img className='mx-auto mt-12' src={logo} alt="" />
        <p className='mt-5'>Journalism Without Fear or Favour</p>
        <p className='text-xl mt-3 '>{moment().format("dddd, MMMM D, YYYY")}</p>
       
    </div>
  )
}

export default Header
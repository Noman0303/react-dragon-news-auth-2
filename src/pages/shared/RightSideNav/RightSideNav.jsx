import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiInstagram } from "react-icons/si";
import swimming from '../../../assets/qZone1.png'
import playground from "../../../assets/qZone3.png"
import classroom from "../../../assets/qZone2.png"

const RightSideNav = () => {
  return (
    <div >
      <div className='p-4'>
        <h2 className="text-2xl font-semibold">Login With</h2>
        <button className="btn text-blue-400 w-full bg-transparent border border-blue-400 mt-5 text-sm">
        <FaGoogle />
          Login with Google
        </button>
        <button className="btn border-gray-600 text-gray-600 w-full bg-transparent border  mt-5 text-sm">
        <FaGithub />
          Login with Github
        </button>
      </div>
      <div className='p-4 mt-3'>
        <h2 className="text-2xl font-semibold">Find Us On</h2>
        <div className='mt-5 rounded-lg border'>
          <a className='flex p-4 text-lg items-center border rounded-t-lg' href=""> <span className='text-blue-800 mr-3'><FaFacebook className='w-7 h-7' /></span>Facebook</a>
          <a className='flex p-4 text-lg items-center border ' href=""> <span className='text-blue-400 mr-3'><AiFillTwitterCircle className='w-7 h-7' /></span>Twitter</a>
          <a className='flex p-4 text-lg items-center border rounded-b-lg' href=""> <span className='text-red-600 mr-3'><SiInstagram className='w-7 h-7' /></span>Instagram</a>
        </div>
      </div>
      <div className='p-4 bg-[#F3F3F3] mt-5'>
        <h2 className="text-2xl font-semibold">Q-Zone</h2>
        <div className='mt-5 '>
          <img className='mt-5' src={swimming} alt="" />
          <img className='mt-5' src={playground} alt="" />
          <img className='mt-5' src={classroom} alt="" />
        </div>
      </div>
    </div>
  )
}

export default RightSideNav
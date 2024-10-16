import React from 'react'
import { assets } from '../assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center justify-between px-[4%] py-2'>
        <img src={assets.logo} className='w-[max(10%,80px)]' alt="Admin panel Logo " />
        <button className='bg-gray-600 text-white px-3 py-2 sm:px-7 sm:py-2  rounded-full sm:text-sm  cursor-pointer' onClick={()=>setToken("")}>Logout</button>
      
    </div>
  )
}

export default Navbar

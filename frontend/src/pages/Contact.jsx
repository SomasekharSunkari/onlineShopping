import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import Subscription from '../components/Subscription'

const Contact = () => {
  return (
    <div>
      <div className='text-3xl text-center border-t pt-10'>
        <Title heading1={"CONTACT"} heading2={"US"}/>

      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>34343 Texas Station <br />Suite 350,Washington,USA</p>
          <p className='text-gray-500'>Tel: (450) 343-3433 <br /> Email:forever@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600' >Carreres at forever</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black  px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 '>Explore Jobs</button>


        </div>
        
      </div>
      <Subscription/>
    </div>
  )
}

export default Contact

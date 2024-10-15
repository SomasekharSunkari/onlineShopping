import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import Title from '../components/Title'
import Subscription from '../components/Subscription'

const About = () => {
  return (
    <div>
      <div className='text-3xl text-center pt-8 border-t'>
        <Title heading1={"ABOUT"} heading2={"US"} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="About US Image " />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas accusantium iste voluptates perspiciatis eum ea minus, cum ab commodi consequuntur officia? Ipsum temporibus, minus et dignissimos reprehenderit adipisci blanditiis quisquam saepe, eligendi sit, harum aspernatur amet voluptate libero rem vitae.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quod nihil, at, quia quasi officiis adipisci, saepe illum modi necessitatibus voluptatum tenetur rerum totam cupiditate porro dolorem. Cum dolorum error reiciendis temporibus mollitia. Cupiditate asperiores quisquam dolores deserunt doloribus temporibus aliquid totam corrupti tenetur perferendis nesciunt, est suscipit eos facere?</p>
          <b className='text-gray-800'>Our Misson</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit et, iure ducimus tempore reprehenderit voluptas provident eius eum totam ea deleniti neque quos recusandae, doloremque temporibus similique architecto beatae asperiores.</p>
        </div>
      </div>
      <div className='text-3xl py-4 text-center'>
        <Title heading1={"WHY"} heading2={"CHOOSE US"} />

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border  px-10 md:px-16 py-8 flex flex-col gap-5'>
          <b>Quality Assurence </b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, dolor pariatur maxime temporibus dolore ex ipsa esse laudantium nulla a.</p>
        </div>
        <div className='border  px-10 md:px-16 py-8 flex flex-col gap-5'>
          <b>Convinence: </b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, eligendi adipisci. Laborum molestias eaque, blanditiis ipsum recusandae corporis obcaecati odit.</p>
        </div>
        <div className='border  px-10 md:px-16 py-8 flex flex-col gap-5'>
          <b>Exceptional Customer Service: </b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae porro placeat, amet soluta animi sed quo voluptatum totam tempore?</p>
        </div>
      </div>
      <Subscription/>
    </div>
  )
}

export default About

import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/frontend_assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {
  const [paymentMethode,setPaymentMethode] = useState("cod");
  const {navigate} = useContext(ShopContext)
  return (
    <div className='flex flex-col sm:flex-row sm:justify-between min-h-[80vh] '>
      <div className='flex flex-col gap-4 w-full sm:max-w-[500px] '>
        <div className='text-2xl mt-6 mb-6 '>
          <Title heading1={"DELIVERY"} heading2={"INFORMATION"} />
        </div>
        <div className='flex gap-3'>
          <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='First Name' required/>
          <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Last Name' required/>
        </div>
          <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Email' required/>
          <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Street' required/>
          <div className='flex gap-3'>
          <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='City' required/>
          <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='State'required />
        </div>
        <div className='flex gap-3'>
          <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Zipcode'required />
          <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Country' required/>
        </div>
        <input type="tel" className='border border-gray-300 rounded py-1.5 px-3.5 w-full'placeholder='Phone' required/>
      </div>
      {/* Right side */}

      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal/>

        </div>
        <div className='mt-10'>
          <div className='text-2xl mb-5'>
          <Title heading1={"PAYMENT"} heading2={"METHODE"}/>
          </div>
          <div className='flex flex-col gap-x-2 lg:flex-row'>
            <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer' onClick={()=>setPaymentMethode("stripe")}>
                  <p className={`min-w-3.5 h-3.5 rounded-full border ${ paymentMethode === "stripe" ? "bg-green-400":""}`}></p>
                  <img src={assets.stripe_logo} className='h-5 mx-4' alt="Strpie" />
            </div>
            <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer' onClick={()=>setPaymentMethode("razorpay")}>
                  <p className={`min-w-3.5 h-3.5 rounded-full border ${ paymentMethode === "razorpay" ? "bg-green-400":""}`}></p>
                  <img src={assets.razorpay_logo} className='h-5 mx-4' alt="Strpie" />
            </div>
            <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer' onClick={()=>setPaymentMethode("cod")}>
                  <p className={`min-w-3.5 h-3.5 rounded-full border ${ paymentMethode === "cod" ? "bg-green-400":""}`}></p>
                  <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>

          </div>

          <div className='w-full  text-end'>
            <button className='bg-black text-white px-16 py-3 my-6 rounded-sm' onClick={()=>navigate("/orders")}>PLACE ORDER</button>
          </div>
        </div>

      </div>

        </div>
   
  )
}

export default PlaceOrder

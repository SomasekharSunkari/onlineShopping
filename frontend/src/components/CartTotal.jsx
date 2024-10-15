import React, { useContext } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext'

const CartTotal = () => {
    const {currency,getCartAmount,deliveryFee,navigate} = useContext(ShopContext);
  return (
    <div className='w-full py-2'>
        <div className='text-3xl mb-3'>
            <Title heading1={"CART"} heading2={"TOTALS"}/>
        </div>
        <div className='flex flex-col gap-2 gap-y-4'>
            <div className='flex justify-between'>
                <p>Subtotal</p>
                <p>{currency}{getCartAmount()}</p>
            </div>
            <div className='flex justify-between '>
                <p>Shipping Free</p>
                {getCartAmount() > 0 ?<p>{currency}{deliveryFee}</p>: <p>{currency}0</p>}
            </div>
            <div className='flex justify-between font-bold text-2xl'>
                <p>Total</p>
                { getCartAmount() >0 ?<p>{currency}{deliveryFee + getCartAmount()}</p>: <p>{currency}0</p>}
            </div>
            
            
        </div>
        
      
    </div>
  )
}

export default CartTotal

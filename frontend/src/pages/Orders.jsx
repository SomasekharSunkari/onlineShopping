import React, { useContext, useEffect, useState } from 'react';
import Title from '../components/Title';
import { ShopContext } from '../context/ShopContext';

const Orders = () => {
  const { currency, products } = useContext(ShopContext);
  const [pro, setPro] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (products.length) {
      setPro(products.slice(1, 4));
      setLoading(false);
    }
  }, [products]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className='text-2xl mt-6'>
        <Title heading1="MY" heading2="ORDERS" />
      </div>
      <div className='w-full flex flex-col mt-4'>
        {pro.map((item, index) => (
          <div
            className='flex flex-col md:flex-row md:justify-between gap-4 md:items-center border-t border-b py-4'
            key={index}
          >
            <div className='flex items-center gap-6 text-sm'>
              <img src={item.images[0]} className='w-16 sm:w-20' alt={item.name} />
              <div className='flex flex-col'>
                <p className='sm:text-base font-medium'>{item.name}</p>
                <div className='flex items-center gap-3 mt-2 text-base text-gray-500'>
                  <p>{currency}{item.price}</p>
                  <p>Quantity: 1</p>
                  <p>Size: M</p>
                </div>
                <p>Date: <span className='text-gray-400'>{new Date().toLocaleDateString()}</span></p>
              </div>
            </div>
            <div className='md:w-1/2 flex justify-between'>
              <div className='flex items-center gap-2'>
                <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                <p className='text-sm md:text-base'>Ready to Ship</p>

              </div>
              <button className='border px-4 py-3 text-sm font-medium rounded-sm cursor-pointer'>Track Order</button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;

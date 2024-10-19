import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { backendurl, currency } from '../App';
import { toast } from 'react-toastify';
const List = ({ token }) => {
  const [listItems, setlistItems] = useState([]);
  const fetchList = async () => {
    try {
      const response = await axios.get(backendurl + "/api/product/listproducts");
      if (response.data.success) {
        setlistItems(response.data.products)
      }
      else {
        toast.error(response.data.message)
      }
    }
    catch (err) {
      console.log(err)
      toast.error(err.message)
    }
  }
  useEffect(() => {
    fetchList()
  }, [])

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(backendurl + "/api/product/remove", { id }, { headers: { token } });
      console.log(response)
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      }

      else {
        console.log(response.data.message)
      }

    }
    catch (Err) {
      console.log(Err);
      toast.error(Err.message)
    }

  }
  return (
    <div>
      <h1 className='text-3xl text-black text-center mb-3'>List of Products</h1>
      <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-2 px-2 border bg-gray-100 text-sm'>
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
        <b className='text-center'>Action</b>
      </div>
      {
        listItems.map((item, index) => (
          <div key={index} className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-2 px-2 border text-sm'>
            <img className="w-12" src={item.images[0]} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{currency}{item.price}</p>
            <p onClick={() => removeProduct(item._id)} className='text-lg cursor-pointer text-right md:text-center'>X</p>
          </div>
        ))
      }
    </div>
  )
}

export default List

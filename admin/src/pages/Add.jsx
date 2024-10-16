import React, { useState } from 'react'
import Login from '../components/Login'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendurl } from '../App'
import { toast } from 'react-toastify'

const Add = ({token}) => {
  const [image1,setImage1]   = useState(false);
  const [image2,setImage2]   = useState(false);
  const [image3,setImage3]   = useState(false);
  const [image4,setImage4]   = useState(false);
  const [name,setName] = useState("");
  const [content,setContent]   = useState("");
  const [category,setCategory] = useState("Women");
  const [subCategory,setSubCategory] = useState("Topwear");
  const [price,setPrice] = useState();
  const [sizes,setSizes] = useState([]);
  const [bestseller,setBestseller]  = useState(false);
  const onSubmitHandeler = async (e)=>{
    e.preventDefault();

    try{
      const formdata = new FormData();
      formdata.append("name",name);
      formdata.append("description",content);
      formdata.append("price",price);
      formdata.append("category",category);
      formdata.append("subCategory",subCategory);
      formdata.append("bestSeller",bestseller);
      formdata.append("sizes",JSON.stringify(sizes))
      image1 && formdata.append("image1",image1);
      image2 && formdata.append("image2",image2);
      image3 && formdata.append("image3",image3);
      image4 && formdata.append("image4",image4);


      const response = await axios.post(backendurl+"/api/product/add",formdata,{headers:{token}});
      if(response.data.success){
        toast.success(response.data.message);
        setBestseller(false);
        setCategory("");
        setContent("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setName("")
        setPrice("");
        setSizes([])
      }
      else{
        toast.error(response.data.message);
      }
    }
    catch(err){
      console.log(err);
      toast.error(response.addTrailers.message);
    }

  }
  return (
    <form className='max-w-md' onSubmit={onSubmitHandeler}>
      <div>
        <p className='text-3xl text-black mb-2'>Upload Images</p>
        <div className='flex gap-3 mt-3 '>
          <label htmlFor="image1">
            <img className='w-20' src={!image1 ?assets.upload_area:URL.createObjectURL(image1)} alt="Upload Image" />
            <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id="image1" hidden />
          </label>
          <label htmlFor="image2">
            <img className='w-20' src={!image2 ?assets.upload_area:URL.createObjectURL(image2)} alt="Upload Image" />
            <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id="image2" hidden />
          </label>
          <label htmlFor="image3">
            <img className='w-20' src={!image3 ?assets.upload_area:URL.createObjectURL(image3)} alt="Upload Image" />
            <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id="image3" hidden />
          </label>
          <label htmlFor="image4">
            <img className='w-20' src={!image4 ?assets.upload_area:URL.createObjectURL(image4)} alt="Upload Image" />
            <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id="image4" hidden />
          </label>
        </div>
      </div>
      <div className='mt-3'>
        <p className='mb-2'>Product Name</p>
        <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full px-4 py-3 border border-gray-300 outline-none rounded-l' type="text" placeholder='Enter Product Name ' />
      </div>
      <div className='mt-3'>
        <p className='mb-2'>Product Name</p>
        <textarea onChange={(e)=>setContent(e.target.value)} value={content} className='w-full px-4 py-3 border border-gray-300 outline-none rounded-l' type="text" placeholder='Enter Product Content ' />
      </div>
      <div className='flex w-full'>


        <div className='flex gap-6 
       '>
          <div className='flex flex-col'>
            <p className='mb-3'>Product Category</p>
            <select onChange={(e)=>setCategory(e.target.value)} value={category} className='px-3 py-2 bg-white'>
              <option value="Women">Women</option>
              <option value="Men">Men</option>
              <option value="kids">Kids</option>
            </select>
          </div>
          <div className='flex flex-col'>
            <p className='mb-3'>Subcategory</p>
            <select onChange={(e)=>setSubCategory(e.target.value)} value={subCategory} className='px-3 py-2 bg-white'>
              <option value="Topwear">Topwear</option>
              <option value="Bottomwear">Bottomwear</option>
              <option value="Winterwear">Winterwear</option>
            </select>
          </div>
          
          <div>
            <p className='mb-3'>Product Price</p>
            <input onChange={(e)=>setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type="Number"  placeholder='25'/>
          </div>
        </div>
      </div>
      <div className='mt-3'>
        <p className='mb-3'>Product Sizes</p>
        <div className='flex gap-2'>
          <div onClick={()=>setSizes((prev=> prev.includes("S")?prev.filter((item)=>item!=="S"):[...prev,"S"]))} >
            <p className={`px-3 py-1 ${sizes.includes("S")?"bg-pink-100":"bg-slate-200"} cursor-pointer`}>S</p>
          </div>
          <div onClick={()=>setSizes((prev=> prev.includes("S")?prev.filter((item)=>item!=="S"):[...prev,"M"]))}>
            <p className={`px-3 py-1 ${sizes.includes("M")?"bg-pink-100":"bg-slate-200"} cursor-pointer`}>M</p>
          </div>
          <div onClick={()=>setSizes((prev=> prev.includes("S")?prev.filter((item)=>item!=="S"):[...prev,"L"]))}>
            <p className={`px-3 py-1 ${sizes.includes("L")?"bg-pink-100":"bg-slate-200"} cursor-pointer`}>L</p>
          </div>
          <div onClick={()=>setSizes((prev=> prev.includes("S")?prev.filter((item)=>item!=="S"):[...prev,"XL"]))}>
            <p className={`px-3 py-1 ${sizes.includes("XL")?"bg-pink-100":"bg-slate-200"} cursor-pointer`}>XL</p>
          </div>
          <div onClick={()=>setSizes((prev=> prev.includes("S")?prev.filter((item)=>item!=="S"):[...prev,"XXL"]))}>
            <p className={`px-3 py-1 ${sizes.includes("XXL")?"bg-pink-100":"bg-slate-200"} cursor-pointer`}>XXL</p>
          </div>
        </div>

      </div>
      <div className='flex gap-2 mt-2'>
        <input onChange={()=>setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id='bestseller' />
        <label className='cursor-pointer' htmlFor="bestseller">Add to bestseller</label>
      </div>
      <button type="submit" className='w-28 py-3 mt-4 bg-black text-white'>Add</button>

    </form>
  )
}

export default Add

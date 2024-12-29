import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios'

import { toast } from 'react-toastify';


const Add = () => {
  const [image1,setImage1]=useState(false)
  const [image2,setImage2]=useState(false)
  const [image3,setImage3]=useState(false)
  const [image4,setImage4]=useState(false)
  const [image5,setImage5]=useState(false)
  const [name,setName]=useState("")
  const [description ,setDescription]=useState("")
  const [category,setCategory]=useState('Boys')
  const [subCategory,setSubCategory]=useState('Single')
  const [price,setPrice]=useState("")
  const [ShortDescription,setShortDescription]=useState("")
  

  const onSubmitHandler=async(e)=>{
       e.preventDefault()
       try {
        const formData=new FormData();
        formData.append("name",name)
        formData.append("description",description)
        formData.append("price",price)
        formData.append("category",category)
        formData.append("subCategory",subCategory)
        formData.append("ShortDescription",ShortDescription)
        

      image1 && formData.append("image1",image1)
      image2 && formData.append("image2",image2)
      image3 && formData.append("image3",image3)
      image4 && formData.append("image4",image4)
      image5 && formData.append("image5",image5)

      const response=await axios.post("http://localhost:3000/api/product/add",formData)
      if (response.data.success) {
        toast.success(response.data.message)
        setName('')
        setDescription('')
        setShortDescription('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setImage5(false)
        setPrice('')
      }else{
        toast.error(response.data.message)
      }
       } catch (error) {
        console.log(error)
        toast.error(error.message)
       }
  }
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
      <div>
        <p className='mb-2'>Upload Image</p>
        <div className='flex gap-2'>
          <label htmlFor="image1">
            <img className='w-20' src={!image1?assets.upload_area: URL.createObjectURL(image1)} alt="" />
            <input onChange={(e)=>setImage1(e.target.files[0])} type="file"  id="image1" hidden/>
          </label>

          <label htmlFor="image2">
            <img className='w-20' src={!image2?assets.upload_area: URL.createObjectURL(image2)} alt="" />
            <input onChange={(e)=>setImage2(e.target.files[0])} type="file"  id="image2" hidden/>
          </label>

          <label htmlFor="image3">
            <img className='w-20' src={!image3?assets.upload_area: URL.createObjectURL(image3)} alt="" />
            <input onChange={(e)=>setImage3(e.target.files[0])} type="file"  id="image3" hidden/>
          </label>

          <label htmlFor="image4">
            <img className='w-20' src={!image4?assets.upload_area: URL.createObjectURL(image4)} alt="" />
            <input onChange={(e)=>setImage4(e.target.files[0])} type="file"  id="image4" hidden/>
          </label>


          <label htmlFor="image5">
            <img className='w-20' src={!image5?assets.upload_area: URL.createObjectURL(image5)} alt="" />
            <input onChange={(e)=>setImage5(e.target.files[0])} type="file"  id="image5" hidden/>
          </label>

        </div>
      </div>
      <div className='w-full'>
        <p className='mb-2'>PG name</p>
        <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type Here' />
      </div>

      <div className='w-full'>
        <p className='mb-2'>PG description</p>
        <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Write Content Here' />
      </div>
      <div className='w-full'>
        <p className='mb-2'>PG ShortDescription</p>
        <textarea onChange={(e)=>setShortDescription(e.target.value)} value={ShortDescription} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Write Content Here' />
      </div>
      <div className='w-full flex flex-col sm:flex-row gap-2 sm:gap-8'>
        <div>
          <p className='mb-2'>PG Category</p>
          <select onChange={(e)=>setCategory(e.target.value)} className='w-full px-3 py-2'>
            <option value="Boys">Boys</option>
            <option value="Girls">Girls</option>
           
          </select>
        </div>

        <div>
          <p className='mb-2'>Sub Category</p>
          <select onChange={(e)=>setSubCategory(e.target.value)} className='w-full px-3 py-2'>
            <option value="Single Room">Single Room</option>
            <option value="Double Room">Double Room</option>
            <option value="Triple Room">Triple Room</option>
          </select>
        </div>
        <div>
        <p className='mb-2'>Pg Price</p>
        <input onChange={(e)=>setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type="Number" placeholder='7000'/>
        

        </div>
      </div>

     

      

      <button className='w-28 py-3 mt-4 bg-black text-white ' type="submit">ADD</button>
    </form>
  );
}

export default Add;

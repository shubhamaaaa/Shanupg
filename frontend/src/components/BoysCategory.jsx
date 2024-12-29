import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';
import { motion } from "framer-motion"

const BoysCategory = () => {
    const {products}=useContext(ShopContext);
    const [latestProducts,setLatestProducts]=useState([]);

    useEffect(()=>{
        setLatestProducts(products.slice(0,3))
         },[products])
         console.log(products)
  return (
    <motion.div
    initial={{ opacity: 0, x: -200 }}
  transition={{ duration: 1 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className='mt-8 mb-14'>
    <div className='w-full h-[200px] bg-[#36454f] flex items-center justify-center'>
        <p className='sm:text-7xl text-5xl font-semibold text-yellow-500 bebas-neue-regular'>PG For Boys</p>
    </div>

    <div  className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:mx-16 m-4 mt-8'>
    {
    latestProducts.map((item,index)=>(
   <ProductItem key={index} id={item._id} image={item.image} name={item.name} description={item.description} category={item.category} subCategory={item.subCategory} price={item.price}/>

   
    ))
  }

    </div>
</motion.div>
  )
}

export default BoysCategory
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';

import ProductItem from './ProductItem';

const RelatedProducts = ({category,subCategory}) => {
    const {products}=useContext(ShopContext);
    const [related , setRelated]=useState([])

    useEffect(()=>{
       if (products.length>0) {
        let productsCopy=products.slice();
        productsCopy=productsCopy.filter((item)=>category===item.category)
        productsCopy=productsCopy.filter((item)=>subCategory===item.subCategory)
        setRelated(productsCopy.slice(0,3))
       }
    },[products])
  return (
    <div className='my-24'>
       <div className='w-full h-[200px]  bg-[#36454f] flex items-center justify-center'>
            <p className='sm:text-7xl text-4xl font-semibold text-yellow-500 bebas-neue-regular'>Related Products</p>
        </div>
      <div className='grid grid-cols-1 sm:grid-cols-3  gap-4 gap-y-6 mt-6'>
        {
          related.map((item,index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} ShortDescription={item.ShortDescription} category={item.category} subCategory={item.subCategory} price={item.price}/>
          ))
        }

      </div>
      
    </div>
  );
}

export default RelatedProducts;

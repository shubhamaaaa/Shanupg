import React from 'react'
import { motion } from "framer-motion"
const Banners = () => {
  return (
    <motion.div
    initial={{ opacity: 0, x: -200 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
     className='w-full sm:h-[450px] h-full bg-[#36454f] items-center justify-center mt-[60px] mb-8 flex sm:flex-row flex-col p-6'>
        <div className='sm:w-[60%] p-5 w-full flex flex-col sm:items-start items-center justify-center max-w-[900px] sm:ml-20  py-20'>
            <p className='sm:text-5xl text-3xl text-white merriweather-regular'>Ready to book your stay in Vaishali / Ghaziabad?</p>
            <p className='text-white sm:text-xl text-base pt-6'>Look no further than SHANU PG! With our convenient location, affordable prices, and excellent services, we’re the perfect choice for students and professionals alike. </p>
            <p className='text-white text-base pt-20'>Don’t miss out – book your stay today!</p>
        </div>

        <div className='sm:w-[40%] p-5 w-full flex flex-col items-center justify-center gap-5 cursor-pointer'>
            <div className="border flex flex-row items-center gap-5 w-full sm:w-fit justify-center bg-red-500 px-12 py-3 text-white font-medium rounded hover:bg-red-600 transition-all duration-300">
            <a href="https://wa.me/919335162135" target='_blank'>CHECK PRICING</a>
            </div>

           <div className="border w-full flex flex-row items-center gap-5 cursor-pointer  sm:w-fit justify-center bg-yellow-500 px-12 py-3 text-white font-medium rounded hover:bg-yellow-600 transition-all duration-300">
           <img className='w-5' src="https://img.icons8.com/?size=100&id=14181&format=png&color=000000" alt="" />
            <a href="tel:+919958724997">CALL US NOW</a>
           </div>
            
        </div>

    </motion.div>
  )
}

export default Banners
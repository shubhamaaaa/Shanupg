import React from 'react'
import { motion } from "framer-motion"
const About = () => {
  return (
<motion.div
 initial={{ opacity: 0, x: -200 }}
 transition={{ duration: 1 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 className='mb-5'>
<h2 className="sm:text-6xl text-5xl mt-10 font-semibold bebas-neue-regular text-center mb-16 text-yellow-500">Learn more about us</h2>

<div className='flex md:flex-row gap-8 flex-col '>

<div className=" md:w-1/2 flex items-center justify-center container w-full p-5 ">
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/aYyyvt_LSSg"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>
</div>

<div className='md:w-1/2 flex flex-col items-start justify-center container gap-8 mb-10 max-w-[600px] w-full p-5'>
<h1 className='text-4xl font-semibold text-yellow-500 merriweather-regular '>Shanu PG -Best PG in Vaishali Delhi NCR for Boys & Girls</h1>
<p className='text-gray-700'>Shanu Pg vaishali. is a student dormitory located in Ghaziabad, Uttar Pradesh. The average rating of this place is 4.90 out of 5 stars based on 31 reviews. The street address of this place is House no-278,first floor, Saraswati Ln, Sector 5, Vaishali, Ghaziabad, Uttar Pradesh 201010, India. It is about 1.66 kilometers away from the Sahibabad railway station.</p>
<div className="border flex flex-row items-center gap-5 justify-center mt-10 bg-yellow-500 px-12 py-3 text-white hover:text-gray-900 font-medium rounded hover:bg-yellow-600 transition-all duration-300">
        <a href="tel:+919958724997">CALL US NOW</a>
        <img className='w-6' src="https://img.icons8.com/?size=100&id=11686&format=png&color=000000" alt="" />
</div> 

</div>

</div>

    </motion.div>
  )
}

export default About
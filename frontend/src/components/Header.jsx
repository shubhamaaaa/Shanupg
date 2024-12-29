import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";

const Header = () => {
  return (
    <div className='relative w-full h-[500px]'>
      {/* Swiper Slider for autoplay */}
      <Swiper
        modules={[Autoplay]} // Add autoplay module
        autoplay={{
          delay: 3000, // Autoplay interval 3 seconds
          disableOnInteraction: false, // Continue autoplay after interaction
        }}
        loop={true} // Infinite loop
        spaceBetween={50}
        slidesPerView={1}
        className="w-full h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={assets.s_img1}
              alt="Image 1"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-30 p-4">
              <p className="sm:text-8xl text-5xl  bebas-neue-regular font-semibold ">WELCOME TO SHANU PG</p>
              <p className="sm:text-2xl text-xl text-white font-semibold mt-4">BEST PG IN VAISHALI GHAZIABAD</p>

              {/* Navigation Buttons */}
              <ul className='mt-6'>
                <NavLink to='/Gallery' className='flex flex-row items-center justify-center gap-3 border bg-yellow-500 px-8 py-3 rounded hover:bg-yellow-400 transition-all'>
                  <li className='text-gray-700 font-medium'>BOYS PG</li>
                  <img className='w-3' src="https://img.icons8.com/?size=100&id=98967&format=png&color=000000" alt="" />
                </NavLink>
              </ul>

              <div className="border flex flex-row items-center gap-5 justify-center bg-red-500 px-12 py-3 text-white font-medium rounded hover:bg-red-600 transition-all duration-300 mt-4">
                <img className='w-5' src="https://img.icons8.com/?size=100&id=14181&format=png&color=000000" alt="" />
                <a href="tel:+919958724997">CALL US NOW</a>
              </div>

              <ul className='mt-4'>
                <NavLink to='/Gallery' className='flex flex-row items-center justify-center gap-3 border bg-yellow-500 px-8 py-3 rounded hover:bg-yellow-400 transition-all'>
                  <li className='text-gray-700 font-medium'>GIRLS PG</li>
                  <img className='w-3' src="https://img.icons8.com/?size=100&id=98967&format=png&color=000000" alt="" />
                </NavLink>
              </ul>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={assets.s_img2}
              alt="Image 2"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-30 p-4">
              <p className="sm:text-8xl text-5xl bebas-neue-regular font-semibold ">WELCOME TO SHANU PG</p>
              <p className="sm:text-2xl text-xl  font-semibold mt-4">BEST PG IN VAISHALI GHAZIABAD</p>

              {/* Navigation Buttons */}
              <ul className='mt-6'>
                <NavLink to='/Gallery' className='flex flex-row items-center justify-center gap-3 border bg-yellow-500 px-8 py-3 rounded hover:bg-yellow-400 transition-all'>
                  <li className='text-gray-700 font-medium'>BOYS PG</li>
                  <img className='w-3' src="https://img.icons8.com/?size=100&id=98967&format=png&color=000000" alt="" />
                </NavLink>
              </ul>

              <div className="border flex flex-row items-center gap-5 justify-center bg-red-500 px-12 py-3 text-white font-medium rounded hover:bg-red-600 transition-all duration-300 mt-4">
                <img className='w-5' src="https://img.icons8.com/?size=100&id=14181&format=png&color=000000" alt="" />
                <a href="tel:+919958724997">CALL US NOW</a>
              </div>

              <ul className='mt-4'>
                <NavLink to='/Gallery' className='flex flex-row items-center justify-center gap-3 border bg-yellow-500 px-8 py-3 rounded hover:bg-yellow-400 transition-all'>
                  <li className='text-gray-700 font-medium'>GIRLS PG</li>
                  <img className='w-3' src="https://img.icons8.com/?size=100&id=98967&format=png&color=000000" alt="" />
                </NavLink>
              </ul>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={assets.s_img3}
              alt="Image 3"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-30 p-4">
              <p className="sm:text-8xl text-5xl bebas-neue-regular font-semibold ">WELCOME TO SHANU PG</p>
              <p className="sm:text-2xl text-xl  font-semibold mt-4">BEST PG IN VAISHALI GHAZIABAD</p>

              {/* Navigation Buttons */}
              <ul className='mt-6'>
                <NavLink to='/Gallery' className='flex flex-row items-center justify-center gap-3 border bg-yellow-500 px-8 py-3 rounded hover:bg-yellow-400 transition-all'>
                  <li className='text-gray-700 font-medium'>BOYS PG</li>
                  <img className='w-3' src="https://img.icons8.com/?size=100&id=98967&format=png&color=000000" alt="" />
                </NavLink>
              </ul>

              <div className="border flex flex-row items-center gap-5 justify-center bg-red-500 px-12 py-3 text-white font-medium rounded hover:bg-red-600 transition-all duration-300 mt-4">
                <img className='w-5' src="https://img.icons8.com/?size=100&id=14181&format=png&color=000000" alt="" />
                <a href="tel:+919958724997">CALL US NOW</a>
              </div>

              <ul className='mt-4'>
                <NavLink to='/Gallery' className='flex flex-row items-center justify-center gap-3 border bg-yellow-500 px-8 py-3 rounded hover:bg-yellow-400 transition-all'>
                  <li className='text-gray-700 font-medium'>GIRLS PG</li>
                  <img className='w-3' src="https://img.icons8.com/?size=100&id=98967&format=png&color=000000" alt="" />
                </NavLink>
              </ul>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={assets.s_img4}
              alt="Image 4"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-30 p-4">
              <p className="sm:text-8xl text-5xl bebas-neue-regular font-semibold ">WELCOME TO SHANU PG</p>
              <p className="sm:text-2xl text-xl  font-semibold mt-4">BEST PG IN VAISHALI GHAZIABAD</p>

              {/* Navigation Buttons */}
              <ul className='mt-6'>
                <NavLink to='/Gallery' className='flex flex-row items-center justify-center gap-3 border bg-yellow-500 px-8 py-3 rounded hover:bg-yellow-400 transition-all'>
                  <li className='text-gray-700 font-medium'>BOYS PG</li>
                  <img className='w-3' src="https://img.icons8.com/?size=100&id=98967&format=png&color=000000" alt="" />
                </NavLink>
              </ul>

              <div className="border flex flex-row items-center gap-5 justify-center bg-red-500 px-12 py-3 text-white font-medium rounded hover:bg-red-600 transition-all duration-300 mt-4">
                <img className='w-5' src="https://img.icons8.com/?size=100&id=14181&format=png&color=000000" alt="" />
                <a href="tel:+919958724997">CALL US NOW</a>
              </div>

              <ul className='mt-4'>
                <NavLink to='/Gallery' className='flex flex-row items-center justify-center gap-3 border bg-yellow-500 px-8 py-3 rounded hover:bg-yellow-400 transition-all'>
                  <li className='text-gray-700 font-medium'>GIRLS PG</li>
                  <img className='w-3' src="https://img.icons8.com/?size=100&id=98967&format=png&color=000000" alt="" />
                </NavLink>
              </ul>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay module
import { assets } from '../assets/assets';

const Gallery = () => {
  const images = [
    assets.img1,
    assets.img2,
    assets.img3,
    assets.img4,
    assets.img5,
    assets.img6,
    assets.img7,
    assets.img8,
    assets.img9,
    assets.img10,
    assets.img11,
    assets.img12,
    assets.img13,
  ];

  return (
    <div className='mb-8'>
      <div className='flex flex-col items-center text-center justify-center mt-14 gap-6'>
        <p className='text-5xl font-semibold text-yellow-500'>Gallery</p>
        <p className='text-gray-800 text-xl'>PG For Girls & Boys in Vaishali Sec-5 Ghaziabad</p>
      </div>
      <div className='mt-12 max-w-[90%] mx-auto'>
        <Swiper
          slidesPerView={4} // Show 4 images per slide
          spaceBetween={20} // Space between slides
          navigation={true} // Add navigation arrows
          pagination={{ clickable: true }} // Add pagination
          autoplay={{
            delay: 3000, // Slide interval in milliseconds (3 seconds)
            disableOnInteraction: false, // Keep autoplay running even after manual interaction
          }}
          modules={[Navigation, Pagination, Autoplay]} // Include Autoplay module
          breakpoints={{
            320: { slidesPerView: 1 }, 
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 }, // On large screens, show 4 images
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img className='w-full h-[280px] rounded-lg object-cover' src={image} alt={`Gallery ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;

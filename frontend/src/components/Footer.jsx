import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-[#171717] sm:mb-10 mb-0 w-full sm:h-[680px] h-[1450px] mt-10'>

        <div className='flex sm:flex-row flex-col sm:justify-between justify-center sm:items-start sm:gap-0 gap-5 items-center sm:pt-20 pt-10 px-20 '>

            <div>
            <Link to='/'>
          <p className='bungee-spice-regular  text-3xl space-x-2 font-semibold text-center   text-green-700'>
            SHANU
            <span className='text-xl font-medium text-yellow-500'>PG</span>
          </p>
        </Link> 
      </div>

      <div className='flex flex-row gap-3'>
        <a href="https://www.facebook.com/share/1AgMXt4rC2/?mibextid=LQQJ4d" target="_blank" ><img className='w-10' src="https://img.icons8.com/?size=100&id=114441&format=png&color=000000" alt="" /></a>
        <a href="https://www.instagram.com/santosh6894?igsh=a3phdHVkcjVoczQ2&utm_source=qr" target="_blank" ><img className='w-10' src="https://img.icons8.com/?size=100&id=BrU2BBoRXiWq&format=png&color=000000" alt="" /></a>
        <a href="https://wa.me/919335162135" target="_blank" ><img className='w-10' src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000" alt="" /></a>
        <a href="https://youtube.com/@santoshkumarshanupg1371?si=2VbOyQ6cZL0jF-BY" target="_blank" ><img className='w-10' src="https://img.icons8.com/?size=100&id=19318&format=png&color=000000" alt="" /></a>
      </div>
       
</div>

         <div className='flex sm:flex-row flex-col w-full'>

        
        <div className='pt-10 px-20 flex sm:flex-row sm:gap-7 gap-2 flex-col items-start sm:w-1/2 w-full'>
       

        <div>
            <p className='py-6 text-yellow-700 hover:text-yellow-900 font-semibold text-xl'>Quick Links</p>
            <div className='flex sm:flex-row flex-col  pt-3 '>
            
            <ul className='flex flex-col gap-4 '>
            <NavLink className='gap-2 flex flex-row items-center' to='/about'>
                <img className='w-3 rotate-180' src="https://img.icons8.com/?size=100&id=BpFC454bdN9Y&format=png&color=000000" alt="" />
                <li className='py-1 text-lg text-yellow-500 hover:text-yellow-700 '>About Us</li>
            </NavLink>
            <NavLink className='gap-2 flex flex-row items-center'  to='/Amenities' >
               <img className='w-3 rotate-180' src="https://img.icons8.com/?size=100&id=BpFC454bdN9Y&format=png&color=000000" alt="" />  
                <li className='py-1 text-lg text-yellow-500 hover:text-yellow-700 '>AMENITIES</li>
            </NavLink>
            <NavLink className='gap-2 flex flex-row items-center' to='/contact'>
                <img className='w-3 rotate-180' src="https://img.icons8.com/?size=100&id=BpFC454bdN9Y&format=png&color=000000" alt="" />
                <li className='py-1 text-lg text-yellow-500 hover:text-yellow-700 '>Contact Us</li>
            </NavLink>
            <NavLink className='gap-2 flex flex-row items-center'  to='/foodmenu' >
               <img className='w-3 rotate-180' src="https://img.icons8.com/?size=100&id=BpFC454bdN9Y&format=png&color=000000" alt="" /> 
                <li className='py-1 text-lg text-yellow-500  hover:text-yellow-700 '>FOOD MENU</li>
            </NavLink>
            <NavLink className='gap-2 flex flex-row items-center'  to='/bookingform' >
                <img className='w-3 rotate-180' src="https://img.icons8.com/?size=100&id=BpFC454bdN9Y&format=png&color=000000" alt="" />
                <li className='py-1 text-lg text-yellow-500 hover:text-yellow-700 '>Booking Form</li>
            </NavLink>
            </ul>


            <ul className='flex flex-col gap-4 '>
            <NavLink className='gap-2 flex flex-row items-center' to='/faqs'>
                <img className='w-3 rotate-180' src="https://img.icons8.com/?size=100&id=BpFC454bdN9Y&format=png&color=000000" alt="" />
                <li className='py-1 text-lg text-yellow-500 hover:text-yellow-700 '>FAQs</li>
            </NavLink>
            
            </ul>
           </div>
           </div>

           <div className='flex flex-col '>
             <p className='py-6 text-yellow-700 hover:text-yellow-900 font-semibold text-xl'>Contact Us</p>
             <div className='pt-3 flex flex-row gap-3 items-center'>
                <img className='w-6 h-6' src="https://img.icons8.com/?size=100&id=7880&format=png&color=FAB005" alt="" />
                <p className='text-lg text-yellow-500 hover:text-yellow-700'>Vaishali, Sector-5, Ghaziabad</p>
             </div>

             <div className='pt-3 flex flex-row gap-2 space-y-2 items-center'>
                <a href="https://wa.me/919335162135"  target="_blank" ><img className='w-6 h-6'  src="https://img.icons8.com/?size=100&id=16733&format=png&color=FAB005" alt="" /></a>
                <a href="https://wa.me/919335162135" target="_blank" className='text-lg text-yellow-500 hover:text-yellow-700 ' >+91-9335162135</a>
            </div>

            <div className='pt-3 flex flex-row gap-2  items-center'>
                <a href="http://" target="_blank" ><img className='w-10 h-6'  src="https://img.icons8.com/?size=100&id=ptAjLogGbrSi&format=png&color=FAB005" alt="" /></a>
                <a href="http://shubshukla2332@gmail.com" target="_blank" className='text-lg text-yellow-500 hover:text-yellow-700 ' >shubshukla2332@gmail.com</a>
            </div>
            
            
           </div>
            
           </div>


           <div className='sm:w-1/2  w-full flex flex-col items-center gap-3 mt-3 pb-8 sm:pb-0'>
           <div>
               <p className='text-yellow-700 hover:text-yellow-900 font-semibold text-2xl '>Head-Office Navigation</p>
           </div>
           <div className="map-container" style={{ overflow: "hidden", width: "80%", height: "300px" }}>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.6001696973976!2d77.34198927500876!3d28.641743083663314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb1cefce70ff%3A0xaad6179139abbbbc!2sShanu%20Pg%20vaishali.!5e0!3m2!1sen!2sin!4v1732884337262!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Shanu PG Location"
  ></iframe>
</div>


           </div>
            

        </div>
        <hr className='w-[80%] h-[3px] bg-yellow-500 outline-none mx-auto mt-5' />
        <div className='flex flex-col items-center justify-center my-6 sm:pb-0 pb-6'>
             <p className='text-lg text-yellow-500 hover:text-yellow-700 '>Copyright © 2024 ShanuPg.com</p>
             <p className='text-lg text-yellow-500 hover:text-yellow-700 '>Made by Shubham Shukla</p>
        </div>

       



    </div>
  )
}

export default Footer
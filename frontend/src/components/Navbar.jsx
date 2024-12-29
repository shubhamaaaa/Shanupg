import React, { useState } from 'react'
import {Link, NavLink, useNavigate } from 'react-router-dom';
const Navbar = () => {
const navigate =useNavigate();
const [showMenu,setShowMenu]=useState(false);
  return (
    <div>
        <div className='flex items-center justify-between text-sm py-4   sm:px-[100px] px-4  bg-[#171717] border-b border-b-gray-400'>
        <Link to='/'>
          <p className='bungee-spice-regular  text-3xl space-x-2 font-semibold text-center   text-green-700'>
            SHANU
            <span className='text-xl font-medium text-yellow-500'>PG</span>
          </p>
        </Link>
        <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink to='/'>
                <li className='py-1 text-yellow-500 hover:text-[#48D1CC]'>HOME</li>
                <hr className='border-none outline-none h-0.5 bg-[#48D1CC] w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/Gallery' >
                <li className='py-1 text-yellow-500 hover:text-[#48D1CC]'>GALLERY</li>
                <hr className='border-none outline-none h-0.5 bg-[#48D1CC] w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/Amenities' >
                <li className='py-1 text-yellow-500  hover:text-[#48D1CC]'>AMENITIES</li>
                 <hr className='border-none outline-none h-0.5 bg-[#48D1CC] w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/faqs' >
                <li className='py-1 text-yellow-500 hover:text-[#48D1CC]'>FAQs</li>
                 <hr className='border-none outline-none h-0.5 bg-[#48D1CC] m-auto hidden'/>
            </NavLink>
            <NavLink to='/bookingform' >
                <li className='py-1 text-yellow-500  hover:text-[#48D1CC]'>BOOKING FORM</li>
                 <hr className='border-none outline-none h-0.5 bg-[#48D1CC] w-3/5 m-auto hidden'/>
            </NavLink>

            <NavLink to='/about'>
                <li className='py-1 text-yellow-500 hover:text-[#48D1CC]'>ABOUT</li>
                <hr className='border-none outline-none h-0.5 bg-[#48D1CC] w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/contact'>
                <li className='py-1 text-yellow-500 hover:text-[#48D1CC]'>CONTACT</li>
                <hr className='border-none outline-none h-0.5 bg-[#48D1CC] w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/foodmenu'>
                <li className='py-1 text-yellow-500 hover:text-[#48D1CC]'>FOOD MENU</li>
                <hr className='border-none outline-none h-0.5 bg-[#48D1CC] w-3/5 m-auto hidden'/>
            </NavLink>
        </ul>

        
         <img onClick={()=>setShowMenu(true)} className='w-8 md:hidden border   border-white px-2 py-2 bg-white' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAAA2CAYAAABgMA/LAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADLSURBVHgB7dmxDcIwEEbhC2koKTMCZTZDlHQuKTNCVmEDj+GOjMBZSJAGxbJdHPH7JCv9r9jN60SN4+j0c9FzEqwtembv/bXTkSZ5j4TfXBzqKfxJW5aDIEkcahJsmfsQwmMYhnj1znqOgrX4mN/1Mb8JAAAAAAAAAPytTgo00AO/XU8yNdYDXclQLfVAul6qkqFa6oFzL5ka6YF0PQAAAAAAAAA7UNT1ajPYCcu7Xm3GO6GzNJTlTkjXS2VpKMudML/r1Wa0E3663gvhCDx/4CktcwAAAABJRU5ErkJggg==" alt="" /> 
         </div>
            <div>
            {/*-------mobile menu------ */}
            <div className={`${showMenu ? 'fixed w-full ':'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden  bg-white transition-all`}>
                <div className='flex items-center justify-between px-5 py-6'>
                    
                    <img className='w-7' onClick={()=>setShowMenu(false)} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAkCAYAAACJ8xqgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEJwAABCcASbNOjQAAAGASURBVEhLrZa7cYQwFEX5RiRbwpawLoEEhtAVeN2BOzCuxHYFJMzwSWjBJVCCIzLA74KQWRAgBGcG0GOGw9WHERrIsizM8/y9Kw6iJ0lyN03zk9Wh53kfrK2EQbywNgjxAtZWwqiq6pmuP32paUh7RKrjFEXRxXGcgpo31KCu69cgCL5YKU0nBGdJuRBQV6/UZUiv/Z390gchEEnbtn3yfZ+P8xoGu3IoTUmpXGqW/Z1OWNBa5UOxxizhwDRp0zS/uq67W0kXhUBFuioEe6WbQiCSYqIw3qjHzCZFxHSi6HO90FHgRajHSCUcmCallCWldcdJdwnBlnS3EKxJlYQgjuObZVkFxhP1IJWaFBG2bWu0fFj1j5IQXSZZRMdDOqUunzoppy4bGRmQEk5lJFr8njeFe2RgVbhXBhaFKjIgFKrKwEw4lQGaUbVNCnuzQHaXlQEuHG30U9k3K6Xouiz6a1CRAf1MGTDOlAGDlgR/mDaityMyDi2VME3TE36JNe0PEvQ33QXCa5oAAAAASUVORK5CYII=" alt="" />
                </div>
                <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                    <NavLink  onClick={()=>setShowMenu(false)} to='/'><p className='px-4 py-2 rounded-full inline-block'>HOME</p></NavLink>
                    <NavLink  onClick={()=>setShowMenu(false)} to='/Gallery'><p className='px-4 py-2 rounded-full inline-block'>GALLERY</p></NavLink>
                    <NavLink  onClick={()=>setShowMenu(false)} to='/Amenities'><p className='px-4 py-2 rounded-full inline-block'>AMENITIES</p></NavLink>
                    <NavLink  onClick={()=>setShowMenu(false)} to='/faqs'><p className='px-4 py-2 rounded-full inline-block'>FAQs</p></NavLink>
                    <NavLink  onClick={()=>setShowMenu(false)} to='/bookingform'><p className='px-4 py-2 rounded-full inline-block'>BOOKING FORM</p></NavLink>
                    <NavLink  onClick={()=>setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded-full inline-block'>ABOUT</p></NavLink>
                    <NavLink  onClick={()=>setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded-full inline-block'>CONTACT</p></NavLink>
                    <NavLink  onClick={()=>setShowMenu(false)} to='/foodmenu'><p className='px-4 py-2 rounded-full inline-block'>FOOD MENU</p></NavLink>
                </ul>
            </div>
            
        </div>
      
    </div>

   

  )
}

export default Navbar
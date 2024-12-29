import React from 'react'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='w-[18%]  min-h-screen border-r-2'>
      <div className='flex mt-12 flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
        <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l" to="/add">
        <img className='w-5 h-5'  src='https://img.icons8.com/?size=100&id=37839&format=png&color=FA5252' alt="" />
        <p className='hidden md:block'>Add Items</p>

        </NavLink>

        <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l" to="/list">
        <img className='w-5 h-5' src="https://img.icons8.com/?size=100&id=20440&format=png&color=FA5252" alt="" />
        <p className='hidden md:block'>List Items</p>

        </NavLink>


        <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l" to="/booking">
        <img className='w-5 h-5' src="https://img.icons8.com/?size=100&id=18942&format=png&color=FA5252" alt="" />
        <p className='hidden md:block'>Booking Form</p>

        </NavLink>
      </div>
      
    </div>
  );
}



export default Sidebar
import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import AdminBookings from './pages/AdminBookings'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='flex items-center min-h-screen bg-[#F3FFF7]'>
      <ToastContainer/>
      <Sidebar/>
      <div className='flex-1 h-screen overflow-y-scroll bg-[#F3FFF7]'>
        <Navbar/>
        <div className='pt-8 pl-5 sm:pt-12 sm:pl-12'>
        <Routes>
            <Route path='/add' element={<Add/>}/>
            <Route path='/list' element={<List/>}/>
            <Route path='/booking' element={<AdminBookings/>}/>
        </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'

import Gallerys from './pages/Gallerys'
import Product from './pages/Product'
import AboutUs from './pages/AboutUs'
import FoodMenu from './pages/FoodMenu'
import BookingForm from './pages/BookingForm'
import ChatBubble from './components/ChatBubble'
import WhatsAppChatButton from './components/WhatsAppChatButton'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Amenities from './pages/Amenities'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'



const App = () => {
  return (
    <div>
       <ToastContainer/>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Gallery' element={<Gallerys/>}/>
      <Route path='/product/:productId' element={<Product/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/foodmenu' element={<FoodMenu/>}/>
      <Route path='/bookingform' element={<BookingForm/>}/>
      <Route path='/Amenities' element={<Amenities/>}/>
      <Route path='/faqs' element={<FAQ/>}/>
      <Route path='/contact' element={<Contact/>}/>
      
      </Routes>
      <Footer/>
      <ChatBubble />
      <WhatsAppChatButton/>
    </div>
  )
}

export default App
import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import About from '../components/About'
import GirlsCategory from '../components/GirlsCategory'
import BoysCategory from '../components/BoysCategory'
import Different from '../components/Different'
import Banners from '../components/Banners'
import Gallery from '../components/Gallery'


const Home = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <About/>
      <GirlsCategory/>
      <BoysCategory/>
      <Different/>
      <Banners/>
      <Gallery/>
      

    </div>
  )
}

export default Home
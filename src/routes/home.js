import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Banner from '../components/banner'
import Midsection from '../components/midsection'
import Location from '../components/location'
import WhyUs from '../components/whyus'

const Home = () => {
  return (
    <>   <Navbar/>
    <Banner />
    <Midsection/>
    <WhyUs/>
    <Location/>
    <Footer/>
    </>
 
  )
}
export default Home
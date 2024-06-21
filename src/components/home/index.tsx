import Footer from '@/layouts/Footer'
import Header from '@/layouts/Header'
import React from 'react'
import HeroArea from './HeroArea'
import AboutArea from './AboutArea'
import ServiceArea from './ServiceArea'

const Home = () => {
  return (
    <>
    <Header/>
    <HeroArea/>
    <AboutArea/>
    <ServiceArea/>
    <Footer/>
    </>
  )
}

export default Home
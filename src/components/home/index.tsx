import Footer from '@/layouts/Footer'
import Header from '@/layouts/Header'
import React from 'react'
import HeroArea from './HeroArea'
import AboutArea from './AboutArea'
import ServiceArea from './ServiceArea'
import CtaArea from './CtaArea'
import VideoArea from './VideoArea'
import ContactArea from './ContactArea'

const Home = () => {
  return (
    <>
    <Header/>
    <HeroArea/>
    <AboutArea/>
    <ServiceArea/>
    <CtaArea/>
    <VideoArea/>
    <ContactArea/>
    <Footer/>
    </>
  )
}

export default Home
import Footer from '@/layouts/Footer'
import Header from '@/layouts/Header'
import React from 'react'
import HeroArea from './HeroArea'
import AboutArea from './AboutArea'
import ServiceArea from './ServiceArea'
import CtaArea from './CtaArea'
import VideoArea from './VideoArea'
import ContactArea from './ContactArea'
import ProtfolioArea from './ProtfolioArea'
import OfferArea from './OfferArea'
import TeamArea from './TeamArea'
import AppointmentArea from './AppointmentArea'
import BlogArea from './BlogArea'
import SubscribeArea from './SubscribeArea'

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
    <ProtfolioArea/>
    <OfferArea/>
    <TeamArea/>
    <AppointmentArea/>
    <BlogArea/>
    <SubscribeArea/>
    <Footer/>
    </>
  )
}

export default Home
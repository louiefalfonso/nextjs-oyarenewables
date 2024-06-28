import Footer from '@/layouts/Footer'
import Header from '@/layouts/Header'
import React from 'react'
import HeroArea from './HeroArea'
import AboutArea from './AboutArea'
import ServiceArea from './ServiceArea'
import CtaArea from './CtaArea'
import VideoArea from './VideoArea'
import ContactArea from './ContactArea'
import OfferArea from './OfferArea'
import TeamArea from './TeamArea'
import AppointmentArea from './AppointmentArea'
import BlogArea from './BlogArea'
import SubscribeArea from './SubscribeArea'
import ProjectsArea from './ProjectsArea'

const Home = () => {
  return (
    <>
      <Header />
        <main>
          <HeroArea />
          <AboutArea />
          <ServiceArea />
          <CtaArea />
          <VideoArea />
          <ContactArea />
          <ProjectsArea />
          <OfferArea />
          <TeamArea />
          <AppointmentArea />
          <SubscribeArea />
        </main>
      <Footer />
    </>
  );
}

export default Home
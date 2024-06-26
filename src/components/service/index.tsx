import Footer from '@/layouts/Footer'
import Header from '@/layouts/Header'
import React from 'react'
import Breadcrumb from '../common/breadcrumb/breadcrumb'
import ServiceArea from '../home/ServiceArea'
import VideoArea from '../home/VideoArea'
import ContactArea from '../home/ContactArea'
import SubscribeArea from '../home/SubscribeArea'

const ServicePage = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb top_title="Services" title="Services" />
        <ServiceArea/>
        <VideoArea/>
        <ContactArea/>
        <SubscribeArea/>
      </main>
      <Footer />
    </>
  );
}

export default ServicePage
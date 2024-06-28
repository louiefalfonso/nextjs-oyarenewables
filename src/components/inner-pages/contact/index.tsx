
import Breadcrumb from '@/components/common/breadcrumb/breadcrumb'
import ContactArea from '@/components/home/ContactArea'
import SubscribeArea from '@/components/home/SubscribeArea'
import Footer from '@/layouts/Footer'
import Header from '@/layouts/Header'
import React from 'react'

const ContactPage = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb top_title="Contact Us" title="Contact Us" />
        <ContactArea/>
        <SubscribeArea/>
      </main>
      <Footer />
    </>
  );
}

export default ContactPage
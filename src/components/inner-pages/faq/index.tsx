import Breadcrumb from '@/components/common/breadcrumb/breadcrumb'
import Footer from '@/layouts/Footer'
import Header from '@/layouts/Header'
import React from 'react'
import FaqArea from './FaqArea'
import SubscribeArea from '@/components/home/SubscribeArea'

const FaqPage = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb top_title="FAQ" title="FAQ" />
        <FaqArea/>
        <SubscribeArea/>
      </main>
      <Footer />
    </>
  );
}

export default FaqPage
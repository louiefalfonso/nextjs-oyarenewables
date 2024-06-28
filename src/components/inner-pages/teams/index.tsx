import Breadcrumb from '@/components/common/breadcrumb/breadcrumb'
import SubscribeArea from '@/components/home/SubscribeArea'
import TeamArea from '@/components/home/TeamArea'
import Footer from '@/layouts/Footer'
import Header from '@/layouts/Header'
import React from 'react'

const TeamPage = () => {
  return (
    <>
      <main>
        <Header />
        <main>
          <Breadcrumb top_title="Teams" title="Teams" />
          <TeamArea/>
          <SubscribeArea/>
        </main>
        <Footer />
      </main>
    </>
  );
}

export default TeamPage
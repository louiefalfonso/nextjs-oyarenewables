
import Breadcrumb from '@/components/common/breadcrumb/breadcrumb';
import ServiceArea from '@/components/home/ServiceArea';
import SubscribeArea from '@/components/home/SubscribeArea';
import SolarPannelServicesPage from '@/components/inner-pages/service/SolarPannelServicesPage';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import Wrapper from '@/layouts/Wrapper'
import React from 'react'

const SolarPannelServices = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <Breadcrumb
          top_title="Solar Pannel Services"
          title="Solar Pannel Services"
        />
        <SolarPannelServicesPage/>
        <ServiceArea/>
        <SubscribeArea/>
        <Footer/>
      </Wrapper>
    </>
  );
}

export default SolarPannelServices